import {
  AppPageHeaderComponent
} from "./chunk-VWZ6ILE3.js";
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
  Router
} from "./chunk-XVYRP3BM.js";
import "./chunk-TI7NITK6.js";
import {
  ChangeDetectionStrategy,
  Component,
  computed,
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
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-GI7FX4Z4.js";
import "./chunk-WDMUDEB6.js";

// src/app/features/profile/pages/profile.page.ts
function ProfilePage_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.auth.error());
  }
}
var _ProfilePage = class _ProfilePage {
  constructor() {
    this.auth = inject(AuthStore);
    this.router = inject(Router);
    this.toast = inject(AppToastService);
    this.form = new FormGroup({
      fullName: new FormControl(this.auth.user()?.fullName ?? "", {
        nonNullable: true,
        validators: [Validators.required, Validators.minLength(2)]
      }),
      email: new FormControl(this.auth.user()?.email ?? "", {
        nonNullable: true,
        validators: [Validators.required, Validators.email]
      }),
      avatarUrl: new FormControl(this.auth.user()?.avatarUrl ?? "", {
        nonNullable: true
      })
    });
    this.initials = computed(() => {
      const name = this.auth.user()?.fullName ?? "User";
      return name.split(" ").map((part) => part.charAt(0)).join("").slice(0, 2).toUpperCase();
    }, ...ngDevMode ? [{ debugName: "initials" }] : []);
  }
  save() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.auth.updateProfile(this.form.getRawValue()).subscribe({
      next: () => this.toast.success("Profile updated")
    });
  }
  signOut() {
    this.auth.signOut();
    void this.router.navigate(["/auth/login"]);
  }
};
_ProfilePage.\u0275fac = function ProfilePage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ProfilePage)();
};
_ProfilePage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProfilePage, selectors: [["app-profile-page"]], decls: 41, vars: 12, consts: [["title", "Profile", "description", "View and edit the signed-in user's profile."], ["label", "Sign out", "icon", "pi pi-sign-out", "intent", "secondary", 3, "clicked"], [1, "grid", "gap-6", "xl:grid-cols-[1fr_22rem]"], [1, "fast-panel", "p-5"], [1, "mb-6", "flex", "items-center", "gap-4"], [1, "grid", "size-14", "place-items-center", "bg-primary", "text-lg", "font-semibold", "text-primary-contrast", 2, "border-radius", "var(--fast-radius-pill)"], [1, "min-w-0"], [1, "truncate", "text-lg", "font-semibold", "text-color"], [1, "truncate", "text-sm", "text-muted-color"], [1, "grid", "gap-4", 3, "formGroup"], ["label", "Full name", 3, "control"], ["pInputText", "", "formControlName", "fullName", "autocomplete", "name", 1, "w-full"], ["label", "Email", 3, "control"], ["pInputText", "", "type", "email", "formControlName", "email", "autocomplete", "email", 1, "w-full"], ["label", "Avatar URL", 3, "control"], ["pInputText", "", "formControlName", "avatarUrl", "autocomplete", "photo", 1, "w-full"], [1, "rounded-md", "bg-red-50", "px-3", "py-2", "text-sm", "text-red-700"], [1, "flex", "justify-end"], ["label", "Save profile", "icon", "pi pi-check", 3, "clicked", "loading"], [1, "fast-panel", "min-w-0", "p-5"], [1, "text-lg", "font-semibold", "text-color"], [1, "mt-4", "grid", "gap-3", "text-sm"], [1, "fast-muted-panel", "min-w-0", "p-3"], [1, "text-xs", "uppercase", "text-muted-color"], [1, "mt-1", "min-w-0", "break-words", "font-medium", "capitalize", "text-color"], [1, "mt-1", "min-w-0", "break-words", "font-medium", "text-color"], [1, "mt-1", "min-w-0", "break-all", "font-mono", "text-xs", "leading-5", "text-muted-color"]], template: function ProfilePage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-page-header", 0)(1, "app-button", 1);
    \u0275\u0275listener("clicked", function ProfilePage_Template_app_button_clicked_1_listener() {
      return ctx.signOut();
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(2, "section", 2)(3, "article", 3)(4, "div", 4)(5, "div", 5);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 6)(8, "h2", 7);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 8);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "form", 9)(13, "app-form-field", 10);
    \u0275\u0275element(14, "input", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "app-form-field", 12);
    \u0275\u0275element(16, "input", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "app-form-field", 14);
    \u0275\u0275element(18, "input", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(19, ProfilePage_Conditional_19_Template, 2, 1, "p", 16);
    \u0275\u0275elementStart(20, "div", 17)(21, "app-button", 18);
    \u0275\u0275listener("clicked", function ProfilePage_Template_app_button_clicked_21_listener() {
      return ctx.save();
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(22, "aside", 19)(23, "h2", 20);
    \u0275\u0275text(24, "Session");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "dl", 21)(26, "div", 22)(27, "dt", 23);
    \u0275\u0275text(28, "Provider");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "dd", 24);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 22)(32, "dt", 23);
    \u0275\u0275text(33, "Token expires");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "dd", 25);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 22)(37, "dt", 23);
    \u0275\u0275text(38, "JWT");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "dd", 26);
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    let tmp_9_0;
    let tmp_10_0;
    let tmp_11_0;
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx.initials(), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((tmp_1_0 = ctx.auth.user()) == null ? null : tmp_1_0.fullName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_2_0 = ctx.auth.user()) == null ? null : tmp_2_0.email);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance();
    \u0275\u0275property("control", ctx.form.controls.fullName);
    \u0275\u0275advance(2);
    \u0275\u0275property("control", ctx.form.controls.email);
    \u0275\u0275advance(2);
    \u0275\u0275property("control", ctx.form.controls.avatarUrl);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.auth.error() ? 19 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("loading", ctx.auth.loading());
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate((tmp_9_0 = ctx.auth.user()) == null ? null : tmp_9_0.provider);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((tmp_10_0 = ctx.auth.session()) == null ? null : tmp_10_0.expiresAt);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((tmp_11_0 = ctx.auth.session()) == null ? null : tmp_11_0.accessToken);
  }
}, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, InputTextModule, InputText, AppButtonComponent, AppFormFieldComponent, AppPageHeaderComponent], encapsulation: 2, changeDetection: 0 });
var ProfilePage = _ProfilePage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProfilePage, [{
    type: Component,
    args: [{
      selector: "app-profile-page",
      standalone: true,
      imports: [ReactiveFormsModule, InputTextModule, AppButtonComponent, AppFormFieldComponent, AppPageHeaderComponent],
      template: `
    <app-page-header title="Profile" description="View and edit the signed-in user's profile.">
      <app-button label="Sign out" icon="pi pi-sign-out" intent="secondary" (clicked)="signOut()" />
    </app-page-header>

    <section class="grid gap-6 xl:grid-cols-[1fr_22rem]">
      <article class="fast-panel p-5">
        <div class="mb-6 flex items-center gap-4">
          <div class="grid size-14 place-items-center bg-primary text-lg font-semibold text-primary-contrast" style="border-radius: var(--fast-radius-pill);">
            {{ initials() }}
          </div>
          <div class="min-w-0">
            <h2 class="truncate text-lg font-semibold text-color">{{ auth.user()?.fullName }}</h2>
            <p class="truncate text-sm text-muted-color">{{ auth.user()?.email }}</p>
          </div>
        </div>

        <form [formGroup]="form" class="grid gap-4">
          <app-form-field label="Full name" [control]="form.controls.fullName">
            <input pInputText formControlName="fullName" class="w-full" autocomplete="name" />
          </app-form-field>

          <app-form-field label="Email" [control]="form.controls.email">
            <input pInputText type="email" formControlName="email" class="w-full" autocomplete="email" />
          </app-form-field>

          <app-form-field label="Avatar URL" [control]="form.controls.avatarUrl">
            <input pInputText formControlName="avatarUrl" class="w-full" autocomplete="photo" />
          </app-form-field>

          @if (auth.error()) {
            <p class="rounded-md bg-red-50 px-3 py-2 text-sm text-red-700">{{ auth.error() }}</p>
          }

          <div class="flex justify-end">
            <app-button label="Save profile" icon="pi pi-check" [loading]="auth.loading()" (clicked)="save()" />
          </div>
        </form>
      </article>

      <aside class="fast-panel min-w-0 p-5">
        <h2 class="text-lg font-semibold text-color">Session</h2>
        <dl class="mt-4 grid gap-3 text-sm">
          <div class="fast-muted-panel min-w-0 p-3">
            <dt class="text-xs uppercase text-muted-color">Provider</dt>
            <dd class="mt-1 min-w-0 break-words font-medium capitalize text-color">{{ auth.user()?.provider }}</dd>
          </div>
          <div class="fast-muted-panel min-w-0 p-3">
            <dt class="text-xs uppercase text-muted-color">Token expires</dt>
            <dd class="mt-1 min-w-0 break-words font-medium text-color">{{ auth.session()?.expiresAt }}</dd>
          </div>
          <div class="fast-muted-panel min-w-0 p-3">
            <dt class="text-xs uppercase text-muted-color">JWT</dt>
            <dd class="mt-1 min-w-0 break-all font-mono text-xs leading-5 text-muted-color">{{ auth.session()?.accessToken }}</dd>
          </div>
        </dl>
      </aside>
    </section>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProfilePage, { className: "ProfilePage", filePath: "src/app/features/profile/pages/profile.page.ts", lineNumber: 76 });
})();
export {
  ProfilePage
};
//# sourceMappingURL=chunk-XXOJ2TEU.js.map
