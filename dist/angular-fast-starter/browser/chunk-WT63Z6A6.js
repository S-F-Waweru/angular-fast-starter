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

// src/app/features/shell-demos/pages/detail-demo-content.page.ts
var _forTrack0 = ($index, $item) => $item.label;
function DetailDemoOverviewPage_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 5)(1, "dt", 9);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "dd", 10);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.value);
  }
}
var _forTrack1 = ($index, $item) => $item.title;
function DetailDemoActivityPage_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 3)(1, "p", 4);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "p", 5);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const event_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(event_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(event_r1.time);
  }
}
var _DetailDemoOverviewPage = class _DetailDemoOverviewPage {
  constructor() {
    this.summary = [
      { label: "ARR", value: "$240k" },
      { label: "Seats", value: "186" },
      { label: "Health", value: "Strong" }
    ];
  }
};
_DetailDemoOverviewPage.\u0275fac = function DetailDemoOverviewPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DetailDemoOverviewPage)();
};
_DetailDemoOverviewPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DetailDemoOverviewPage, selectors: [["app-detail-demo-overview-page"]], decls: 16, vars: 0, consts: [[1, "grid", "gap-4", "lg:grid-cols-[1fr_18rem]"], [1, "fast-panel", "p-4"], [1, "text-base", "font-semibold", "text-color"], [1, "mt-2", "text-sm", "leading-6", "text-muted-color"], [1, "mt-4", "grid", "gap-3", "sm:grid-cols-3"], [1, "fast-muted-panel", "p-3"], [1, "text-sm", "font-semibold", "text-color"], [1, "mt-3", "text-sm", "text-color"], [1, "text-xs", "text-muted-color"], [1, "text-xs", "uppercase", "text-muted-color"], [1, "mt-1", "text-sm", "font-semibold", "text-color"]], template: function DetailDemoOverviewPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "section", 0)(1, "article", 1)(2, "h2", 2);
    \u0275\u0275text(3, "Northstar Logistics");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "p", 3);
    \u0275\u0275text(5, " Enterprise account with active onboarding, executive sponsorship, and quarterly reporting. ");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "dl", 4);
    \u0275\u0275repeaterCreate(7, DetailDemoOverviewPage_For_8_Template, 5, 2, "div", 5, _forTrack0);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(9, "aside", 1)(10, "h3", 6);
    \u0275\u0275text(11, "Owner");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(12, "p", 7);
    \u0275\u0275text(13, "Maya Chen");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(14, "p", 8);
    \u0275\u0275text(15, "Customer Success");
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(7);
    \u0275\u0275repeater(ctx.summary);
  }
}, encapsulation: 2, changeDetection: 0 });
var DetailDemoOverviewPage = _DetailDemoOverviewPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DetailDemoOverviewPage, [{
    type: Component,
    args: [{
      selector: "app-detail-demo-overview-page",
      standalone: true,
      template: `
    <section class="grid gap-4 lg:grid-cols-[1fr_18rem]">
      <article class="fast-panel p-4">
        <h2 class="text-base font-semibold text-color">Northstar Logistics</h2>
        <p class="mt-2 text-sm leading-6 text-muted-color">
          Enterprise account with active onboarding, executive sponsorship, and quarterly reporting.
        </p>

        <dl class="mt-4 grid gap-3 sm:grid-cols-3">
          @for (item of summary; track item.label) {
            <div class="fast-muted-panel p-3">
              <dt class="text-xs uppercase text-muted-color">{{ item.label }}</dt>
              <dd class="mt-1 text-sm font-semibold text-color">{{ item.value }}</dd>
            </div>
          }
        </dl>
      </article>

      <aside class="fast-panel p-4">
        <h3 class="text-sm font-semibold text-color">Owner</h3>
        <p class="mt-3 text-sm text-color">Maya Chen</p>
        <p class="text-xs text-muted-color">Customer Success</p>
      </aside>
    </section>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DetailDemoOverviewPage, { className: "DetailDemoOverviewPage", filePath: "src/app/features/shell-demos/pages/detail-demo-content.page.ts", lineNumber: 33 });
})();
var _DetailDemoActivityPage = class _DetailDemoActivityPage {
  constructor() {
    this.activity = [
      { title: "Quarterly review booked", time: "Today, 09:30" },
      { title: "Implementation checklist updated", time: "Yesterday, 16:20" },
      { title: "New billing contact added", time: "Monday, 11:45" }
    ];
  }
};
_DetailDemoActivityPage.\u0275fac = function DetailDemoActivityPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DetailDemoActivityPage)();
};
_DetailDemoActivityPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DetailDemoActivityPage, selectors: [["app-detail-demo-activity-page"]], decls: 6, vars: 0, consts: [[1, "fast-panel", "p-4"], [1, "text-base", "font-semibold", "text-color"], [1, "mt-4", "grid", "gap-3"], [1, "grid", "gap-1", "border-l-2", "pl-3", 2, "border-color", "var(--brand)"], [1, "text-sm", "font-medium", "text-color"], [1, "text-xs", "text-muted-color"]], template: function DetailDemoActivityPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "article", 0)(1, "h2", 1);
    \u0275\u0275text(2, "Activity");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "div", 2);
    \u0275\u0275repeaterCreate(4, DetailDemoActivityPage_For_5_Template, 5, 2, "div", 3, _forTrack1);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx.activity);
  }
}, encapsulation: 2, changeDetection: 0 });
var DetailDemoActivityPage = _DetailDemoActivityPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DetailDemoActivityPage, [{
    type: Component,
    args: [{
      selector: "app-detail-demo-activity-page",
      standalone: true,
      template: `
    <article class="fast-panel p-4">
      <h2 class="text-base font-semibold text-color">Activity</h2>
      <div class="mt-4 grid gap-3">
        @for (event of activity; track event.title) {
          <div class="grid gap-1 border-l-2 pl-3" style="border-color: var(--brand);">
            <p class="text-sm font-medium text-color">{{ event.title }}</p>
            <p class="text-xs text-muted-color">{{ event.time }}</p>
          </div>
        }
      </div>
    </article>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DetailDemoActivityPage, { className: "DetailDemoActivityPage", filePath: "src/app/features/shell-demos/pages/detail-demo-content.page.ts", lineNumber: 59 });
})();
var _DetailDemoBillingPage = class _DetailDemoBillingPage {
};
_DetailDemoBillingPage.\u0275fac = function DetailDemoBillingPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DetailDemoBillingPage)();
};
_DetailDemoBillingPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DetailDemoBillingPage, selectors: [["app-detail-demo-billing-page"]], decls: 15, vars: 0, consts: [[1, "grid", "gap-4", "md:grid-cols-2"], [1, "fast-panel", "p-4"], [1, "text-sm", "text-muted-color"], [1, "mt-2", "text-xl", "font-semibold", "text-color"], [1, "mt-1", "text-sm", "text-muted-color"]], template: function DetailDemoBillingPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "section", 0)(1, "article", 1)(2, "p", 2);
    \u0275\u0275text(3, "Plan");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "p", 3);
    \u0275\u0275text(5, "Enterprise Annual");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "p", 4);
    \u0275\u0275text(7, "Renews on 12 Dec 2026");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(8, "article", 1)(9, "p", 2);
    \u0275\u0275text(10, "Invoice status");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(11, "p", 3);
    \u0275\u0275text(12, "Current");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(13, "p", 4);
    \u0275\u0275text(14, "Next invoice estimated at $20k");
    \u0275\u0275domElementEnd()()();
  }
}, encapsulation: 2, changeDetection: 0 });
var DetailDemoBillingPage = _DetailDemoBillingPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DetailDemoBillingPage, [{
    type: Component,
    args: [{
      selector: "app-detail-demo-billing-page",
      standalone: true,
      template: `
    <section class="grid gap-4 md:grid-cols-2">
      <article class="fast-panel p-4">
        <p class="text-sm text-muted-color">Plan</p>
        <p class="mt-2 text-xl font-semibold text-color">Enterprise Annual</p>
        <p class="mt-1 text-sm text-muted-color">Renews on 12 Dec 2026</p>
      </article>

      <article class="fast-panel p-4">
        <p class="text-sm text-muted-color">Invoice status</p>
        <p class="mt-2 text-xl font-semibold text-color">Current</p>
        <p class="mt-1 text-sm text-muted-color">Next invoice estimated at $20k</p>
      </article>
    </section>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DetailDemoBillingPage, { className: "DetailDemoBillingPage", filePath: "src/app/features/shell-demos/pages/detail-demo-content.page.ts", lineNumber: 87 });
})();
export {
  DetailDemoActivityPage,
  DetailDemoBillingPage,
  DetailDemoOverviewPage
};
//# sourceMappingURL=chunk-WT63Z6A6.js.map
