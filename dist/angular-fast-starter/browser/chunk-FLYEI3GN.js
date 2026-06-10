import {
  AppPageHeaderComponent
} from "./chunk-VWZ6ILE3.js";
import {
  AppButtonComponent
} from "./chunk-2BI5IW7M.js";
import "./chunk-TARWWEIZ.js";
import "./chunk-YGQPX75J.js";
import {
  RouterOutlet
} from "./chunk-XVYRP3BM.js";
import "./chunk-TI7NITK6.js";
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty
} from "./chunk-GI7FX4Z4.js";
import "./chunk-WDMUDEB6.js";

// src/app/shared/shells/report-shell/report-shell.component.ts
var _c0 = [[["", "actions", ""]]];
var _c1 = ["[actions]"];
var _ReportShellComponent = class _ReportShellComponent {
  constructor() {
    this.title = input("Report", ...ngDevMode ? [{ debugName: "title" }] : []);
    this.description = input(...ngDevMode ? [void 0, { debugName: "description" }] : []);
  }
};
_ReportShellComponent.\u0275fac = function ReportShellComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ReportShellComponent)();
};
_ReportShellComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReportShellComponent, selectors: [["app-report-shell"]], inputs: { title: [1, "title"], description: [1, "description"] }, ngContentSelectors: _c1, decls: 4, vars: 2, consts: [[1, "fast-app-bg", "fast-page", "min-h-full"], [3, "title", "description"]], template: function ReportShellComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projectionDef(_c0);
    \u0275\u0275elementStart(0, "main", 0)(1, "app-page-header", 1);
    \u0275\u0275projection(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "router-outlet");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("title", ctx.title())("description", ctx.description());
  }
}, dependencies: [RouterOutlet, AppPageHeaderComponent], encapsulation: 2, changeDetection: 0 });
var ReportShellComponent = _ReportShellComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReportShellComponent, [{
    type: Component,
    args: [{
      selector: "app-report-shell",
      standalone: true,
      imports: [RouterOutlet, AppPageHeaderComponent],
      template: `
    <main class="fast-app-bg fast-page min-h-full">
      <app-page-header [title]="title()" [description]="description()">
        <ng-content select="[actions]" />
      </app-page-header>

      <router-outlet />
    </main>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, { title: [{ type: Input, args: [{ isSignal: true, alias: "title", required: false }] }], description: [{ type: Input, args: [{ isSignal: true, alias: "description", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReportShellComponent, { className: "ReportShellComponent", filePath: "src/app/shared/shells/report-shell/report-shell.component.ts", lineNumber: 20 });
})();

// src/app/features/shell-demos/pages/report-demo-shell.page.ts
var _ReportDemoShellPage = class _ReportDemoShellPage {
};
_ReportDemoShellPage.\u0275fac = function ReportDemoShellPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ReportDemoShellPage)();
};
_ReportDemoShellPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReportDemoShellPage, selectors: [["app-report-demo-shell-page"]], decls: 2, vars: 0, consts: [["title", "Revenue Report", "description", "A dense shell for summaries, slices, and export actions."], ["actions", "", "label", "Export", "icon", "pi pi-download", "intent", "secondary", "size", "small"]], template: function ReportDemoShellPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-report-shell", 0);
    \u0275\u0275element(1, "app-button", 1);
    \u0275\u0275elementEnd();
  }
}, dependencies: [ReportShellComponent, AppButtonComponent], encapsulation: 2, changeDetection: 0 });
var ReportDemoShellPage = _ReportDemoShellPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReportDemoShellPage, [{
    type: Component,
    args: [{
      selector: "app-report-demo-shell-page",
      standalone: true,
      imports: [ReportShellComponent, AppButtonComponent],
      template: `
    <app-report-shell title="Revenue Report" description="A dense shell for summaries, slices, and export actions.">
      <app-button actions label="Export" icon="pi pi-download" intent="secondary" size="small" />
    </app-report-shell>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReportDemoShellPage, { className: "ReportDemoShellPage", filePath: "src/app/features/shell-demos/pages/report-demo-shell.page.ts", lineNumber: 16 });
})();
export {
  ReportDemoShellPage
};
//# sourceMappingURL=chunk-FLYEI3GN.js.map
