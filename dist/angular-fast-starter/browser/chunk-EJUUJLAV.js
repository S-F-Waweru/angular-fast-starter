import {
  AppFormFieldComponent
} from "./chunk-ZYRCLOEZ.js";
import {
  DefaultValueAccessor,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  InputText,
  InputTextModule,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-MIX2WWC3.js";
import {
  AuthStore
} from "./chunk-A6FJEO5U.js";
import {
  AppButtonComponent
} from "./chunk-2BI5IW7M.js";
import "./chunk-TARWWEIZ.js";
import "./chunk-YGQPX75J.js";
import {
  RouterLink
} from "./chunk-XVYRP3BM.js";
import "./chunk-TI7NITK6.js";
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-GI7FX4Z4.js";
import "./chunk-WDMUDEB6.js";

// src/app/features/auth/pages/forgot-password.page.ts
function ForgotPasswordPage_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275text(1, " Reset requested. In the mock starter, use any reset token on the reset page. ");
    \u0275\u0275elementEnd();
  }
}
function ForgotPasswordPage_Conditional_6_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.auth.error());
  }
}
function ForgotPasswordPage_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 4)(1, "app-form-field", 8);
    \u0275\u0275element(2, "input", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, ForgotPasswordPage_Conditional_6_Conditional_3_Template, 2, 1, "p", 10);
    \u0275\u0275elementStart(4, "app-button", 11);
    \u0275\u0275listener("clicked", function ForgotPasswordPage_Conditional_6_Template_app_button_clicked_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submit());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance();
    \u0275\u0275property("control", ctx_r1.form.controls.email);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.auth.error() ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("loading", ctx_r1.auth.loading());
  }
}
var _ForgotPasswordPage = class _ForgotPasswordPage {
  constructor() {
    this.auth = inject(AuthStore);
    this.submitted = signal(false, ...ngDevMode ? [{ debugName: "submitted" }] : []);
    this.form = new FormGroup({
      email: new FormControl("", {
        nonNullable: true,
        validators: [Validators.required, Validators.email]
      })
    });
  }
  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.auth.requestPasswordReset(this.form.getRawValue()).subscribe({
      next: () => this.submitted.set(true)
    });
  }
};
_ForgotPasswordPage.\u0275fac = function ForgotPasswordPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ForgotPasswordPage)();
};
_ForgotPasswordPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ForgotPasswordPage, selectors: [["app-forgot-password-page"]], decls: 12, vars: 1, consts: [[1, "text-center"], [1, "text-2xl", "font-semibold", "text-color"], [1, "mt-2", "text-sm", "text-muted-color"], [1, "mt-6", "rounded-md", "bg-green-50", "px-3", "py-3", "text-sm", "text-green-700"], [1, "mt-6", "grid", "gap-4", 3, "formGroup"], [1, "mt-6", "flex", "justify-center", "gap-3", "text-sm"], ["routerLink", "/auth/login", 1, "font-medium", "text-primary"], ["routerLink", "/auth/reset-password", 1, "font-medium", "text-primary"], ["label", "Email", 3, "control"], ["pInputText", "", "type", "email", "formControlName", "email", "autocomplete", "email", 1, "w-full"], [1, "rounded-md", "bg-red-50", "px-3", "py-2", "text-sm", "text-red-700"], ["label", "Request reset", "icon", "pi pi-send", 3, "clicked", "loading"]], template: function ForgotPasswordPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "h1", 1);
    \u0275\u0275text(2, "Forgot password");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 2);
    \u0275\u0275text(4, "Request a reset token from your auth API.");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(5, ForgotPasswordPage_Conditional_5_Template, 2, 0, "div", 3)(6, ForgotPasswordPage_Conditional_6_Template, 5, 4, "form", 4);
    \u0275\u0275elementStart(7, "div", 5)(8, "a", 6);
    \u0275\u0275text(9, "Back to login");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "a", 7);
    \u0275\u0275text(11, "I have a token");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx.submitted() ? 5 : 6);
  }
}, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink, InputTextModule, InputText, AppButtonComponent, AppFormFieldComponent], encapsulation: 2, changeDetection: 0 });
var ForgotPasswordPage = _ForgotPasswordPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ForgotPasswordPage, [{
    type: Component,
    args: [{
      selector: "app-forgot-password-page",
      standalone: true,
      imports: [ReactiveFormsModule, RouterLink, InputTextModule, AppButtonComponent, AppFormFieldComponent],
      template: `
    <div class="text-center">
      <h1 class="text-2xl font-semibold text-color">Forgot password</h1>
      <p class="mt-2 text-sm text-muted-color">Request a reset token from your auth API.</p>
    </div>

    @if (submitted()) {
      <div class="mt-6 rounded-md bg-green-50 px-3 py-3 text-sm text-green-700">
        Reset requested. In the mock starter, use any reset token on the reset page.
      </div>
    } @else {
      <form [formGroup]="form" class="mt-6 grid gap-4">
        <app-form-field label="Email" [control]="form.controls.email">
          <input pInputText type="email" formControlName="email" class="w-full" autocomplete="email" />
        </app-form-field>

        @if (auth.error()) {
          <p class="rounded-md bg-red-50 px-3 py-2 text-sm text-red-700">{{ auth.error() }}</p>
        }

        <app-button label="Request reset" icon="pi pi-send" [loading]="auth.loading()" (clicked)="submit()" />
      </form>
    }

    <div class="mt-6 flex justify-center gap-3 text-sm">
      <a routerLink="/auth/login" class="font-medium text-primary">Back to login</a>
      <a routerLink="/auth/reset-password" class="font-medium text-primary">I have a token</a>
    </div>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ForgotPasswordPage, { className: "ForgotPasswordPage", filePath: "src/app/features/auth/pages/forgot-password.page.ts", lineNumber: 44 });
})();
export {
  ForgotPasswordPage
};
//# sourceMappingURL=chunk-EJUUJLAV.js.map
