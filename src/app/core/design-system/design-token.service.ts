import { DOCUMENT } from '@angular/common';
import { effect, inject, Injectable, signal } from '@angular/core';

export type AppTheme = 'hsl' | 'blue' | 'emerald' | 'violet';
export type AppRadius = 'sharp' | 'soft' | 'round';
export type AppGradient = 'none' | 'brand' | 'sunrise' | 'aurora';
export type AppDensity = 'compact' | 'comfortable' | 'spacious';
export type AppColorScheme = 'light' | 'dark';

const storageKey = 'angular-fast-design-tokens';

interface StoredDesignTokens {
  theme?: AppTheme;
  radius?: AppRadius;
  gradient?: AppGradient;
  density?: AppDensity;
  colorScheme?: AppColorScheme;
}

@Injectable({ providedIn: 'root' })
export class DesignTokenService {
  private readonly document = inject(DOCUMENT);
  private readonly storage = this.document.defaultView?.localStorage;
  private readonly stored = this.readStoredTokens();

  theme = signal<AppTheme>(this.stored.theme ?? 'hsl');
  radius = signal<AppRadius>(this.stored.radius ?? 'soft');
  gradient = signal<AppGradient>(this.stored.gradient ?? 'brand');
  density = signal<AppDensity>(this.stored.density ?? 'comfortable');
  colorScheme = signal<AppColorScheme>(this.stored.colorScheme ?? 'light');

  constructor() {
    effect(() => {
      const tokens: Required<StoredDesignTokens> = {
        theme: this.theme(),
        radius: this.radius(),
        gradient: this.gradient(),
        density: this.density(),
        colorScheme: this.colorScheme(),
      };

      const root = this.document.documentElement;
      root.dataset['theme'] = tokens.theme;
      root.dataset['radius'] = tokens.radius;
      root.dataset['gradient'] = tokens.gradient;
      root.dataset['density'] = tokens.density;
      root.dataset['colorScheme'] = tokens.colorScheme;
      root.classList.toggle('app-dark', tokens.colorScheme === 'dark');

      this.storage?.setItem(storageKey, JSON.stringify(tokens));
    });
  }

  setTheme(theme: AppTheme) {
    this.theme.set(theme);
  }

  setRadius(radius: AppRadius) {
    this.radius.set(radius);
  }

  setGradient(gradient: AppGradient) {
    this.gradient.set(gradient);
  }

  setDensity(density: AppDensity) {
    this.density.set(density);
  }

  setColorScheme(colorScheme: AppColorScheme) {
    this.colorScheme.set(colorScheme);
  }

  toggleColorScheme() {
    this.colorScheme.update((scheme) => (scheme === 'dark' ? 'light' : 'dark'));
  }

  reset() {
    this.theme.set('hsl');
    this.radius.set('soft');
    this.gradient.set('brand');
    this.density.set('comfortable');
    this.colorScheme.set('light');
  }

  private readStoredTokens(): StoredDesignTokens {
    const value = this.storage?.getItem(storageKey);

    if (!value) {
      return {};
    }

    try {
      return JSON.parse(value) as StoredDesignTokens;
    } catch {
      return {};
    }
  }
}
