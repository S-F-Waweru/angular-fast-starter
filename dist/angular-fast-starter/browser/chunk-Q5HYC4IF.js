import {
  MessageService
} from "./chunk-YGQPX75J.js";
import {
  Injectable,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-GI7FX4Z4.js";

// src/app/core/toast/app-toast.service.ts
var _AppToastService = class _AppToastService {
  constructor() {
    this.messages = inject(MessageService);
  }
  success(summary, detail) {
    this.messages.add({ severity: "success", summary, detail });
  }
  error(summary, detail) {
    this.messages.add({ severity: "error", summary, detail });
  }
  info(summary, detail) {
    this.messages.add({ severity: "info", summary, detail });
  }
};
_AppToastService.\u0275fac = function AppToastService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AppToastService)();
};
_AppToastService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AppToastService, factory: _AppToastService.\u0275fac, providedIn: "root" });
var AppToastService = _AppToastService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppToastService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  AppToastService
};
//# sourceMappingURL=chunk-Q5HYC4IF.js.map
