import {
  ProjectConfigService
} from "./chunk-MUAKPLNK.js";
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
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-GI7FX4Z4.js";
import "./chunk-WDMUDEB6.js";

// src/app/shared/shells/auth-shell/auth-shell.component.ts
var _AuthShellComponent = class _AuthShellComponent {
  constructor() {
    this.project = inject(ProjectConfigService);
    this.brand = computed(() => this.project.brand(), ...ngDevMode ? [{ debugName: "brand" }] : []);
  }
};
_AuthShellComponent.\u0275fac = function AuthShellComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AuthShellComponent)();
};
_AuthShellComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AuthShellComponent, selectors: [["app-auth-shell"]], decls: 8, vars: 2, consts: [[1, "fast-app-bg", "grid", "min-h-screen", "place-items-center", "px-4", "py-10"], [1, "w-full", "max-w-md"], ["routerLink", "/", 1, "mb-6", "flex", "items-center", "justify-center", "gap-2", "font-semibold"], [1, "fast-brand-mark"], [1, "fast-panel", "p-6"]], template: function AuthShellComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 0)(1, "section", 1)(2, "a", 2)(3, "span", 3);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 4);
    \u0275\u0275element(7, "router-outlet");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx.brand().logoText);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx.brand().name, " ");
  }
}, dependencies: [RouterLink, RouterOutlet], encapsulation: 2, changeDetection: 0 });
var AuthShellComponent = _AuthShellComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthShellComponent, [{
    type: Component,
    args: [{
      selector: "app-auth-shell",
      standalone: true,
      imports: [RouterLink, RouterOutlet],
      template: `
    <main class="fast-app-bg grid min-h-screen place-items-center px-4 py-10">
      <section class="w-full max-w-md">
        <a routerLink="/" class="mb-6 flex items-center justify-center gap-2 font-semibold">
          <span class="fast-brand-mark">{{ brand().logoText }}</span>
          {{ brand().name }}
        </a>

        <div class="fast-panel p-6">
          <router-outlet />
        </div>
      </section>
    </main>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AuthShellComponent, { className: "AuthShellComponent", filePath: "src/app/shared/shells/auth-shell/auth-shell.component.ts", lineNumber: 25 });
})();
export {
  AuthShellComponent
};
//# sourceMappingURL=chunk-2KA4IKAB.js.map
