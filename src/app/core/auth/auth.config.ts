export interface AuthConfig {
  apiBaseUrl: string;
  tokenStorageKey: string;
  googleClientId: string;
  mockBackend: boolean;
}

export const AUTH_CONFIG: AuthConfig = {
  apiBaseUrl: '/api/auth',
  tokenStorageKey: 'angular-fast-auth-session',
  googleClientId: '',
  mockBackend: true,
};

