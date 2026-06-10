# Auth

The starter includes an auth feature that is ready to connect to a real JWT backend.

## Files

```txt
src/app/core/auth/auth.config.ts
src/app/core/auth/auth.models.ts
src/app/core/auth/auth.api.ts
src/app/core/auth/auth.store.ts
src/app/core/auth/auth-token.service.ts
src/app/core/auth/jwt.utils.ts
src/app/features/auth
src/app/features/profile
```

## Routes

```txt
/auth/login
/auth/register
/auth/forgot-password
/auth/reset-password
/app/profile
```

## Demo Credentials

```txt
email: admin@example.com
password: password
```

## Backend Integration

Replace the mock methods in `AuthApi` with real HTTP calls:

```ts
login(request: LoginRequest) {
  return this.http.post<AuthSession>('/api/auth/login', request);
}
```

The `AuthTokenService` stores the session and the HTTP interceptor attaches:

```txt
Authorization: Bearer <accessToken>
```

## Google Auth

Set the Google client ID in:

```txt
src/app/core/auth/auth.config.ts
```

```ts
googleClientId: 'YOUR_GOOGLE_CLIENT_ID'
```

`GoogleAuthButtonComponent` loads Google Identity Services and renders the Google button. The credential callback returns a JWT credential to:

```ts
AuthStore.signInWithGoogle({ credential })
```

In production, send the Google credential to your backend, verify it there, and return your app's `AuthSession`.

