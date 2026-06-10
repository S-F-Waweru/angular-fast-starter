import {
  ChangeDetectionStrategy,
  Component,
  Input,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-GI7FX4Z4.js";

// src/app/shared/ui/page-header/page-header.component.ts
var _c0 = ["*"];
function AppPageHeaderComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "p", 3);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.description());
  }
}
var _AppPageHeaderComponent = class _AppPageHeaderComponent {
  constructor() {
    this.title = input.required(...ngDevMode ? [{ debugName: "title" }] : []);
    this.description = input(...ngDevMode ? [void 0, { debugName: "description" }] : []);
  }
};
_AppPageHeaderComponent.\u0275fac = function AppPageHeaderComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AppPageHeaderComponent)();
};
_AppPageHeaderComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppPageHeaderComponent, selectors: [["app-page-header"]], inputs: { title: [1, "title"], description: [1, "description"] }, ngContentSelectors: _c0, decls: 7, vars: 2, consts: [[1, "mb-6", "flex", "flex-wrap", "items-start", "justify-between", "gap-4"], [1, "min-w-0"], [1, "text-2xl", "font-semibold", "text-color"], [1, "mt-1", "text-sm", "text-muted-color"], [1, "flex", "flex-wrap", "items-center", "gap-2"]], template: function AppPageHeaderComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projectionDef();
    \u0275\u0275domElementStart(0, "header", 0)(1, "div", 1)(2, "h1", 2);
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(4, AppPageHeaderComponent_Conditional_4_Template, 2, 1, "p", 3);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "div", 4);
    \u0275\u0275projection(6);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx.title());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.description() ? 4 : -1);
  }
}, encapsulation: 2, changeDetection: 0 });
var AppPageHeaderComponent = _AppPageHeaderComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppPageHeaderComponent, [{
    type: Component,
    args: [{
      selector: "app-page-header",
      standalone: true,
      template: `
    <header class="mb-6 flex flex-wrap items-start justify-between gap-4">
      <div class="min-w-0">
        <h1 class="text-2xl font-semibold text-color">{{ title() }}</h1>
        @if (description()) {
          <p class="mt-1 text-sm text-muted-color">{{ description() }}</p>
        }
      </div>

      <div class="flex flex-wrap items-center gap-2">
        <ng-content />
      </div>
    </header>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, { title: [{ type: Input, args: [{ isSignal: true, alias: "title", required: true }] }], description: [{ type: Input, args: [{ isSignal: true, alias: "description", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppPageHeaderComponent, { className: "AppPageHeaderComponent", filePath: "src/app/shared/ui/page-header/page-header.component.ts", lineNumber: 22 });
})();

export {
  AppPageHeaderComponent
};
//# sourceMappingURL=chunk-VWZ6ILE3.js.map
