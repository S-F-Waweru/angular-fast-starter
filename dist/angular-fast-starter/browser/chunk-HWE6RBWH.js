import {
  AUTH_CONFIG
} from "./chunk-A6FJEO5U.js";
import {
  AppButtonComponent
} from "./chunk-2BI5IW7M.js";
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Output,
  ViewChild,
  input,
  output,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵloadQuery,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵviewQuery
} from "./chunk-GI7FX4Z4.js";
import {
  __async
} from "./chunk-WDMUDEB6.js";

// src/app/features/auth/components/google-auth-button.component.ts
var _c0 = ["buttonHost"];
function GoogleAuthButtonComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 1, 0);
  }
}
function GoogleAuthButtonComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-button", 2);
  }
  if (rf & 2) {
    \u0275\u0275property("fullWidth", true)("disabled", true);
  }
}
var _GoogleAuthButtonComponent = class _GoogleAuthButtonComponent {
  constructor() {
    this.text = input("signin_with", ...ngDevMode ? [{ debugName: "text" }] : []);
    this.credentialReceived = output();
    this.failed = output();
    this.enabled = Boolean(AUTH_CONFIG.googleClientId);
  }
  ngAfterViewInit() {
    return __async(this, null, function* () {
      if (!this.enabled || !this.buttonHost) {
        return;
      }
      try {
        yield this.loadGoogleScript();
        window.google?.accounts.id.initialize({
          client_id: AUTH_CONFIG.googleClientId,
          callback: (response) => this.credentialReceived.emit(response.credential),
          ux_mode: "popup"
        });
        window.google?.accounts.id.renderButton(this.buttonHost.nativeElement, {
          type: "standard",
          theme: "outline",
          size: "large",
          shape: "rectangular",
          text: this.text(),
          width: this.buttonHost.nativeElement.offsetWidth || 320
        });
      } catch {
        this.failed.emit("Unable to load Google Identity Services");
      }
    });
  }
  loadGoogleScript() {
    const scriptId = "google-identity-services";
    const existing = document.getElementById(scriptId);
    if (existing) {
      return Promise.resolve();
    }
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://accounts.google.com/gsi/client";
      script.async = true;
      script.defer = true;
      script.onload = () => resolve();
      script.onerror = () => reject();
      document.head.appendChild(script);
    });
  }
};
_GoogleAuthButtonComponent.\u0275fac = function GoogleAuthButtonComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _GoogleAuthButtonComponent)();
};
_GoogleAuthButtonComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GoogleAuthButtonComponent, selectors: [["app-google-auth-button"]], viewQuery: function GoogleAuthButtonComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c0, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.buttonHost = _t.first);
  }
}, inputs: { text: [1, "text"] }, outputs: { credentialReceived: "credentialReceived", failed: "failed" }, decls: 2, vars: 1, consts: [["buttonHost", ""], [1, "grid", "min-h-10", "w-full"], ["label", "Google auth not configured", "icon", "pi pi-google", "intent", "secondary", 3, "fullWidth", "disabled"]], template: function GoogleAuthButtonComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, GoogleAuthButtonComponent_Conditional_0_Template, 2, 0, "div", 1)(1, GoogleAuthButtonComponent_Conditional_1_Template, 1, 2, "app-button", 2);
  }
  if (rf & 2) {
    \u0275\u0275conditional(ctx.enabled ? 0 : 1);
  }
}, dependencies: [AppButtonComponent], encapsulation: 2, changeDetection: 0 });
var GoogleAuthButtonComponent = _GoogleAuthButtonComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GoogleAuthButtonComponent, [{
    type: Component,
    args: [{
      selector: "app-google-auth-button",
      standalone: true,
      imports: [AppButtonComponent],
      template: `
    @if (enabled) {
      <div #buttonHost class="grid min-h-10 w-full"></div>
    } @else {
      <app-button label="Google auth not configured" icon="pi pi-google" intent="secondary" [fullWidth]="true" [disabled]="true" />
    }
  `,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, { text: [{ type: Input, args: [{ isSignal: true, alias: "text", required: false }] }], credentialReceived: [{ type: Output, args: ["credentialReceived"] }], failed: [{ type: Output, args: ["failed"] }], buttonHost: [{
    type: ViewChild,
    args: ["buttonHost"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GoogleAuthButtonComponent, { className: "GoogleAuthButtonComponent", filePath: "src/app/features/auth/components/google-auth-button.component.ts", lineNumber: 50 });
})();

export {
  GoogleAuthButtonComponent
};
//# sourceMappingURL=chunk-HWE6RBWH.js.map
