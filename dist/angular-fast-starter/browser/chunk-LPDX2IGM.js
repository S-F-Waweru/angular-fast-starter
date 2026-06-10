import {
  ProjectConfigService
} from "./chunk-MUAKPLNK.js";
import {
  AppButtonComponent
} from "./chunk-2BI5IW7M.js";
import "./chunk-TARWWEIZ.js";
import "./chunk-YGQPX75J.js";
import {
  RouterLink,
  RouterOutlet
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
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-GI7FX4Z4.js";
import "./chunk-WDMUDEB6.js";

// src/app/shared/shells/public-shell/public-shell.component.ts
var _PublicShellComponent = class _PublicShellComponent {
  constructor() {
    this.project = inject(ProjectConfigService);
    this.brand = computed(() => this.project.brand(), ...ngDevMode ? [{ debugName: "brand" }] : []);
  }
  noop() {
    window.location.href = "/app/dashboard";
  }
};
_PublicShellComponent.\u0275fac = function PublicShellComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PublicShellComponent)();
};
_PublicShellComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PublicShellComponent, selectors: [["app-public-shell"]], decls: 13, vars: 2, consts: [[1, "fast-app-bg", "min-h-screen", "text-color"], [1, "fast-topbar", "px-6", "py-4"], [1, "mx-auto", "flex", "max-w-7xl", "items-center", "justify-between", "gap-4"], ["routerLink", "/", 1, "flex", "items-center", "gap-2", "font-semibold"], [1, "fast-brand-mark"], [1, "flex", "items-center", "gap-2"], ["routerLink", "/auth/login", 1, "fast-shell-link", "text-sm", "font-medium"], ["label", "Open app", "icon", "pi pi-arrow-right", 3, "clicked"]], template: function PublicShellComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "nav", 2)(3, "a", 3)(4, "span", 4);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 5)(8, "a", 6);
    \u0275\u0275text(9, "Login");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "app-button", 7);
    \u0275\u0275listener("clicked", function PublicShellComponent_Template_app_button_clicked_10_listener() {
      return ctx.noop();
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(11, "main");
    \u0275\u0275element(12, "router-outlet");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx.brand().logoText);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx.brand().name, " ");
  }
}, dependencies: [RouterLink, RouterOutlet, AppButtonComponent], encapsulation: 2, changeDetection: 0 });
var PublicShellComponent = _PublicShellComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PublicShellComponent, [{
    type: Component,
    args: [{
      selector: "app-public-shell",
      standalone: true,
      imports: [RouterLink, RouterOutlet, AppButtonComponent],
      template: `
    <div class="fast-app-bg min-h-screen text-color">
      <header class="fast-topbar px-6 py-4">
        <nav class="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <a routerLink="/" class="flex items-center gap-2 font-semibold">
            <span class="fast-brand-mark">{{ brand().logoText }}</span>
            {{ brand().name }}
          </a>

          <div class="flex items-center gap-2">
            <a routerLink="/auth/login" class="fast-shell-link text-sm font-medium">Login</a>
            <app-button label="Open app" icon="pi pi-arrow-right" (clicked)="noop()" />
          </div>
        </nav>
      </header>

      <main>
        <router-outlet />
      </main>
    </div>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PublicShellComponent, { className: "PublicShellComponent", filePath: "src/app/shared/shells/public-shell/public-shell.component.ts", lineNumber: 33 });
})();
export {
  PublicShellComponent
};
//# sourceMappingURL=chunk-LPDX2IGM.js.map
