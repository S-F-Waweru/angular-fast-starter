import {
  Injectable,
  computed,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-GI7FX4Z4.js";

// src/app/core/config/project.config.ts
var PROJECT_CONFIG = {
  brand: {
    name: "Angular FAST",
    shortName: "FAST",
    logoText: "F",
    tagline: "Feature architecture, SignalStore, and tokenized UI."
  },
  workspaceName: "Starter workspace",
  navigation: [
    { label: "Dashboard", icon: "pi pi-chart-line", route: "/app/dashboard" },
    { label: "Customers", icon: "pi pi-users", route: "/app/customers" },
    { label: "Shell demos", icon: "pi pi-window-maximize", route: "/app/shell-demos" },
    { label: "Settings", icon: "pi pi-cog", route: "/app/settings" },
    { label: "Profile", icon: "pi pi-user", route: "/app/profile" }
  ],
  table: {
    defaultPageSize: 8,
    pageSizeOptions: [5, 8, 12, 20, 50],
    size: "small"
  }
};

// src/app/core/config/project-config.service.ts
var _ProjectConfigService = class _ProjectConfigService {
  constructor() {
    this.configState = signal(PROJECT_CONFIG, ...ngDevMode ? [{ debugName: "configState" }] : []);
    this.config = this.configState.asReadonly();
    this.brand = computed(() => this.configState().brand, ...ngDevMode ? [{ debugName: "brand" }] : []);
    this.navigation = computed(() => this.configState().navigation, ...ngDevMode ? [{ debugName: "navigation" }] : []);
    this.table = computed(() => this.configState().table, ...ngDevMode ? [{ debugName: "table" }] : []);
    this.workspaceName = computed(() => this.configState().workspaceName, ...ngDevMode ? [{ debugName: "workspaceName" }] : []);
  }
  updateConfig(config) {
    this.configState.set(config);
  }
};
_ProjectConfigService.\u0275fac = function ProjectConfigService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ProjectConfigService)();
};
_ProjectConfigService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ProjectConfigService, factory: _ProjectConfigService.\u0275fac, providedIn: "root" });
var ProjectConfigService = _ProjectConfigService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProjectConfigService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  ProjectConfigService
};
//# sourceMappingURL=chunk-MUAKPLNK.js.map
