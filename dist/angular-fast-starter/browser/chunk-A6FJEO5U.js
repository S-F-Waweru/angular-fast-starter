import {
  DOCUMENT,
  Injectable,
  catchError,
  computed,
  delay,
  inject,
  of,
  setClassMetadata,
  signal,
  tap,
  throwError,
  ɵɵdefineInjectable
} from "./chunk-GI7FX4Z4.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-WDMUDEB6.js";

// src/app/core/auth/jwt.utils.ts
function decodeJwtPayload(token) {
  const payload = token.split(".")[1];
  if (!payload) {
    return null;
  }
  try {
    const normalized = payload.replace(/-/g, "+").replace(/_/g, "/");
    const padded = normalized.padEnd(normalized.length + (4 - normalized.length % 4) % 4, "=");
    const json = decodeURIComponent(atob(padded).split("").map((char) => `%${`00${char.charCodeAt(0).toString(16)}`.slice(-2)}`).join(""));
    return JSON.parse(json);
  } catch {
    return null;
  }
}
function isJwtExpired(token) {
  const payload = decodeJwtPayload(token);
  if (!payload?.exp) {
    return false;
  }
  return payload.exp * 1e3 <= Date.now();
}
function createMockJwt(user, expiresInSeconds = 60 * 60) {
  const now = Math.floor(Date.now() / 1e3);
  const header = {
    alg: "HS256",
    typ: "JWT"
  };
  const payload = {
    sub: user.id,
    name: user.fullName,
    email: user.email,
    picture: user.avatarUrl,
    provider: user.provider,
    iat: now,
    exp: now + expiresInSeconds
  };
  return `${base64UrlEncode(header)}.${base64UrlEncode(payload)}.mock-signature`;
}
function base64UrlEncode(value) {
  const json = JSON.stringify(value);
  const bytes = new TextEncoder().encode(json);
  let binary = "";
  bytes.forEach((byte) => {
    binary += String.fromCharCode(byte);
  });
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

// src/app/core/auth/auth.api.ts
var users = [
  {
    id: "usr_001",
    fullName: "Demo Admin",
    email: "admin@example.com",
    password: "password",
    provider: "password",
    avatarUrl: ""
  }
];
var _AuthApi = class _AuthApi {
  login(request) {
    const user = users.find((item) => item.email.toLowerCase() === request.email.toLowerCase());
    if (!user || user.password !== request.password) {
      return throwError(() => new Error("Invalid email or password"));
    }
    return of(this.createSession(user)).pipe(delay(250));
  }
  register(request) {
    const existing = users.some((item) => item.email.toLowerCase() === request.email.toLowerCase());
    if (existing) {
      return throwError(() => new Error("This email is already registered"));
    }
    const user = {
      id: `usr_${Date.now()}`,
      fullName: request.fullName,
      email: request.email,
      password: request.password,
      provider: "password"
    };
    users = [user, ...users];
    return of(this.createSession(user)).pipe(delay(250));
  }
  requestPasswordReset(request) {
    const resetToken = request.email ? `reset-${Date.now()}` : "";
    return of({ resetToken }).pipe(delay(250));
  }
  resetPassword(request) {
    if (!request.token || request.password.length < 6) {
      return throwError(() => new Error("Reset token or password is invalid"));
    }
    return of(void 0).pipe(delay(250));
  }
  updateProfile(currentUser, request) {
    users = users.map((user) => user.id === currentUser.id ? __spreadProps(__spreadValues({}, user), {
      fullName: request.fullName,
      email: request.email,
      avatarUrl: request.avatarUrl
    }) : user);
    const updatedUser = __spreadProps(__spreadValues({}, currentUser), {
      fullName: request.fullName,
      email: request.email,
      avatarUrl: request.avatarUrl
    });
    return of(this.createSession(updatedUser)).pipe(delay(250));
  }
  signInWithGoogle(request) {
    const payload = decodeJwtPayload(request.credential);
    if (!payload?.email) {
      return throwError(() => new Error("Google credential did not include an email"));
    }
    const existing = users.find((item) => item.email.toLowerCase() === payload.email?.toLowerCase());
    const user = existing ?? {
      id: payload.sub || `google_${Date.now()}`,
      fullName: payload.name ?? payload.email,
      email: payload.email,
      avatarUrl: payload.picture,
      password: "",
      provider: "google"
    };
    if (!existing) {
      users = [user, ...users];
    }
    return of(this.createSession(user)).pipe(delay(250));
  }
  createSession(user) {
    const accessToken = createMockJwt(user);
    const refreshToken = createMockJwt(user, 60 * 60 * 24 * 14);
    const expiresAt = new Date(Date.now() + 60 * 60 * 1e3).toISOString();
    return {
      accessToken,
      refreshToken,
      expiresAt,
      user
    };
  }
};
_AuthApi.\u0275fac = function AuthApi_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AuthApi)();
};
_AuthApi.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthApi, factory: _AuthApi.\u0275fac, providedIn: "root" });
var AuthApi = _AuthApi;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthApi, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/core/auth/auth.config.ts
var AUTH_CONFIG = {
  apiBaseUrl: "/api/auth",
  tokenStorageKey: "angular-fast-auth-session",
  googleClientId: "",
  mockBackend: true
};

