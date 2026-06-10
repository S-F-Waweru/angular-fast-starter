import {
  GoogleAuthButtonComponent
} from "./chunk-HWE6RBWH.js";
import {
  AppToastService
} from "./chunk-Q5HYC4IF.js";
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
  Router,
  RouterLink
} from "./chunk-XVYRP3BM.js";
import "./chunk-TI7NITK6.js";
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-GI7FX4Z4.js";
import "./chunk-WDMUDEB6.js";

// src/app/features/auth/pages/register.page.ts
function RegisterPage_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.auth.error());
  }
}
var _RegisterPage = class _RegisterPage {
  constructor() {
    this.auth = inject(AuthStore);
    this.toast = inject(AppToastService);
    this.router = inject(Router);
    this.form = new FormGroup({
      fullName: new FormControl("", {
        nonNullable: true,
        validators: [Validators.required, Validators.minLength(2)]
      }),
      email: new FormControl("", {
        nonNullable: true,
        validators: [Validators.required, Validators.email]
      }),
      password: new FormControl("", {
        nonNullable: true,
        validators: [Validators.required, Validators.minLength(6)]
      })
    });
  }
  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.auth.register(this.form.getRawValue()).subscribe({
      next: () => void this.router.navigate(["/app/dashboard"])
    });
  }
  signInWithGoogle(credential) {
    this.auth.signInWithGoogle({ credential }).subscribe({
      next: () => void this.router.navigate(["/app/dashboard"])
    });
  }
};
_RegisterPage.\u0275fac = function RegisterPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _RegisterPage)();
};
_RegisterPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RegisterPage, selectors: [["app-register-page"]], decls: 23, vars: 7, consts: [[1, "text-center"], [1, "text-2xl", "font-semibold", "text-color"], [1, "mt-2", "text-sm", "text-muted-color"], [1, "mt-6", "grid", "gap-4", 3, "formGroup"], ["label", "Full name", 3, "control"], ["pInputText", "", "formControlName", "fullName", "autocomplete", "name", 1, "w-full"], ["label", "Email", 3, "control"], ["pInputText", "", "type", "email", "formControlName", "email", "autocomplete", "email", 1, "w-full"], ["label", "Password", 3, "control"], ["pInputText", "", "type", "password", "formControlName", "password", "autocomplete", "new-password", 1, "w-full"], [1, "rounded-md", "bg-red-50", "px-3", "py-2", "text-sm", "text-red-700"], ["label", "Register", "icon", "pi pi-user-plus", 3, "clicked", "fullWidth", "loading"], [1, "my-5", "grid", "grid-cols-[1fr_auto_1fr]", "items-center", "gap-3", "text-xs", "uppercase", "text-muted-color"], [1, "h-px", "bg-surface-200"], ["text", "signup_with", 3, "credentialReceived", "failed"], [1, "mt-6", "text-center", "text-sm", "text-muted-color"], ["routerLink", "/auth/login", 1, "font-medium", "text-primary"]], template: function RegisterPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "h1", 1);
    \u0275\u0275text(2, "Create account");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 2);
    \u0275\u0275text(4, "Register with email or continue with Google.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "form", 3)(6, "app-form-field", 4);
    \u0275\u0275element(7, "input", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "app-form-field", 6);
    \u0275\u0275element(9, "input", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "app-form-field", 8);
    \u0275\u0275element(11, "input", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(12, RegisterPage_Conditional_12_Template, 2, 1, "p", 10);
    \u0275\u0275elementStart(13, "app-button", 11);
    \u0275\u0275listener("clicked", function RegisterPage_Template_app_button_clicked_13_listener() {
      return ctx.submit();
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 12);
    \u0275\u0275element(15, "span", 13);
    \u0275\u0275text(16, " or ");
    \u0275\u0275element(17, "span", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "app-google-auth-button", 14);
    \u0275\u0275listener("credentialReceived", function RegisterPage_Template_app_google_auth_button_credentialReceived_18_listener($event) {
      return ctx.signInWithGoogle($event);
    })("failed", function RegisterPage_Template_app_google_auth_button_failed_18_listener($event) {
      return ctx.toast.error($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "p", 15);
    \u0275\u0275text(20, " Already have an account? ");
    \u0275\u0275elementStart(21, "a", 16);
    \u0275\u0275text(22, "Login");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance();
    \u0275\u0275property("control", ctx.form.controls.fullName);
    \u0275\u0275advance(2);
    \u0275\u0275property("control", ctx.form.controls.email);
    \u0275\u0275advance(2);
    \u0275\u0275property("control", ctx.form.controls.password);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.auth.error() ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("fullWidth", true)("loading", ctx.auth.loading());
  }
}, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink, InputTextModule, InputText, AppButtonComponent, AppFormFieldComponent, GoogleAuthButtonComponent], encapsulation: 2, changeDetection: 0 });
var RegisterPage = _RegisterPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RegisterPage, [{
    type: Component,
    args: [{
      selector: "app-register-page",
      standalone: true,
      imports: [ReactiveFormsModule, RouterLink, InputTextModule, AppButtonComponent, AppFormFieldComponent, GoogleAuthButtonComponent],
      template: `
    <div class="text-center">
      <h1 class="text-2xl font-semibold text-color">Create account</h1>
      <p class="mt-2 text-sm text-muted-color">Register with email or continue with Google.</p>
    </div>

    <form [formGroup]="form" class="mt-6 grid gap-4">
      <app-form-field label="Full name" [control]="form.controls.fullName">
        <input pInputText formControlName="fullName" class="w-full" autocomplete="name" />
      </app-form-field>

      <app-form-field label="Email" [control]="form.controls.email">
        <input pInputText type="email" formControlName="email" class="w-full" autocomplete="email" />
      </app-form-field>

      <app-form-field label="Password" [control]="form.controls.password">
        <input pInputText type="password" formControlName="password" class="w-full" autocomplete="new-password" />
      </app-form-field>

      @if (auth.error()) {
        <p class="rounded-md bg-red-50 px-3 py-2 text-sm text-red-700">{{ auth.error() }}</p>
      }

      <app-button label="Register" icon="pi pi-user-plus" [fullWidth]="true" [loading]="auth.loading()" (clicked)="submit()" />
    </form>

    <div class="my-5 grid grid-cols-[1fr_auto_1fr] items-center gap-3 text-xs uppercase text-muted-color">
      <span class="h-px bg-surface-200"></span>
      or
      <span class="h-px bg-surface-200"></span>
    </div>

    <app-google-auth-button text="signup_with" (credentialReceived)="signInWithGoogle($event)" (failed)="toast.error($event)" />

    <p class="mt-6 text-center text-sm text-muted-color">
      Already have an account?
      <a routerLink="/auth/login" class="font-medium text-primary">Login</a>
    </p>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegisterPage, { className: "RegisterPage", filePath: "src/app/features/auth/pages/register.page.ts", lineNumber: 56 });
})();
export {
  RegisterPage
};
//# sourceMappingURL=chunk-LA6GV2WP.js.map
