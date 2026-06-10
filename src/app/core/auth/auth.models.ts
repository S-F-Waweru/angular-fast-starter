export interface UserProfile {
  id: string;
  fullName: string;
  email: string;
  avatarUrl?: string;
  provider: 'password' | 'google';
}

export interface AuthSession {
  accessToken: string;
  refreshToken: string;
  expiresAt: string;
  user: UserProfile;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  fullName: string;
  email: string;
  password: string;
}

export interface ForgotPasswordRequest {
  email: string;
}

export interface ResetPasswordRequest {
  token: string;
  password: string;
}

export interface UpdateProfileRequest {
  fullName: string;
  email: string;
  avatarUrl?: string;
}

export interface GoogleCredentialRequest {
  credential: string;
}

export interface JwtPayload {
  sub: string;
  name?: string;
  email?: string;
  picture?: string;
  exp?: number;
  iat?: number;
  provider?: string;
}

