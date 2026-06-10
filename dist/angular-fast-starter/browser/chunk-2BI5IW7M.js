import {
  Button,
  ButtonModule
} from "./chunk-TARWWEIZ.js";
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Output,
  computed,
  input,
  output,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty
} from "./chunk-GI7FX4Z4.js";

// src/app/shared/ui/button/button.component.ts
var _AppButtonComponent = class _AppButtonComponent {
  constructor() {
    this.label = input.required(...ngDevMode ? [{ debugName: "label" }] : []);
    this.icon = input(...ngDevMode ? [void 0, { debugName: "icon" }] : []);
    this.intent = input("primary", ...ngDevMode ? [{ debugName: "intent" }] : []);
    this.disabled = input(false, ...ngDevMode ? [{ debugName: "disabled" }] : []);
    this.loading = input(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
    this.fullWidth = input(false, ...ngDevMode ? [{ debugName: "fullWidth" }] : []);
    this.size = input(void 0, ...ngDevMode ? [{ debugName: "size" }] : []);
    this.styleClass = input("", ...ngDevMode ? [{ debugName: "styleClass" }] : []);
    this.type = input("button", ...ngDevMode ? [{ debugName: "type" }] : []);
    this.clicked = output();
    this.buttonClass = computed(() => [this.fullWidth() ? "w-full justify-center" : "", this.styleClass()].filter(Boolean).join(" "), ...ngDevMode ? [{ debugName: "buttonClass" }] : []);
    this.severity = computed(() => {
      if (this.intent() === "danger")
        return "danger";
      if (this.intent() === "secondary")
        return "secondary";
      return void 0;
    }, ...ngDevMode ? [{ debugName: "severity" }] : []);
  }
};
_AppButtonComponent.\u0275fac = function AppButtonComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AppButtonComponent)();
};
_AppButtonComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppButtonComponent, selectors: [["app-button"]], hostVars: 4, hostBindings: function AppButtonComponent_HostBindings(rf, ctx) {
  if (rf & 2) {
    \u0275\u0275classProp("block", ctx.fullWidth())("w-full", ctx.fullWidth());
  }
}, inputs: { label: [1, "label"], icon: [1, "icon"], intent: [1, "intent"], disabled: [1, "disabled"], loading: [1, "loading"], fullWidth: [1, "fullWidth"], size: [1, "size"], styleClass: [1, "styleClass"], type: [1, "type"] }, outputs: { clicked: "clicked" }, decls: 1, vars: 10, consts: [[3, "onClick", "label", "icon", "severity", "outlined", "text", "disabled", "loading", "size", "styleClass", "type"]], template: function AppButtonComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-button", 0);
    \u0275\u0275listener("onClick", function AppButtonComponent_Template_p_button_onClick_0_listener() {
      return ctx.clicked.emit();
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("label", ctx.label())("icon", ctx.icon())("severity", ctx.severity())("outlined", ctx.intent() === "secondary")("text", ctx.intent() === "ghost")("disabled", ctx.disabled())("loading", ctx.loading())("size", ctx.size())("styleClass", ctx.buttonClass())("type", ctx.type());
  }
}, dependencies: [ButtonModule, Button], encapsulation: 2, changeDetection: 0 });
var AppButtonComponent = _AppButtonComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppButtonComponent, [{
    type: Component,
    args: [{
      selector: "app-button",
      standalone: true,
      imports: [ButtonModule],
      host: {
        "[class.block]": "fullWidth()",
        "[class.w-full]": "fullWidth()"
      },
      template: `
    <p-button
      [label]="label()"
      [icon]="icon()"
      [severity]="severity()"
      [outlined]="intent() === 'secondary'"
      [text]="intent() === 'ghost'"
      [disabled]="disabled()"
      [loading]="loading()"
      [size]="size()"
      [styleClass]="buttonClass()"
      [type]="type()"
      (onClick)="clicked.emit()"
    />
  `,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, { label: [{ type: Input, args: [{ isSignal: true, alias: "label", required: true }] }], icon: [{ type: Input, args: [{ isSignal: true, alias: "icon", required: false }] }], intent: [{ type: Input, args: [{ isSignal: true, alias: "intent", required: false }] }], disabled: [{ type: Input, args: [{ isSignal: true, alias: "disabled", required: false }] }], loading: [{ type: Input, args: [{ isSignal: true, alias: "loading", required: false }] }], fullWidth: [{ type: Input, args: [{ isSignal: true, alias: "fullWidth", required: false }] }], size: [{ type: Input, args: [{ isSignal: true, alias: "size", required: false }] }], styleClass: [{ type: Input, args: [{ isSignal: true, alias: "styleClass", required: false }] }], type: [{ type: Input, args: [{ isSignal: true, alias: "type", required: false }] }], clicked: [{ type: Output, args: ["clicked"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppButtonComponent, { className: "AppButtonComponent", filePath: "src/app/shared/ui/button/button.component.ts", lineNumber: 31 });
})();

export {
  AppButtonComponent
};
//# sourceMappingURL=chunk-2BI5IW7M.js.map
