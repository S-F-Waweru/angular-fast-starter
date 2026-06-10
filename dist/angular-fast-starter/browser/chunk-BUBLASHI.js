import {
  AppPageHeaderComponent
} from "./chunk-VWZ6ILE3.js";
import {
  RouterLink
} from "./chunk-XVYRP3BM.js";
import "./chunk-TI7NITK6.js";
import {
  ChangeDetectionStrategy,
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-GI7FX4Z4.js";
import "./chunk-WDMUDEB6.js";

// src/app/features/shell-demos/pages/shell-demos-index.page.ts
var _forTrack0 = ($index, $item) => $item.route;
function ShellDemosIndexPage_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 2)(1, "div", 3)(2, "span", 4);
    \u0275\u0275element(3, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "i", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h2", 6);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 7);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const demo_r1 = ctx.$implicit;
    \u0275\u0275property("routerLink", demo_r1.route);
    \u0275\u0275advance(3);
    \u0275\u0275classMap(demo_r1.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(demo_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(demo_r1.description);
  }
}
var _ShellDemosIndexPage = class _ShellDemosIndexPage {
  constructor() {
    this.demos = [
      {
        title: "Workspace",
        description: "A two-column operational area with section navigation.",
        icon: "pi pi-building",
        route: "workspace"
      },
      {
        title: "Detail",
        description: "A record page with local tabs and focused content.",
        icon: "pi pi-id-card",
        route: "detail"
      },
      {
        title: "Wizard",
        description: "A guided multi-step flow with persistent actions.",
        icon: "pi pi-list-check",
        route: "wizard"
      },
      {
        title: "Report",
        description: "A report surface for metrics, summaries, and exports.",
        icon: "pi pi-chart-bar",
        route: "report"
      }
    ];
  }
};
_ShellDemosIndexPage.\u0275fac = function ShellDemosIndexPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ShellDemosIndexPage)();
};
_ShellDemosIndexPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ShellDemosIndexPage, selectors: [["app-shell-demos-index-page"]], decls: 4, vars: 0, consts: [["title", "Shell Demos", "description", "Reusable layouts for common application situations."], [1, "grid", "gap-4", "md:grid-cols-2", "xl:grid-cols-4"], [1, "fast-panel", "p-4", "transition", "hover:-translate-y-0.5", "hover:shadow-lg", 3, "routerLink"], [1, "flex", "items-center", "justify-between", "gap-3"], [1, "grid", "size-10", "place-items-center", "rounded-md", "bg-primary-50", "text-primary"], [1, "pi", "pi-arrow-right", "text-muted-color"], [1, "mt-4", "text-base", "font-semibold", "text-color"], [1, "mt-2", "text-sm", "leading-6", "text-muted-color"]], template: function ShellDemosIndexPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-page-header", 0);
    \u0275\u0275elementStart(1, "section", 1);
    \u0275\u0275repeaterCreate(2, ShellDemosIndexPage_For_3_Template, 9, 5, "a", 2, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx.demos);
  }
}, dependencies: [RouterLink, AppPageHeaderComponent], encapsulation: 2, changeDetection: 0 });
var ShellDemosIndexPage = _ShellDemosIndexPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ShellDemosIndexPage, [{
    type: Component,
    args: [{
      selector: "app-shell-demos-index-page",
      standalone: true,
      imports: [RouterLink, AppPageHeaderComponent],
      template: `
    <app-page-header title="Shell Demos" description="Reusable layouts for common application situations." />

    <section class="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      @for (demo of demos; track demo.route) {
        <a [routerLink]="demo.route" class="fast-panel p-4 transition hover:-translate-y-0.5 hover:shadow-lg">
          <div class="flex items-center justify-between gap-3">
            <span class="grid size-10 place-items-center rounded-md bg-primary-50 text-primary">
              <i [class]="demo.icon"></i>
            </span>
            <i class="pi pi-arrow-right text-muted-color"></i>
          </div>
          <h2 class="mt-4 text-base font-semibold text-color">{{ demo.title }}</h2>
          <p class="mt-2 text-sm leading-6 text-muted-color">{{ demo.description }}</p>
        </a>
      }
    </section>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ShellDemosIndexPage, { className: "ShellDemosIndexPage", filePath: "src/app/features/shell-demos/pages/shell-demos-index.page.ts", lineNumber: 36 });
})();
export {
  ShellDemosIndexPage
};
//# sourceMappingURL=chunk-BUBLASHI.js.map
