import {
  ProjectConfigService
} from "./chunk-MUAKPLNK.js";
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
  computed,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-GI7FX4Z4.js";
import "./chunk-WDMUDEB6.js";

// src/app/features/home/pages/home.page.ts
function HomePage_For_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r1);
  }
}
var _HomePage = class _HomePage {
  constructor() {
    this.project = inject(ProjectConfigService);
    this.brand = computed(() => this.project.brand(), ...ngDevMode ? [{ debugName: "brand" }] : []);
    this.structure = [
      "core/api",
      "shared/shells",
      "shared/ui",
      "shared/store",
      "features/customers"
    ];
  }
};
_HomePage.\u0275fac = function HomePage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _HomePage)();
};
_HomePage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomePage, selectors: [["app-home-page"]], decls: 25, vars: 3, consts: [[1, "mx-auto", "grid", "max-w-7xl", "gap-10", "px-6", "py-12", "lg:grid-cols-[1fr_28rem]", "lg:items-center", "lg:py-16"], [1, "mb-3", "text-sm", "font-semibold", "uppercase", "text-primary"], [1, "fast-gradient-text", "max-w-3xl", "text-4xl", "font-semibold", "leading-tight", "md:text-5xl"], [1, "mt-5", "max-w-2xl", "text-lg", "text-muted-color"], [1, "mt-8", "flex", "flex-wrap", "gap-3"], ["routerLink", "/app/dashboard"], ["label", "Open dashboard", "icon", "pi pi-arrow-right"], ["routerLink", "/app/customers"], ["label", "View customers", "icon", "pi pi-users", "intent", "secondary"], [1, "fast-panel", "fast-gradient-surface", "p-4"], [1, "fast-panel", "p-4"], [1, "mb-4", "flex", "items-center", "justify-between"], [1, "font-semibold", "text-color"], [1, "text-sm", "text-muted-color"], [1, "pi", "pi-sitemap", "text-primary"], [1, "grid", "gap-2", "text-sm"], [1, "fast-muted-panel", "px-3", "py-2", "font-mono", "text-muted-color"]], template: function HomePage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 0)(1, "div")(2, "p", 1);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h1", 2);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 3);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 4)(9, "a", 5);
    \u0275\u0275element(10, "app-button", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "a", 7);
    \u0275\u0275element(12, "app-button", 8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "section", 9)(14, "div", 10)(15, "div", 11)(16, "div")(17, "p", 12);
    \u0275\u0275text(18, "Starter structure");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "p", 13);
    \u0275\u0275text(20, "Everything has a place.");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(21, "i", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 15);
    \u0275\u0275repeaterCreate(23, HomePage_For_24_Template, 2, 1, "div", 16, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx.brand().shortName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx.brand().name, " starter for fast feature delivery. ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx.brand().tagline, " ");
    \u0275\u0275advance(16);
    \u0275\u0275repeater(ctx.structure);
  }
}, dependencies: [RouterLink, AppButtonComponent], encapsulation: 2, changeDetection: 0 });
var HomePage = _HomePage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HomePage, [{
    type: Component,
    args: [{
      selector: "app-home-page",
      standalone: true,
      imports: [RouterLink, AppButtonComponent],
      template: `
    <section class="mx-auto grid max-w-7xl gap-10 px-6 py-12 lg:grid-cols-[1fr_28rem] lg:items-center lg:py-16">
      <div>
        <p class="mb-3 text-sm font-semibold uppercase text-primary">{{ brand().shortName }}</p>
        <h1 class="fast-gradient-text max-w-3xl text-4xl font-semibold leading-tight md:text-5xl">
          {{ brand().name }} starter for fast feature delivery.
        </h1>
        <p class="mt-5 max-w-2xl text-lg text-muted-color">
          {{ brand().tagline }}
        </p>

        <div class="mt-8 flex flex-wrap gap-3">
          <a routerLink="/app/dashboard">
            <app-button label="Open dashboard" icon="pi pi-arrow-right" />
          </a>
          <a routerLink="/app/customers">
            <app-button label="View customers" icon="pi pi-users" intent="secondary" />
          </a>
        </div>
      </div>

      <section class="fast-panel fast-gradient-surface p-4">
        <div class="fast-panel p-4">
          <div class="mb-4 flex items-center justify-between">
            <div>
              <p class="font-semibold text-color">Starter structure</p>
              <p class="text-sm text-muted-color">Everything has a place.</p>
            </div>
            <i class="pi pi-sitemap text-primary"></i>
          </div>

          <div class="grid gap-2 text-sm">
            @for (item of structure; track item) {
              <div class="fast-muted-panel px-3 py-2 font-mono text-muted-color">{{ item }}</div>
            }
          </div>
        </div>
      </section>
    </section>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomePage, { className: "HomePage", filePath: "src/app/features/home/pages/home.page.ts", lineNumber: 52 });
})();
export {
  HomePage
};
//# sourceMappingURL=chunk-KK56FX3L.js.map
