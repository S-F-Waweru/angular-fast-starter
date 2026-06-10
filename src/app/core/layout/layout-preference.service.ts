import { DOCUMENT } from '@angular/common';
import { effect, inject, Injectable, signal } from '@angular/core';

const storageKey = 'angular-fast-layout-preferences';

interface StoredLayoutPreferences {
  sidebarCollapsed?: boolean;
}

@Injectable({ providedIn: 'root' })
export class LayoutPreferenceService {
  private readonly document = inject(DOCUMENT);
  private readonly storage = this.document.defaultView?.localStorage;
  private readonly stored = this.readStoredPreferences();

  sidebarCollapsed = signal(this.stored.sidebarCollapsed ?? false);

  constructor() {
    effect(() => {
      const collapsed = this.sidebarCollapsed();
      this.document.documentElement.dataset['sidebar'] = collapsed ? 'collapsed' : 'expanded';
      this.storage?.setItem(storageKey, JSON.stringify({ sidebarCollapsed: collapsed }));
    });
  }

  toggleSidebar() {
    this.sidebarCollapsed.update((collapsed) => !collapsed);
  }

  setSidebarCollapsed(collapsed: boolean) {
    this.sidebarCollapsed.set(collapsed);
  }

  private readStoredPreferences(): StoredLayoutPreferences {
    const value = this.storage?.getItem(storageKey);

    if (!value) {
      return {};
    }

    try {
      return JSON.parse(value) as StoredLayoutPreferences;
    } catch {
      return {};
    }
  }
}

