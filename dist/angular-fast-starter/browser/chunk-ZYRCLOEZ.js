import {
  ChangeDetectionStrategy,
  Component,
  Input,
  computed,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-GI7FX4Z4.js";

// src/app/shared/forms/form-errors.ts
var DEFAULT_VALIDATION_MESSAGES = {
  required: (_error, label) => `${label} is required`,
  email: () => "Enter a valid email address",
  minlength: (error, label) => {
    const minlength = error;
    return `${label} must be at least ${minlength.requiredLength ?? 2} characters`;
  },
  maxlength: (error, label) => {
    const maxlength = error;
    return `${label} must be ${maxlength.requiredLength ?? "fewer"} characters or fewer`;
  },
  min: (error, label) => {
    const min = error;
    return `${label} must be at least ${min.min ?? 0}`;
  },
  max: (error, label) => {
    const max = error;
    return `${label} must be ${max.max ?? 0} or less`;
  },
  pattern: (_error, label) => `${label} has an invalid format`,
  server: (error) => String(error || "This value is invalid")
};
function getControlErrorMessage(control, label, messages = {}) {
  if (!control || !control.touched || !control.errors) {
    return "";
  }
  return getValidationErrorMessage(control.errors, label, messages);
}
function getValidationErrorMessage(errors, label, messages = {}) {
  const [firstKey] = Object.keys(errors);
  if (!firstKey) {
    return "";
  }
  const message = messages[firstKey] ?? DEFAULT_VALIDATION_MESSAGES[firstKey];
  if (typeof message === "function") {
    return message(errors[firstKey], label);
  }
  if (typeof message === "string") {
    return message;
  }
  return `${label} is invalid`;
}

// src/app/shared/ui/form-field/form-field.component.ts
var _c0 = ["*"];
function AppFormFieldComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 3);
    \u0275\u0275text(1, "*");
    \u0275\u0275domElementEnd();
  }
}
function AppFormFieldComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 4);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorMessage());
  }
}
function AppFormFieldComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 5);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.hint());
  }
}
var _AppFormFieldComponent = class _AppFormFieldComponent {
  constructor() {
    this.label = input.required(...ngDevMode ? [{ debugName: "label" }] : []);
    this.hint = input("", ...ngDevMode ? [{ debugName: "hint" }] : []);
    this.required = input(false, ...ngDevMode ? [{ debugName: "required" }] : []);
    this.control = input(null, ...ngDevMode ? [{ debugName: "control" }] : []);
    this.messages = input({}, ...ngDevMode ? [{ debugName: "messages" }] : []);
    this.errorMessage = computed(() => getControlErrorMessage(this.control(), this.label(), this.messages()), ...ngDevMode ? [{ debugName: "errorMessage" }] : []);
  }
};
_AppFormFieldComponent.\u0275fac = function AppFormFieldComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AppFormFieldComponent)();
};
_AppFormFieldComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppFormFieldComponent, selectors: [["app-form-field"]], inputs: { label: [1, "label"], hint: [1, "hint"], required: [1, "required"], control: [1, "control"], messages: [1, "messages"] }, ngContentSelectors: _c0, decls: 8, vars: 3, consts: [[1, "grid", "min-w-0", "gap-1.5"], [1, "flex", "min-w-0", "items-center", "gap-1", "text-sm", "font-medium", "text-color"], [1, "truncate"], ["aria-hidden", "true", 1, "text-red-600"], ["role", "alert", 1, "break-words", "text-xs", "leading-5", "text-red-600"], [1, "break-words", "text-xs", "leading-5", "text-muted-color"]], template: function AppFormFieldComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projectionDef();
    \u0275\u0275domElementStart(0, "label", 0)(1, "span", 1)(2, "span", 2);
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(4, AppFormFieldComponent_Conditional_4_Template, 2, 0, "span", 3);
    \u0275\u0275domElementEnd();
    \u0275\u0275projection(5);
    \u0275\u0275conditionalCreate(6, AppFormFieldComponent_Conditional_6_Template, 2, 1, "span", 4)(7, AppFormFieldComponent_Conditional_7_Template, 2, 1, "span", 5);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx.label());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.required() ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.errorMessage() ? 6 : ctx.hint() ? 7 : -1);
  }
}, encapsulation: 2, changeDetection: 0 });
var AppFormFieldComponent = _AppFormFieldComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppFormFieldComponent, [{
    type: Component,
    args: [{
      selector: "app-form-field",
      standalone: true,
      template: `
    <label class="grid min-w-0 gap-1.5">
      <span class="flex min-w-0 items-center gap-1 text-sm font-medium text-color">
        <span class="truncate">{{ label() }}</span>
        @if (required()) {
          <span class="text-red-600" aria-hidden="true">*</span>
        }
      </span>
      <ng-content />
      @if (errorMessage()) {
        <span class="break-words text-xs leading-5 text-red-600" role="alert">{{ errorMessage() }}</span>
      } @else if (hint()) {
        <span class="break-words text-xs leading-5 text-muted-color">{{ hint() }}</span>
      }
    </label>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, { label: [{ type: Input, args: [{ isSignal: true, alias: "label", required: true }] }], hint: [{ type: Input, args: [{ isSignal: true, alias: "hint", required: false }] }], required: [{ type: Input, args: [{ isSignal: true, alias: "required", required: false }] }], control: [{ type: Input, args: [{ isSignal: true, alias: "control", required: false }] }], messages: [{ type: Input, args: [{ isSignal: true, alias: "messages", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppFormFieldComponent, { className: "AppFormFieldComponent", filePath: "src/app/shared/ui/form-field/form-field.component.ts", lineNumber: 26 });
})();

export {
  AppFormFieldComponent
};
//# sourceMappingURL=chunk-ZYRCLOEZ.js.map
