import {
  ChangeDetectionStrategy,
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-GI7FX4Z4.js";
import "./chunk-WDMUDEB6.js";

// src/app/features/shell-demos/pages/report-demo-content.page.ts
var _forTrack0 = ($index, $item) => $item.label;
var _forTrack1 = ($index, $item) => $item.name;
function ReportDemoContentPage_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "article", 2)(1, "p", 9);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "p", 10);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "p", 11);
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const metric_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(metric_r1.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(metric_r1.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(metric_r1.delta);
  }
}
function ReportDemoContentPage_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 8)(1, "span", 12);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span", 13);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "span", 14);
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const region_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(region_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(region_r2.revenue);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(region_r2.share);
  }
}
var _ReportDemoContentPage = class _ReportDemoContentPage {
  constructor() {
    this.metrics = [
      { label: "Revenue", value: "$82.4k", delta: "+15.7%" },
      { label: "Pipeline", value: "$410k", delta: "+9.4%" },
      { label: "Retention", value: "94%", delta: "+2.1%" },
      { label: "Margin", value: "38%", delta: "+4.8%" }
    ];
    this.regions = [
      { name: "North America", revenue: "$38.2k", share: "46%" },
      { name: "Europe", revenue: "$24.8k", share: "30%" },
      { name: "Middle East", revenue: "$11.4k", share: "14%" },
      { name: "Africa", revenue: "$8.0k", share: "10%" }
    ];
  }
};
_ReportDemoContentPage.\u0275fac = function ReportDemoContentPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ReportDemoContentPage)();
};
_ReportDemoContentPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReportDemoContentPage, selectors: [["app-report-demo-content-page"]], decls: 14, vars: 0, consts: [[1, "grid", "gap-4"], [1, "grid", "gap-3", "md:grid-cols-4"], [1, "fast-panel", "p-4"], [1, "fast-panel", "p-5"], [1, "flex", "flex-wrap", "items-center", "justify-between", "gap-3"], [1, "text-base", "font-semibold", "text-color"], [1, "mt-1", "text-sm", "text-muted-color"], [1, "mt-5", "grid", "gap-2"], [1, "grid", "grid-cols-[1fr_6rem_5rem]", "items-center", "gap-3", "rounded-md", "px-3", "py-2", "text-sm", 2, "background", "var(--fast-muted-panel-background)"], [1, "text-sm", "text-muted-color"], [1, "mt-2", "text-2xl", "font-semibold", "text-color"], [1, "mt-1", "text-xs", "text-primary"], [1, "truncate", "text-color"], [1, "text-right", "font-medium", "text-color"], [1, "text-right", "text-primary"]], template: function ReportDemoContentPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "section", 0)(1, "div", 1);
    \u0275\u0275repeaterCreate(2, ReportDemoContentPage_For_3_Template, 7, 3, "article", 2, _forTrack0);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "article", 3)(5, "div", 4)(6, "div")(7, "h2", 5);
    \u0275\u0275text(8, "Regional revenue");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(9, "p", 6);
    \u0275\u0275text(10, "Compact report rows with stable spacing.");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(11, "div", 7);
    \u0275\u0275repeaterCreate(12, ReportDemoContentPage_For_13_Template, 7, 3, "div", 8, _forTrack1);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx.metrics);
    \u0275\u0275advance(10);
    \u0275\u0275repeater(ctx.regions);
  }
}, encapsulation: 2, changeDetection: 0 });
var ReportDemoContentPage = _ReportDemoContentPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReportDemoContentPage, [{
    type: Component,
    args: [{
      selector: "app-report-demo-content-page",
      standalone: true,
      template: `
    <section class="grid gap-4">
      <div class="grid gap-3 md:grid-cols-4">
        @for (metric of metrics; track metric.label) {
          <article class="fast-panel p-4">
            <p class="text-sm text-muted-color">{{ metric.label }}</p>
            <p class="mt-2 text-2xl font-semibold text-color">{{ metric.value }}</p>
            <p class="mt-1 text-xs text-primary">{{ metric.delta }}</p>
          </article>
        }
      </div>

      <article class="fast-panel p-5">
        <div class="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 class="text-base font-semibold text-color">Regional revenue</h2>
            <p class="mt-1 text-sm text-muted-color">Compact report rows with stable spacing.</p>
          </div>
        </div>

        <div class="mt-5 grid gap-2">
          @for (region of regions; track region.name) {
            <div class="grid grid-cols-[1fr_6rem_5rem] items-center gap-3 rounded-md px-3 py-2 text-sm" style="background: var(--fast-muted-panel-background);">
              <span class="truncate text-color">{{ region.name }}</span>
              <span class="text-right font-medium text-color">{{ region.revenue }}</span>
              <span class="text-right text-primary">{{ region.share }}</span>
            </div>
          }
        </div>
      </article>
    </section>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReportDemoContentPage, { className: "ReportDemoContentPage", filePath: "src/app/features/shell-demos/pages/report-demo-content.page.ts", lineNumber: 40 });
})();
export {
  ReportDemoContentPage
};
//# sourceMappingURL=chunk-BZFOJWLO.js.map
