import {
  AppLoadingStateComponent
} from "./chunk-7BH6NQVT.js";
import {
  AppPageHeaderComponent
} from "./chunk-VWZ6ILE3.js";
import "./chunk-YGQPX75J.js";
import "./chunk-TI7NITK6.js";
import {
  ChangeDetectionStrategy,
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefer,
  ɵɵdeferOnIdle,
  ɵɵdefineComponent,
  ɵɵdomTemplate,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-GI7FX4Z4.js";
import "./chunk-WDMUDEB6.js";

// src/app/features/dashboard/pages/dashboard.page.ts
var _forTrack0 = ($index, $item) => $item.label;
var _forTrack1 = ($index, $item) => $item.month;
function DashboardPage_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 2)(1, "div", 7)(2, "p", 6);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "i", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 9);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 10);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const metric_r1 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(metric_r1.label);
    \u0275\u0275advance();
    \u0275\u0275classMap(metric_r1.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(metric_r1.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(metric_r1.delta);
  }
}
function DashboardPage_Defer_11_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275element(1, "div", 13);
    \u0275\u0275elementStart(2, "p", 14);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const bar_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleProp("height", bar_r2.value, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(bar_r2.month);
  }
}
function DashboardPage_Defer_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275repeaterCreate(1, DashboardPage_Defer_11_For_2_Template, 4, 3, "div", 12, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.chartBars);
  }
}
function DashboardPage_DeferPlaceholder_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-loading-state", 15);
  }
}
var _DashboardPage = class _DashboardPage {
  constructor() {
    this.metrics = [
      { label: "Customers", value: "1,284", delta: "+12.4%", icon: "pi pi-users" },
      { label: "Orders", value: "342", delta: "+8.1%", icon: "pi pi-shopping-cart" },
      { label: "Revenue", value: "$82.4k", delta: "+15.7%", icon: "pi pi-wallet" },
      { label: "Tickets", value: "26", delta: "+3.2%", icon: "pi pi-inbox" }
    ];
    this.chartBars = [
      { month: "Jan", value: 44 },
      { month: "Feb", value: 56 },
      { month: "Mar", value: 38 },
      { month: "Apr", value: 72 },
      { month: "May", value: 63 },
      { month: "Jun", value: 84 },
      { month: "Jul", value: 70 },
      { month: "Aug", value: 92 },
      { month: "Sep", value: 76 },
      { month: "Oct", value: 88 },
      { month: "Nov", value: 95 },
      { month: "Dec", value: 100 }
    ];
  }
};
_DashboardPage.\u0275fac = function DashboardPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DashboardPage)();
};
_DashboardPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardPage, selectors: [["app-dashboard-page"]], decls: 15, vars: 0, consts: [["title", "Dashboard", "description", "A shell-ready workspace overview."], [1, "grid", "gap-4", "md:grid-cols-2", "xl:grid-cols-4"], [1, "fast-panel", "p-4"], [1, "fast-panel", "mt-6", "p-5"], [1, "mb-5", "flex", "items-center", "justify-between", "gap-4"], [1, "text-lg", "font-semibold", "text-color"], [1, "text-sm", "text-muted-color"], [1, "flex", "items-center", "justify-between", "gap-3"], [1, "text-primary"], [1, "mt-3", "text-2xl", "font-semibold", "text-color"], [1, "mt-1", "text-sm", "text-green-600"], [1, "fast-muted-panel", "grid", "h-72", "items-end", "gap-3", "p-4", 2, "grid-template-columns", "repeat(12, minmax(0, 1fr))"], [1, "grid", "h-full", "items-end", "gap-2"], [1, "bg-primary", 2, "border-radius", "var(--fast-radius-sm) var(--fast-radius-sm) 0 0"], [1, "text-center", "text-xs", "text-muted-color"], ["label", "Loading chart"]], template: function DashboardPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-page-header", 0);
    \u0275\u0275elementStart(1, "section", 1);
    \u0275\u0275repeaterCreate(2, DashboardPage_For_3_Template, 9, 5, "article", 2, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "section", 3)(5, "div", 4)(6, "div")(7, "h2", 5);
    \u0275\u0275text(8, "Revenue trend");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 6);
    \u0275\u0275text(10, "Deferred area for charts, reports, and heavy widgets.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275domTemplate(11, DashboardPage_Defer_11_Template, 3, 0)(12, DashboardPage_DeferPlaceholder_12_Template, 1, 0);
    \u0275\u0275defer(13, 11, null, null, 12);
    \u0275\u0275deferOnIdle();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx.metrics);
  }
}, dependencies: [AppPageHeaderComponent, AppLoadingStateComponent], encapsulation: 2, changeDetection: 0 });
var DashboardPage = _DashboardPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DashboardPage, [{
    type: Component,
    args: [{
      selector: "app-dashboard-page",
      standalone: true,
      imports: [AppPageHeaderComponent, AppLoadingStateComponent],
      template: `
    <app-page-header title="Dashboard" description="A shell-ready workspace overview." />

    <section class="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      @for (metric of metrics; track metric.label) {
        <article class="fast-panel p-4">
          <div class="flex items-center justify-between gap-3">
            <p class="text-sm text-muted-color">{{ metric.label }}</p>
            <i class="text-primary" [class]="metric.icon"></i>
          </div>
          <p class="mt-3 text-2xl font-semibold text-color">{{ metric.value }}</p>
          <p class="mt-1 text-sm text-green-600">{{ metric.delta }}</p>
        </article>
      }
    </section>

    <section class="fast-panel mt-6 p-5">
      <div class="mb-5 flex items-center justify-between gap-4">
        <div>
          <h2 class="text-lg font-semibold text-color">Revenue trend</h2>
          <p class="text-sm text-muted-color">Deferred area for charts, reports, and heavy widgets.</p>
        </div>
      </div>

      @defer {
        <div class="fast-muted-panel grid h-72 items-end gap-3 p-4" style="grid-template-columns: repeat(12, minmax(0, 1fr));">
          @for (bar of chartBars; track bar.month) {
            <div class="grid h-full items-end gap-2">
              <div class="bg-primary" [style.height.%]="bar.value" style="border-radius: var(--fast-radius-sm) var(--fast-radius-sm) 0 0;"></div>
              <p class="text-center text-xs text-muted-color">{{ bar.month }}</p>
            </div>
          }
        </div>
      } @placeholder {
        <app-loading-state label="Loading chart" />
      }
    </section>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardPage, { className: "DashboardPage", filePath: "src/app/features/dashboard/pages/dashboard.page.ts", lineNumber: 56 });
})();
export {
  DashboardPage
};
//# sourceMappingURL=chunk-W64RLVNG.js.map
