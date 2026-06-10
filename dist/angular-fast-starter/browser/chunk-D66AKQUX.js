import {
  RouterLink,
  RouterOutlet
} from "./chunk-XVYRP3BM.js";
import "./chunk-TI7NITK6.js";
import {
  ChangeDetectionStrategy,
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext
} from "./chunk-GI7FX4Z4.js";
import "./chunk-WDMUDEB6.js";

// src/app/shared/shells/workspace-shell/workspace-shell.component.ts
var _WorkspaceShellComponent = class _WorkspaceShellComponent {
};
_WorkspaceShellComponent.\u0275fac = function WorkspaceShellComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _WorkspaceShellComponent)();
};
_WorkspaceShellComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WorkspaceShellComponent, selectors: [["app-workspace-shell"]], decls: 16, vars: 0, consts: [[1, "fast-app-bg", "grid", "min-h-full", "lg:grid-cols-[18rem_1fr]"], [1, "fast-shell-panel"], [1, "fast-shell-panel-header", "p-4"], [1, "text-xs", "uppercase", "text-muted-color"], [1, "mt-1", "font-semibold", "text-color"], [1, "grid", "gap-1", "p-3"], ["routerLink", "./", 1, "fast-nav-link"], ["routerLink", "./members", 1, "fast-nav-link"], ["routerLink", "./settings", 1, "fast-nav-link"], [1, "fast-page", "min-w-0"]], template: function WorkspaceShellComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "aside", 1)(2, "section", 2)(3, "p", 3);
    \u0275\u0275text(4, "Workspace");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 4);
    \u0275\u0275text(6, "Acme Operations");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "nav", 5)(8, "a", 6);
    \u0275\u0275text(9, " Overview ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "a", 7);
    \u0275\u0275text(11, " Members ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "a", 8);
    \u0275\u0275text(13, " Settings ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "main", 9);
    \u0275\u0275element(15, "router-outlet");
    \u0275\u0275elementEnd()();
  }
}, dependencies: [RouterLink, RouterOutlet], encapsulation: 2, changeDetection: 0 });
var WorkspaceShellComponent = _WorkspaceShellComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WorkspaceShellComponent, [{
    type: Component,
    args: [{
      selector: "app-workspace-shell",
      standalone: true,
      imports: [RouterLink, RouterOutlet],
      template: `
    <div class="fast-app-bg grid min-h-full lg:grid-cols-[18rem_1fr]">
      <aside class="fast-shell-panel">
        <section class="fast-shell-panel-header p-4">
          <p class="text-xs uppercase text-muted-color">Workspace</p>
          <p class="mt-1 font-semibold text-color">Acme Operations</p>
        </section>

        <nav class="grid gap-1 p-3">
          <a routerLink="./" class="fast-nav-link">
            Overview
          </a>
          <a routerLink="./members" class="fast-nav-link">
            Members
          </a>
          <a routerLink="./settings" class="fast-nav-link">
            Settings
          </a>
        </nav>
      </aside>

      <main class="fast-page min-w-0">
        <router-outlet />
      </main>
    </div>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WorkspaceShellComponent, { className: "WorkspaceShellComponent", filePath: "src/app/shared/shells/workspace-shell/workspace-shell.component.ts", lineNumber: 36 });
})();

// src/app/features/shell-demos/pages/workspace-demo-shell.page.ts
var _WorkspaceDemoShellPage = class _WorkspaceDemoShellPage {
};
_WorkspaceDemoShellPage.\u0275fac = function WorkspaceDemoShellPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _WorkspaceDemoShellPage)();
};
_WorkspaceDemoShellPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WorkspaceDemoShellPage, selectors: [["app-workspace-demo-shell-page"]], decls: 1, vars: 0, template: function WorkspaceDemoShellPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-workspace-shell");
  }
}, dependencies: [WorkspaceShellComponent], encapsulation: 2, changeDetection: 0 });
var WorkspaceDemoShellPage = _WorkspaceDemoShellPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WorkspaceDemoShellPage, [{
    type: Component,
    args: [{
      selector: "app-workspace-demo-shell-page",
      standalone: true,
      imports: [WorkspaceShellComponent],
      template: `<app-workspace-shell />`,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WorkspaceDemoShellPage, { className: "WorkspaceDemoShellPage", filePath: "src/app/features/shell-demos/pages/workspace-demo-shell.page.ts", lineNumber: 11 });
})();
export {
  WorkspaceDemoShellPage
};
//# sourceMappingURL=chunk-D66AKQUX.js.map
