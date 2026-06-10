import { computed, inject, Injectable, signal } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import {
  AuthSession,
  ForgotPasswordRequest,
  GoogleCredentialRequest,
  LoginRequest,
  RegisterRequest,
  ResetPasswordRequest,
  UpdateProfileRequest,
} from './auth.models';
import { AuthApi } from './auth.api';
import { AuthTokenService } from './auth-token.service';

export type AuthStatus = 'idle' | 'loading' | 'success' | 'error';

@Injectable({ providedIn: 'root' })
export class AuthStore {
  private readonly api = inject(AuthApi);
  private readonly tokens = inject(AuthTokenService);
  private readonly sessionState = signal<AuthSession | null>(this.tokens.readSession());

  status = signal<AuthStatus>('idle');
  error = signal<string | null>(null);

  session = this.sessionState.asReadonly();
  user = computed(() => this.sessionState()?.user ?? null);
  signedIn = computed(() => this.sessionState() !== null);
  displayName = computed(() => this.user()?.fullName ?? 'Guest');
  loading = computed(() => this.status() === 'loading');

  login(request: LoginRequest) {
    return this.handleSession(this.api.login(request));
  }

  register(request: RegisterRequest) {
    return this.handleSession(this.api.register(request));
  }

  requestPasswordReset(request: ForgotPasswordRequest) {
    this.setLoading();

    return this.api.requestPasswordReset(request).pipe(
      tap(() => this.setSuccess()),
      catchError((error) => this.handleError(error))
    );
  }

  resetPassword(request: ResetPasswordRequest) {
    this.setLoading();

    return this.api.resetPassword(request).pipe(
      tap(() => this.setSuccess()),
      catchError((error) => this.handleError(error))
    );
  }

  signInWithGoogle(request: GoogleCredentialRequest) {
    return this.handleSession(this.api.signInWithGoogle(request));
  }

  updateProfile(request: UpdateProfileRequest) {
    const user = this.user();

    if (!user) {
      return throwError(() => new Error('You must be signed in to update your profile'));
    }

    return this.handleSession(this.api.updateProfile(user, request));
  }

  signOut() {
    this.tokens.clearSession();
    this.sessionState.set(null);
    this.status.set('idle');
    this.error.set(null);
  }

  private handleSession(source: Observable<AuthSession>) {
    this.setLoading();

    return source.pipe(
      tap((session) => {
        this.tokens.saveSession(session);
        this.sessionState.set(session);
        this.setSuccess();
      }),
      catchError((error) => this.handleError(error))
    );
  }

  private setLoading() {
    this.status.set('loading');
    this.error.set(null);
  }

  private setSuccess() {
    this.status.set('success');
    this.error.set(null);
  }

  private handleError(error: unknown) {
    const message = error instanceof Error ? error.message : 'Authentication request failed';
    this.status.set('error');
    this.error.set(message);

    return throwError(() => error);
  }
}

