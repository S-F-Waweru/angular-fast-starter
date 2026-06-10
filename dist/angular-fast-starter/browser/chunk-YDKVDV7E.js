import {
  ChangeDetectionStrategy,
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-GI7FX4Z4.js";
import "./chunk-WDMUDEB6.js";

// src/app/features/shell-demos/pages/wizard-demo-content.page.ts
var _forTrack0 = ($index, $item) => $item.label;
function WizardDemoContentPage_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 5)(1, "span", 10);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span", 11);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const field_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(field_r1.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(field_r1.value);
  }
}
function WizardDemoContentPage_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 9);
    \u0275\u0275domElement(1, "i", 12);
    \u0275\u0275domElementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r2);
  }
}
var _WizardDemoContentPage = class _WizardDemoContentPage {
  constructor() {
    this.fields = [
      { label: "Audience", value: "Enterprise" },
      { label: "Schedule", value: "Weekly" },
      { label: "Owner", value: "Operations" }
    ];
    this.readiness = ["Required fields complete", "Rules validated", "Preview generated"];
  }
};
_WizardDemoContentPage.\u0275fac = function WizardDemoContentPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _WizardDemoContentPage)();
};
_WizardDemoContentPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WizardDemoContentPage, selectors: [["app-wizard-demo-content-page"]], decls: 15, vars: 0, consts: [[1, "grid", "gap-4", "md:grid-cols-[1fr_18rem]"], [1, "fast-panel", "p-5"], [1, "text-xl", "font-semibold", "text-color"], [1, "mt-2", "text-sm", "leading-6", "text-muted-color"], [1, "mt-5", "grid", "gap-3"], [1, "fast-muted-panel", "flex", "items-center", "justify-between", "gap-3", "px-3", "py-2"], [1, "fast-panel", "p-4"], [1, "text-sm", "font-semibold", "text-color"], [1, "mt-4", "grid", "gap-2"], [1, "flex", "items-center", "gap-2", "text-sm", "text-color"], [1, "text-sm", "text-color"], [1, "text-xs", "font-medium", "text-primary"], [1, "pi", "pi-check", "text-primary"]], template: function WizardDemoContentPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "section", 0)(1, "article", 1)(2, "h1", 2);
    \u0275\u0275text(3, "Campaign setup");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "p", 3);
    \u0275\u0275text(5, " The wizard shell keeps progress visible while the form content changes inside the center area. ");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "div", 4);
    \u0275\u0275repeaterCreate(7, WizardDemoContentPage_For_8_Template, 5, 2, "div", 5, _forTrack0);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(9, "aside", 6)(10, "h2", 7);
    \u0275\u0275text(11, "Readiness");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(12, "div", 8);
    \u0275\u0275repeaterCreate(13, WizardDemoContentPage_For_14_Template, 4, 1, "div", 9, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(7);
    \u0275\u0275repeater(ctx.fields);
    \u0275\u0275advance(6);
    \u0275\u0275repeater(ctx.readiness);
  }
}, encapsulation: 2, changeDetection: 0 });
var WizardDemoContentPage = _WizardDemoContentPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WizardDemoContentPage, [{
    type: Component,
    args: [{
      selector: "app-wizard-demo-content-page",
      standalone: true,
      template: `
    <section class="grid gap-4 md:grid-cols-[1fr_18rem]">
      <article class="fast-panel p-5">
        <h1 class="text-xl font-semibold text-color">Campaign setup</h1>
        <p class="mt-2 text-sm leading-6 text-muted-color">
          The wizard shell keeps progress visible while the form content changes inside the center area.
        </p>

        <div class="mt-5 grid gap-3">
          @for (field of fields; track field.label) {
            <div class="fast-muted-panel flex items-center justify-between gap-3 px-3 py-2">
              <span class="text-sm text-color">{{ field.label }}</span>
              <span class="text-xs font-medium text-primary">{{ field.value }}</span>
            </div>
          }
        </div>
      </article>

      <aside class="fast-panel p-4">
        <h2 class="text-sm font-semibold text-color">Readiness</h2>
        <div class="mt-4 grid gap-2">
          @for (item of readiness; track item) {
            <div class="flex items-center gap-2 text-sm text-color">
              <i class="pi pi-check text-primary"></i>
              <span>{{ item }}</span>
            </div>
          }
        </div>
      </aside>
    </section>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WizardDemoContentPage, { className: "WizardDemoContentPage", filePath: "src/app/features/shell-demos/pages/wizard-demo-content.page.ts", lineNumber: 39 });
})();
export {
  WizardDemoContentPage
};
//# sourceMappingURL=chunk-YDKVDV7E.js.map
