import {
  DOCUMENT,
  Injectable,
  effect,
  inject,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-GI7FX4Z4.js";

// src/app/core/design-system/design-token.service.ts
var storageKey = "angular-fast-design-tokens";
var _DesignTokenService = class _DesignTokenService {
  constructor() {
    this.document = inject(DOCUMENT);
    this.storage = this.document.defaultView?.localStorage;
    this.stored = this.readStoredTokens();
    this.theme = signal(this.stored.theme ?? "hsl", ...ngDevMode ? [{ debugName: "theme" }] : []);
    this.radius = signal(this.stored.radius ?? "soft", ...ngDevMode ? [{ debugName: "radius" }] : []);
    this.gradient = signal(this.stored.gradient ?? "brand", ...ngDevMode ? [{ debugName: "gradient" }] : []);
    this.density = signal(this.stored.density ?? "comfortable", ...ngDevMode ? [{ debugName: "density" }] : []);
    this.colorScheme = signal(this.stored.colorScheme ?? "light", ...ngDevMode ? [{ debugName: "colorScheme" }] : []);
    effect(() => {
      const tokens = {
        theme: this.theme(),
        radius: this.radius(),
        gradient: this.gradient(),
        density: this.density(),
        colorScheme: this.colorScheme()
      };
      const root = this.document.documentElement;
      root.dataset["theme"] = tokens.theme;
      root.dataset["radius"] = tokens.radius;
      root.dataset["gradient"] = tokens.gradient;
      root.dataset["density"] = tokens.density;
      root.dataset["colorScheme"] = tokens.colorScheme;
      root.classList.toggle("app-dark", tokens.colorScheme === "dark");
      this.storage?.setItem(storageKey, JSON.stringify(tokens));
    });
  }
  setTheme(theme) {
    this.theme.set(theme);
  }
  setRadius(radius) {
    this.radius.set(radius);
  }
  setGradient(gradient) {
    this.gradient.set(gradient);
  }
  setDensity(density) {
    this.density.set(density);
  }
  setColorScheme(colorScheme) {
    this.colorScheme.set(colorScheme);
  }
  toggleColorScheme() {
    this.colorScheme.update((scheme) => scheme === "dark" ? "light" : "dark");
  }
  reset() {
    this.theme.set("hsl");
    this.radius.set("soft");
    this.gradient.set("brand");
    this.density.set("comfortable");
    this.colorScheme.set("light");
  }
  readStoredTokens() {
    const value = this.storage?.getItem(storageKey);
    if (!value) {
      return {};
    }
    try {
      return JSON.parse(value);
    } catch {
      return {};
    }
  }
};
_DesignTokenService.\u0275fac = function DesignTokenService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DesignTokenService)();
};
_DesignTokenService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DesignTokenService, factory: _DesignTokenService.\u0275fac, providedIn: "root" });
var DesignTokenService = _DesignTokenService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DesignTokenService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [], null);
})();

// src/app/core/layout/layout-preference.service.ts
var storageKey2 = "angular-fast-layout-preferences";
var _LayoutPreferenceService = class _LayoutPreferenceService {
  constructor() {
    this.document = inject(DOCUMENT);
    this.storage = this.document.defaultView?.localStorage;
    this.stored = this.readStoredPreferences();
    this.sidebarCollapsed = signal(this.stored.sidebarCollapsed ?? false, ...ngDevMode ? [{ debugName: "sidebarCollapsed" }] : []);
    effect(() => {
      const collapsed = this.sidebarCollapsed();
      this.document.documentElement.dataset["sidebar"] = collapsed ? "collapsed" : "expanded";
      this.storage?.setItem(storageKey2, JSON.stringify({ sidebarCollapsed: collapsed }));
    });
  }
  toggleSidebar() {
    this.sidebarCollapsed.update((collapsed) => !collapsed);
  }
  setSidebarCollapsed(collapsed) {
    this.sidebarCollapsed.set(collapsed);
  }
  readStoredPreferences() {
    const value = this.storage?.getItem(storageKey2);
    if (!value) {
      return {};
    }
    try {
      return JSON.parse(value);
    } catch {
      return {};
    }
  }
};
_LayoutPreferenceService.\u0275fac = function LayoutPreferenceService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LayoutPreferenceService)();
};
_LayoutPreferenceService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LayoutPreferenceService, factory: _LayoutPreferenceService.\u0275fac, providedIn: "root" });
var LayoutPreferenceService = _LayoutPreferenceService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LayoutPreferenceService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [], null);
})();

export {
  DesignTokenService,
  LayoutPreferenceService
};
//# sourceMappingURL=chunk-QYDCMUDJ.js.map
