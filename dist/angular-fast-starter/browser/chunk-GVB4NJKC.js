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

// src/app/features/auth/pages/login.page.ts
function LoginPage_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.auth.error());
  }
}
var _LoginPage = class _LoginPage {
  constructor() {
    this.auth = inject(AuthStore);
    this.toast = inject(AppToastService);
    this.router = inject(Router);
    this.form = new FormGroup({
      email: new FormControl("", {
        nonNullable: true,
        validators: [Validators.required, Validators.email]
      }),
      password: new FormControl("", {
        nonNullable: true,
        validators: [Validators.required]
      })
    });
  }
  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.auth.login(this.form.getRawValue()).subscribe({
      next: () => void this.router.navigate(["/app/dashboard"])
    });
  }
  useDemo() {
    this.form.setValue({
      email: "admin@example.com",
      password: "password"
    });
    this.submit();
  }
  signInWithGoogle(credential) {
    this.auth.signInWithGoogle({ credential }).subscribe({
      next: () => void this.router.navigate(["/app/dashboard"])
    });
  }
};
_LoginPage.\u0275fac = function LoginPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LoginPage)();
};
_LoginPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginPage, selectors: [["app-login-page"]], decls: 23, vars: 7, consts: [[1, "text-center"], [1, "text-2xl", "font-semibold", "text-color"], [1, "mt-2", "text-sm", "text-muted-color"], [1, "mt-6", "grid", "gap-4", 3, "formGroup"], ["label", "Email", 3, "control"], ["pInputText", "", "type", "email", "formControlName", "email", "autocomplete", "email", 1, "w-full"], ["label", "Password", 3, "control"], ["pInputText", "", "type", "password", "formControlName", "password", "autocomplete", "current-password", 1, "w-full"], [1, "rounded-md", "bg-red-50", "px-3", "py-2", "text-sm", "text-red-700"], ["label", "Login", "icon", "pi pi-lock-open", 3, "clicked", "fullWidth", "loading"], ["label", "Use demo credentials", "icon", "pi pi-user", "intent", "secondary", 3, "clicked", "fullWidth"], [1, "my-5", "grid", "grid-cols-[1fr_auto_1fr]", "items-center", "gap-3", "text-xs", "uppercase", "text-muted-color"], [1, "h-px", "bg-surface-200"], ["text", "signin_with", 3, "credentialReceived", "failed"], [1, "mt-6", "flex", "flex-wrap", "justify-center", "gap-3", "text-sm"], ["routerLink", "/auth/register", 1, "font-medium", "text-primary"], ["routerLink", "/auth/forgot-password", 1, "font-medium", "text-primary"]], template: function LoginPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "h1", 1);
    \u0275\u0275text(2, "Welcome back");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 2);
    \u0275\u0275text(4, "Sign in with JWT credentials or Google.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "form", 3)(6, "app-form-field", 4);
    \u0275\u0275element(7, "input", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "app-form-field", 6);
    \u0275\u0275element(9, "input", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(10, LoginPage_Conditional_10_Template, 2, 1, "p", 8);
    \u0275\u0275elementStart(11, "app-button", 9);
    \u0275\u0275listener("clicked", function LoginPage_Template_app_button_clicked_11_listener() {
      return ctx.submit();
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "app-button", 10);
    \u0275\u0275listener("clicked", function LoginPage_Template_app_button_clicked_12_listener() {
      return ctx.useDemo();
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 11);
    \u0275\u0275element(14, "span", 12);
    \u0275\u0275text(15, " or ");
    \u0275\u0275element(16, "span", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "app-google-auth-button", 13);
    \u0275\u0275listener("credentialReceived", function LoginPage_Template_app_google_auth_button_credentialReceived_17_listener($event) {
      return ctx.signInWithGoogle($event);
    })("failed", function LoginPage_Template_app_google_auth_button_failed_17_listener($event) {
      return ctx.toast.error($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 14)(19, "a", 15);
    \u0275\u0275text(20, "Create account");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "a", 16);
    \u0275\u0275text(22, "Forgot password?");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance();
    \u0275\u0275property("control", ctx.form.controls.email);
    \u0275\u0275advance(2);
    \u0275\u0275property("control", ctx.form.controls.password);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.auth.error() ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("fullWidth", true)("loading", ctx.auth.loading());
    \u0275\u0275advance();
    \u0275\u0275property("fullWidth", true);
  }
}, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink, InputTextModule, InputText, AppButtonComponent, AppFormFieldComponent, GoogleAuthButtonComponent], encapsulation: 2, changeDetection: 0 });
var LoginPage = _LoginPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginPage, [{
    type: Component,
    args: [{
      selector: "app-login-page",
      standalone: true,
      imports: [ReactiveFormsModule, RouterLink, InputTextModule, AppButtonComponent, AppFormFieldComponent, GoogleAuthButtonComponent],
      template: `
    <div class="text-center">
      <h1 class="text-2xl font-semibold text-color">Welcome back</h1>
      <p class="mt-2 text-sm text-muted-color">Sign in with JWT credentials or Google.</p>
    </div>

    <form [formGroup]="form" class="mt-6 grid gap-4">
      <app-form-field label="Email" [control]="form.controls.email">
        <input pInputText type="email" formControlName="email" class="w-full" autocomplete="email" />
      </app-form-field>

      <app-form-field label="Password" [control]="form.controls.password">
        <input pInputText type="password" formControlName="password" class="w-full" autocomplete="current-password" />
      </app-form-field>

      @if (auth.error()) {
        <p class="rounded-md bg-red-50 px-3 py-2 text-sm text-red-700">{{ auth.error() }}</p>
      }

      <app-button label="Login" icon="pi pi-lock-open" [fullWidth]="true" [loading]="auth.loading()" (clicked)="submit()" />
      <app-button label="Use demo credentials" icon="pi pi-user" intent="secondary" [fullWidth]="true" (clicked)="useDemo()" />
    </form>

    <div class="my-5 grid grid-cols-[1fr_auto_1fr] items-center gap-3 text-xs uppercase text-muted-color">
      <span class="h-px bg-surface-200"></span>
      or
      <span class="h-px bg-surface-200"></span>
    </div>

    <app-google-auth-button text="signin_with" (credentialReceived)="signInWithGoogle($event)" (failed)="toast.error($event)" />

    <div class="mt-6 flex flex-wrap justify-center gap-3 text-sm">
      <a routerLink="/auth/register" class="font-medium text-primary">Create account</a>
      <a routerLink="/auth/forgot-password" class="font-medium text-primary">Forgot password?</a>
    </div>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginPage, { className: "LoginPage", filePath: "src/app/features/auth/pages/login.page.ts", lineNumber: 53 });
})();
export {
  LoginPage
};
//# sourceMappingURL=chunk-GVB4NJKC.js.map