// src/app/core/auth/auth-token.service.ts
var _AuthTokenService = class _AuthTokenService {
  constructor() {
    this.document = inject(DOCUMENT);
    this.storage = this.document.defaultView?.localStorage;
  }
  readSession() {
    const raw = this.storage?.getItem(AUTH_CONFIG.tokenStorageKey);
    if (!raw) {
      return null;
    }
    try {
      const session = JSON.parse(raw);
      if (isJwtExpired(session.accessToken)) {
        this.clearSession();
        return null;
      }
      return session;
    } catch {
      this.clearSession();
      return null;
    }
  }
  saveSession(session) {
    this.storage?.setItem(AUTH_CONFIG.tokenStorageKey, JSON.stringify(session));
  }
  clearSession() {
    this.storage?.removeItem(AUTH_CONFIG.tokenStorageKey);
  }
  getAccessToken() {
    return this.readSession()?.accessToken ?? null;
  }
};
_AuthTokenService.\u0275fac = function AuthTokenService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AuthTokenService)();
};
_AuthTokenService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthTokenService, factory: _AuthTokenService.\u0275fac, providedIn: "root" });
var AuthTokenService = _AuthTokenService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthTokenService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/core/auth/auth.store.ts
var _AuthStore = class _AuthStore {
  constructor() {
    this.api = inject(AuthApi);
    this.tokens = inject(AuthTokenService);
    this.sessionState = signal(this.tokens.readSession(), ...ngDevMode ? [{ debugName: "sessionState" }] : []);
    this.status = signal("idle", ...ngDevMode ? [{ debugName: "status" }] : []);
    this.error = signal(null, ...ngDevMode ? [{ debugName: "error" }] : []);
    this.session = this.sessionState.asReadonly();
    this.user = computed(() => this.sessionState()?.user ?? null, ...ngDevMode ? [{ debugName: "user" }] : []);
    this.signedIn = computed(() => this.sessionState() !== null, ...ngDevMode ? [{ debugName: "signedIn" }] : []);
    this.displayName = computed(() => this.user()?.fullName ?? "Guest", ...ngDevMode ? [{ debugName: "displayName" }] : []);
    this.loading = computed(() => this.status() === "loading", ...ngDevMode ? [{ debugName: "loading" }] : []);
  }
  login(request) {
    return this.handleSession(this.api.login(request));
  }
  register(request) {
    return this.handleSession(this.api.register(request));
  }
  requestPasswordReset(request) {
    this.setLoading();
    return this.api.requestPasswordReset(request).pipe(tap(() => this.setSuccess()), catchError((error) => this.handleError(error)));
  }
  resetPassword(request) {
    this.setLoading();
    return this.api.resetPassword(request).pipe(tap(() => this.setSuccess()), catchError((error) => this.handleError(error)));
  }
  signInWithGoogle(request) {
    return this.handleSession(this.api.signInWithGoogle(request));
  }
  updateProfile(request) {
    const user = this.user();
    if (!user) {
      return throwError(() => new Error("You must be signed in to update your profile"));
    }
    return this.handleSession(this.api.updateProfile(user, request));
  }
  signOut() {
    this.tokens.clearSession();
    this.sessionState.set(null);
    this.status.set("idle");
    this.error.set(null);
  }
  handleSession(source) {
    this.setLoading();
    return source.pipe(tap((session) => {
      this.tokens.saveSession(session);
      this.sessionState.set(session);
      this.setSuccess();
    }), catchError((error) => this.handleError(error)));
  }
  setLoading() {
    this.status.set("loading");
    this.error.set(null);
  }
  setSuccess() {
    this.status.set("success");
    this.error.set(null);
  }
  handleError(error) {
    const message = error instanceof Error ? error.message : "Authentication request failed";
    this.status.set("error");
    this.error.set(message);
    return throwError(() => error);
  }
};
_AuthStore.\u0275fac = function AuthStore_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AuthStore)();
};
_AuthStore.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthStore, factory: _AuthStore.\u0275fac, providedIn: "root" });
var AuthStore = _AuthStore;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthStore, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  AUTH_CONFIG,
  AuthTokenService,
  AuthStore
};
//# sourceMappingURL=chunk-A6FJEO5U.js.map
