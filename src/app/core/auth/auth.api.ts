import { Injectable } from '@angular/core';
import { delay, map, Observable, of, throwError } from 'rxjs';
import {
  AuthSession,
  ForgotPasswordRequest,
  GoogleCredentialRequest,
  LoginRequest,
  RegisterRequest,
  ResetPasswordRequest,
  UpdateProfileRequest,
  UserProfile,
} from './auth.models';
import { createMockJwt, decodeJwtPayload } from './jwt.utils';

interface MockUser extends UserProfile {
  password: string;
}

let users: MockUser[] = [
  {
    id: 'usr_001',
    fullName: 'Demo Admin',
    email: 'admin@example.com',
    password: 'password',
    provider: 'password',
    avatarUrl: '',
  },
];

@Injectable({ providedIn: 'root' })
export class AuthApi {
  login(request: LoginRequest): Observable<AuthSession> {
    const user = users.find((item) => item.email.toLowerCase() === request.email.toLowerCase());

    if (!user || user.password !== request.password) {
      return throwError(() => new Error('Invalid email or password'));
    }

    return of(this.createSession(user)).pipe(delay(250));
  }

  register(request: RegisterRequest): Observable<AuthSession> {
    const existing = users.some((item) => item.email.toLowerCase() === request.email.toLowerCase());

    if (existing) {
      return throwError(() => new Error('This email is already registered'));
    }

    const user: MockUser = {
      id: `usr_${Date.now()}`,
      fullName: request.fullName,
      email: request.email,
      password: request.password,
      provider: 'password',
    };

    users = [user, ...users];

    return of(this.createSession(user)).pipe(delay(250));
  }

  requestPasswordReset(request: ForgotPasswordRequest): Observable<{ resetToken: string }> {
    const resetToken = request.email ? `reset-${Date.now()}` : '';

    return of({ resetToken }).pipe(delay(250));
  }

  resetPassword(request: ResetPasswordRequest): Observable<void> {
    if (!request.token || request.password.length < 6) {
      return throwError(() => new Error('Reset token or password is invalid'));
    }

    return of(undefined).pipe(delay(250));
  }

  updateProfile(currentUser: UserProfile, request: UpdateProfileRequest): Observable<AuthSession> {
    users = users.map((user) =>
      user.id === currentUser.id
        ? {
            ...user,
            fullName: request.fullName,
            email: request.email,
            avatarUrl: request.avatarUrl,
          }
        : user
    );

    const updatedUser: UserProfile = {
      ...currentUser,
      fullName: request.fullName,
      email: request.email,
      avatarUrl: request.avatarUrl,
    };

    return of(this.createSession(updatedUser)).pipe(delay(250));
  }

  signInWithGoogle(request: GoogleCredentialRequest): Observable<AuthSession> {
    const payload = decodeJwtPayload(request.credential);

    if (!payload?.email) {
      return throwError(() => new Error('Google credential did not include an email'));
    }

    const existing = users.find((item) => item.email.toLowerCase() === payload.email?.toLowerCase());
    const user: MockUser =
      existing ??
      {
        id: payload.sub || `google_${Date.now()}`,
        fullName: payload.name ?? payload.email,
        email: payload.email,
        avatarUrl: payload.picture,
        password: '',
        provider: 'google',
      };

    if (!existing) {
      users = [user, ...users];
    }

    return of(this.createSession(user)).pipe(delay(250));
  }

  private createSession(user: UserProfile): AuthSession {
    const accessToken = createMockJwt(user);
    const refreshToken = createMockJwt(user, 60 * 60 * 24 * 14);
    const expiresAt = new Date(Date.now() + 60 * 60 * 1000).toISOString();

    return {
      accessToken,
      refreshToken,
      expiresAt,
      user,
    };
  }
}

