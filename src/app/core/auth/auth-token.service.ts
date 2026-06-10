import { DOCUMENT } from '@angular/common';
import { inject, Injectable } from '@angular/core';
import { AuthSession } from './auth.models';
import { AUTH_CONFIG } from './auth.config';
import { isJwtExpired } from './jwt.utils';

@Injectable({ providedIn: 'root' })
export class AuthTokenService {
  private readonly document = inject(DOCUMENT);
  private readonly storage = this.document.defaultView?.localStorage;

  readSession(): AuthSession | null {
    const raw = this.storage?.getItem(AUTH_CONFIG.tokenStorageKey);

    if (!raw) {
      return null;
    }

    try {
      const session = JSON.parse(raw) as AuthSession;

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

  saveSession(session: AuthSession) {
    this.storage?.setItem(AUTH_CONFIG.tokenStorageKey, JSON.stringify(session));
  }

  clearSession() {
    this.storage?.removeItem(AUTH_CONFIG.tokenStorageKey);
  }

  getAccessToken() {
    return this.readSession()?.accessToken ?? null;
  }
}

