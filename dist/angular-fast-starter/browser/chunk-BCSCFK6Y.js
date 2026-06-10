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
  ActivatedRoute,
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

// src/app/features/auth/pages/reset-password.page.ts
function ResetPasswordPage_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275text(1, " Password reset complete. ");
    \u0275\u0275elementEnd();
  }
}
function ResetPasswordPage_Conditional_6_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 13);
    \u0275\u0275text(1, "Passwords must match.");
    \u0275\u0275elementEnd();
  }
}
function ResetPasswordPage_Conditional_6_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.auth.error());
  }
}
function ResetPasswordPage_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 4)(1, "app-form-field", 7);
    \u0275\u0275element(2, "input", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "app-form-field", 9);
    \u0275\u0275element(4, "input", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "app-form-field", 11);
    \u0275\u0275element(6, "input", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, ResetPasswordPage_Conditional_6_Conditional_7_Template, 2, 0, "p", 13);
    \u0275\u0275conditionalCreate(8, ResetPasswordPage_Conditional_6_Conditional_8_Template, 2, 1, "p", 13);
    \u0275\u0275elementStart(9, "app-button", 14);
    \u0275\u0275listener("clicked", function ResetPasswordPage_Conditional_6_Template_app_button_clicked_9_listener() {
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
    \u0275\u0275property("control", ctx_r1.form.controls.token);
    \u0275\u0275advance(2);
    \u0275\u0275property("control", ctx_r1.form.controls.password);
    \u0275\u0275advance(2);
    \u0275\u0275property("control", ctx_r1.form.controls.confirmPassword);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.passwordMismatch() ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.auth.error() ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("loading", ctx_r1.auth.loading());
  }
}
var _ResetPasswordPage = class _ResetPasswordPage {
  constructor() {
    this.auth = inject(AuthStore);
    this.route = inject(ActivatedRoute);
    this.submitted = signal(false, ...ngDevMode ? [{ debugName: "submitted" }] : []);
    this.passwordMismatch = signal(false, ...ngDevMode ? [{ debugName: "passwordMismatch" }] : []);
    this.form = new FormGroup({
      token: new FormControl(this.route.snapshot.queryParamMap.get("token") ?? "", {
        nonNullable: true,
        validators: [Validators.required]
      }),
      password: new FormControl("", {
        nonNullable: true,
        validators: [Validators.required, Validators.minLength(6)]
      }),
      confirmPassword: new FormControl("", {
        nonNullable: true,
        validators: [Validators.required]
      })
    });
  }
  submit() {
    this.passwordMismatch.set(false);
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const value = this.form.getRawValue();
    if (value.password !== value.confirmPassword) {
      this.passwordMismatch.set(true);
      return;
    }
    this.auth.resetPassword({ token: value.token, password: value.password }).subscribe({
      next: () => this.submitted.set(true)
    });
  }
};
_ResetPasswordPage.\u0275fac = function ResetPasswordPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ResetPasswordPage)();
};
_ResetPasswordPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ResetPasswordPage, selectors: [["app-reset-password-page"]], decls: 10, vars: 1, consts: [[1, "text-center"], [1, "text-2xl", "font-semibold", "text-color"], [1, "mt-2", "text-sm", "text-muted-color"], [1, "mt-6", "rounded-md", "bg-green-50", "px-3", "py-3", "text-sm", "text-green-700"], [1, "mt-6", "grid", "gap-4", 3, "formGroup"], [1, "mt-6", "text-center", "text-sm"], ["routerLink", "/auth/login", 1, "font-medium", "text-primary"], ["label", "Reset token", 3, "control"], ["pInputText", "", "formControlName", "token", "autocomplete", "one-time-code", 1, "w-full"], ["label", "New password", 3, "control"], ["pInputText", "", "type", "password", "formControlName", "password", "autocomplete", "new-password", 1, "w-full"], ["label", "Confirm password", 3, "control"], ["pInputText", "", "type", "password", "formControlName", "confirmPassword", "autocomplete", "new-password", 1, "w-full"], [1, "rounded-md", "bg-red-50", "px-3", "py-2", "text-sm", "text-red-700"], ["label", "Reset password", "icon", "pi pi-key", 3, "clicked", "loading"]], template: function ResetPasswordPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "h1", 1);
    \u0275\u0275text(2, "Reset password");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 2);
    \u0275\u0275text(4, "Set a new password using a reset token.");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(5, ResetPasswordPage_Conditional_5_Template, 2, 0, "div", 3)(6, ResetPasswordPage_Conditional_6_Template, 10, 7, "form", 4);
    \u0275\u0275elementStart(7, "p", 5)(8, "a", 6);
    \u0275\u0275text(9, "Back to login");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx.submitted() ? 5 : 6);
  }
}, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink, InputTextModule, InputText, AppButtonComponent, AppFormFieldComponent], encapsulation: 2, changeDetection: 0 });
var ResetPasswordPage = _ResetPasswordPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResetPasswordPage, [{
    type: Component,
    args: [{
      selector: "app-reset-password-page",
      standalone: true,
      imports: [ReactiveFormsModule, RouterLink, InputTextModule, AppButtonComponent, AppFormFieldComponent],
      template: `
    <div class="text-center">
      <h1 class="text-2xl font-semibold text-color">Reset password</h1>
      <p class="mt-2 text-sm text-muted-color">Set a new password using a reset token.</p>
    </div>

    @if (submitted()) {
      <div class="mt-6 rounded-md bg-green-50 px-3 py-3 text-sm text-green-700">
        Password reset complete.
      </div>
    } @else {
      <form [formGroup]="form" class="mt-6 grid gap-4">
        <app-form-field label="Reset token" [control]="form.controls.token">
          <input pInputText formControlName="token" class="w-full" autocomplete="one-time-code" />
        </app-form-field>

        <app-form-field label="New password" [control]="form.controls.password">
          <input pInputText type="password" formControlName="password" class="w-full" autocomplete="new-password" />
        </app-form-field>

        <app-form-field label="Confirm password" [control]="form.controls.confirmPassword">
          <input pInputText type="password" formControlName="confirmPassword" class="w-full" autocomplete="new-password" />
        </app-form-field>

        @if (passwordMismatch()) {
          <p class="rounded-md bg-red-50 px-3 py-2 text-sm text-red-700">Passwords must match.</p>
        }

        @if (auth.error()) {
          <p class="rounded-md bg-red-50 px-3 py-2 text-sm text-red-700">{{ auth.error() }}</p>
        }

        <app-button label="Reset password" icon="pi pi-key" [loading]="auth.loading()" (clicked)="submit()" />
      </form>
    }

    <p class="mt-6 text-center text-sm">
      <a routerLink="/auth/login" class="font-medium text-primary">Back to login</a>
    </p>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ResetPasswordPage, { className: "ResetPasswordPage", filePath: "src/app/features/auth/pages/reset-password.page.ts", lineNumber: 55 });
})();
export {
  ResetPasswordPage
};
//# sourceMappingURL=chunk-BCSCFK6Y.js.map
