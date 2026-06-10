import {
  AppPageHeaderComponent
} from "./chunk-VWZ6ILE3.js";
import {
  RouterLink,
  RouterLinkActive,
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
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-GI7FX4Z4.js";
import "./chunk-WDMUDEB6.js";

// src/app/shared/shells/detail-shell/detail-shell.component.ts
var _forTrack0 = ($index, $item) => $item.route;
function DetailShellComponent_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275property("routerLink", item_r1.route);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r1.label, " ");
  }
}
var _DetailShellComponent = class _DetailShellComponent {
  constructor() {
    this.title = input("Detail", ...ngDevMode ? [{ debugName: "title" }] : []);
    this.description = input(...ngDevMode ? [void 0, { debugName: "description" }] : []);
    this.navItems = input([], ...ngDevMode ? [{ debugName: "navItems" }] : []);
  }
};
_DetailShellComponent.\u0275fac = function DetailShellComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DetailShellComponent)();
};
_DetailShellComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DetailShellComponent, selectors: [["app-detail-shell"]], inputs: { title: [1, "title"], description: [1, "description"], navItems: [1, "navItems"] }, decls: 8, vars: 2, consts: [[3, "title", "description"], [1, "grid", "gap-6", "lg:grid-cols-[14rem_1fr]"], [1, "fast-panel", "grid", "gap-1", "p-2"], ["routerLinkActive", "fast-nav-link-active", 1, "fast-nav-link", 3, "routerLink"], [1, "min-w-0"]], template: function DetailShellComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-page-header", 0);
    \u0275\u0275elementStart(1, "div", 1)(2, "aside")(3, "nav", 2);
    \u0275\u0275repeaterCreate(4, DetailShellComponent_For_5_Template, 2, 2, "a", 3, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "section", 4);
    \u0275\u0275element(7, "router-outlet");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("title", ctx.title())("description", ctx.description());
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx.navItems());
  }
}, dependencies: [RouterLink, RouterLinkActive, RouterOutlet, AppPageHeaderComponent], encapsulation: 2, changeDetection: 0 });
var DetailShellComponent = _DetailShellComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DetailShellComponent, [{
    type: Component,
    args: [{
      selector: "app-detail-shell",
      standalone: true,
      imports: [RouterLink, RouterLinkActive, RouterOutlet, AppPageHeaderComponent],
      template: `
    <app-page-header [title]="title()" [description]="description()" />

    <div class="grid gap-6 lg:grid-cols-[14rem_1fr]">
      <aside>
        <nav class="fast-panel grid gap-1 p-2">
          @for (item of navItems(); track item.route) {
            <a
              [routerLink]="item.route"
              routerLinkActive="fast-nav-link-active"
              class="fast-nav-link"
            >
              {{ item.label }}
            </a>
          }
        </nav>
      </aside>

      <section class="min-w-0">
        <router-outlet />
      </section>
    </div>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, { title: [{ type: Input, args: [{ isSignal: true, alias: "title", required: false }] }], description: [{ type: Input, args: [{ isSignal: true, alias: "description", required: false }] }], navItems: [{ type: Input, args: [{ isSignal: true, alias: "navItems", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DetailShellComponent, { className: "DetailShellComponent", filePath: "src/app/shared/shells/detail-shell/detail-shell.component.ts", lineNumber: 39 });
})();

// src/app/features/shell-demos/pages/detail-demo-shell.page.ts
var _DetailDemoShellPage = class _DetailDemoShellPage {
  constructor() {
    this.navItems = [
      { label: "Overview", route: "./overview" },
      { label: "Activity", route: "./activity" },
      { label: "Billing", route: "./billing" }
    ];
  }
};
_DetailDemoShellPage.\u0275fac = function DetailDemoShellPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DetailDemoShellPage)();
};
_DetailDemoShellPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DetailDemoShellPage, selectors: [["app-detail-demo-shell-page"]], decls: 1, vars: 1, consts: [["title", "Account Detail", "description", "A focused record workspace with local navigation.", 3, "navItems"]], template: function DetailDemoShellPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-detail-shell", 0);
  }
  if (rf & 2) {
    \u0275\u0275property("navItems", ctx.navItems);
  }
}, dependencies: [DetailShellComponent], encapsulation: 2, changeDetection: 0 });
var DetailDemoShellPage = _DetailDemoShellPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DetailDemoShellPage, [{
    type: Component,
    args: [{
      selector: "app-detail-demo-shell-page",
      standalone: true,
      imports: [DetailShellComponent],
      template: `
    <app-detail-shell
      title="Account Detail"
      description="A focused record workspace with local navigation."
      [navItems]="navItems"
    />
  `,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DetailDemoShellPage, { className: "DetailDemoShellPage", filePath: "src/app/features/shell-demos/pages/detail-demo-shell.page.ts", lineNumber: 17 });
})();
export {
  DetailDemoShellPage
};
//# sourceMappingURL=chunk-65DL2EJC.js.map
