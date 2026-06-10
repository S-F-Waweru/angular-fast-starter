import {
  AppIconButtonComponent,
  Tooltip,
  TooltipModule
} from "./chunk-IN6YF4N5.js";
import {
  DesignTokenService,
  LayoutPreferenceService
} from "./chunk-QYDCMUDJ.js";
import "./chunk-XJGTUOEY.js";
import {
  ProjectConfigService
} from "./chunk-MUAKPLNK.js";
import {
  AuthStore
} from "./chunk-A6FJEO5U.js";
import "./chunk-TARWWEIZ.js";
import "./chunk-YGQPX75J.js";
import {
  RouterLink,
  RouterLinkActive,
  RouterOutlet
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
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-GI7FX4Z4.js";
import "./chunk-WDMUDEB6.js";

// src/app/shared/shells/app-shell/app-shell.component.ts
var _forTrack0 = ($index, $item) => $item.route;
function AppShellComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.brand().name);
  }
}
function AppShellComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-icon-button", 24);
    \u0275\u0275listener("clicked", function AppShellComponent_Conditional_8_Template_app_icon_button_clicked_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.layout.toggleSidebar());
    });
    \u0275\u0275elementEnd();
  }
}
function AppShellComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "app-icon-button", 25);
    \u0275\u0275listener("clicked", function AppShellComponent_Conditional_9_Template_app_icon_button_clicked_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.layout.toggleSidebar());
    });
    \u0275\u0275elementEnd()();
  }
}
function AppShellComponent_For_12_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r4.label);
  }
}
function AppShellComponent_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 26);
    \u0275\u0275element(1, "i");
    \u0275\u0275conditionalCreate(2, AppShellComponent_For_12_Conditional_2_Template, 2, 1, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("justify-center", ctx_r0.sidebarCollapsed());
    \u0275\u0275property("routerLink", item_r4.route)("pTooltip", ctx_r0.sidebarCollapsed() ? item_r4.label : "");
    \u0275\u0275attribute("aria-label", ctx_r0.sidebarCollapsed() ? item_r4.label : null);
    \u0275\u0275advance();
    \u0275\u0275classMap(item_r4.icon);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.sidebarCollapsed() ? 2 : -1);
  }
}
function AppShellComponent_For_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 22);
    \u0275\u0275element(1, "i");
    \u0275\u0275elementStart(2, "span", 27);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    \u0275\u0275property("routerLink", item_r5.route);
    \u0275\u0275advance();
    \u0275\u0275classMap(item_r5.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r5.label);
  }
}
var _AppShellComponent = class _AppShellComponent {
  constructor() {
    this.auth = inject(AuthStore);
    this.project = inject(ProjectConfigService);
    this.designTokens = inject(DesignTokenService);
    this.layout = inject(LayoutPreferenceService);
    this.displayName = computed(() => this.auth.displayName(), ...ngDevMode ? [{ debugName: "displayName" }] : []);
    this.brand = computed(() => this.project.brand(), ...ngDevMode ? [{ debugName: "brand" }] : []);
    this.navigation = computed(() => this.project.navigation(), ...ngDevMode ? [{ debugName: "navigation" }] : []);
    this.workspaceName = computed(() => this.project.workspaceName(), ...ngDevMode ? [{ debugName: "workspaceName" }] : []);
    this.colorScheme = computed(() => this.designTokens.colorScheme(), ...ngDevMode ? [{ debugName: "colorScheme" }] : []);
    this.sidebarCollapsed = computed(() => this.layout.sidebarCollapsed(), ...ngDevMode ? [{ debugName: "sidebarCollapsed" }] : []);
  }
};
_AppShellComponent.\u0275fac = function AppShellComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AppShellComponent)();
};
_AppShellComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppShellComponent, selectors: [["app-shell"]], decls: 32, vars: 12, consts: [[1, "fast-app-bg", "fast-shell-grid", "fast-shell-layout", "grid"], [1, "fast-sidebar", "hidden", "lg:block"], [1, "fast-sidebar-header", "px-5", "py-4"], [1, "flex", "items-center", "justify-between", "gap-2"], ["routerLink", "/app/dashboard", "tooltipPosition", "right", 1, "flex", "min-w-0", "items-center", "gap-2", "font-semibold", 3, "pTooltip"], [1, "fast-brand-mark", "shrink-0"], [1, "truncate"], ["label", "Collapse sidebar", "icon", "pi pi-angle-double-left", "intent", "ghost"], [1, "mt-3", "flex", "justify-center"], [1, "grid", "gap-1", "p-3"], ["routerLinkActive", "fast-nav-link-active", "tooltipPosition", "right", 1, "fast-nav-link", 3, "routerLink", "justify-center", "pTooltip"], [1, "fast-shell-content"], [1, "fast-topbar", "z-10", "shrink-0", "px-4", "py-3", "lg:px-6"], [1, "flex", "flex-wrap", "items-center", "justify-between", "gap-4"], [1, "min-w-0"], [1, "text-sm", "font-medium", "text-color"], [1, "truncate", "text-xs", "text-muted-color"], [1, "flex", "flex-wrap", "items-center", "gap-3"], ["intent", "secondary", 3, "clicked", "label", "icon"], ["routerLink", "/app/settings", 1, "fast-shell-link", "text-sm", "font-medium"], ["routerLink", "/", 1, "fast-shell-link", "text-sm", "font-medium"], [1, "mt-3", "grid", "grid-cols-2", "gap-2", "sm:grid-cols-4", "lg:hidden"], ["routerLinkActive", "fast-nav-link-active", 1, "fast-nav-link", "justify-center", 3, "routerLink"], [1, "fast-page", "fast-shell-main"], ["label", "Collapse sidebar", "icon", "pi pi-angle-double-left", "intent", "ghost", 3, "clicked"], ["label", "Expand sidebar", "icon", "pi pi-angle-double-right", "intent", "ghost", 3, "clicked"], ["routerLinkActive", "fast-nav-link-active", "tooltipPosition", "right", 1, "fast-nav-link", 3, "routerLink", "pTooltip"], [1, "hidden", "sm:inline"]], template: function AppShellComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "aside", 1)(2, "div", 2)(3, "div", 3)(4, "a", 4)(5, "span", 5);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, AppShellComponent_Conditional_7_Template, 2, 1, "span", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, AppShellComponent_Conditional_8_Template, 1, 0, "app-icon-button", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(9, AppShellComponent_Conditional_9_Template, 2, 0, "div", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "nav", 9);
    \u0275\u0275repeaterCreate(11, AppShellComponent_For_12_Template, 3, 8, "a", 10, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 11)(14, "header", 12)(15, "div", 13)(16, "div", 14)(17, "p", 15);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "p", 16);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 17)(22, "app-icon-button", 18);
    \u0275\u0275listener("clicked", function AppShellComponent_Template_app_icon_button_clicked_22_listener() {
      return ctx.designTokens.toggleColorScheme();
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "a", 19);
    \u0275\u0275text(24, "Settings");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "a", 20);
    \u0275\u0275text(26, "Public site");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "nav", 21);
    \u0275\u0275repeaterCreate(28, AppShellComponent_For_29_Template, 4, 4, "a", 22, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "main", 23);
    \u0275\u0275element(31, "router-outlet");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275classProp("justify-center", ctx.sidebarCollapsed());
    \u0275\u0275property("pTooltip", ctx.sidebarCollapsed() ? ctx.brand().name : "");
    \u0275\u0275attribute("aria-label", ctx.sidebarCollapsed() ? ctx.brand().name : null);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.brand().logoText);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.sidebarCollapsed() ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.sidebarCollapsed() ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.sidebarCollapsed() ? 9 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx.navigation());
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx.displayName());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.workspaceName());
    \u0275\u0275advance(2);
    \u0275\u0275property("label", ctx.colorScheme() === "dark" ? "Use light mode" : "Use dark mode")("icon", ctx.colorScheme() === "dark" ? "pi pi-sun" : "pi pi-moon");
    \u0275\u0275advance(6);
    \u0275\u0275repeater(ctx.navigation());
  }
}, dependencies: [RouterLink, RouterLinkActive, RouterOutlet, TooltipModule, Tooltip, AppIconButtonComponent], encapsulation: 2, changeDetection: 0 });
var AppShellComponent = _AppShellComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppShellComponent, [{
    type: Component,
    args: [{
      selector: "app-shell",
      standalone: true,
      imports: [RouterLink, RouterLinkActive, RouterOutlet, TooltipModule, AppIconButtonComponent],
      template: `
    <div class="fast-app-bg fast-shell-grid fast-shell-layout grid">
      <aside class="fast-sidebar hidden lg:block">
        <div class="fast-sidebar-header px-5 py-4">
          <div class="flex items-center justify-between gap-2">
            <a
              routerLink="/app/dashboard"
              class="flex min-w-0 items-center gap-2 font-semibold"
              [class.justify-center]="sidebarCollapsed()"
              [pTooltip]="sidebarCollapsed() ? brand().name : ''"
              [attr.aria-label]="sidebarCollapsed() ? brand().name : null"
              tooltipPosition="right"
            >
              <span class="fast-brand-mark shrink-0">{{ brand().logoText }}</span>
              @if (!sidebarCollapsed()) {
                <span class="truncate">{{ brand().name }}</span>
              }
            </a>

            @if (!sidebarCollapsed()) {
              <app-icon-button
                label="Collapse sidebar"
                icon="pi pi-angle-double-left"
                intent="ghost"
                (clicked)="layout.toggleSidebar()"
              />
            }
          </div>

          @if (sidebarCollapsed()) {
            <div class="mt-3 flex justify-center">
              <app-icon-button
                label="Expand sidebar"
                icon="pi pi-angle-double-right"
                intent="ghost"
                (clicked)="layout.toggleSidebar()"
              />
            </div>
          }
        </div>

        <nav class="grid gap-1 p-3">
          @for (item of navigation(); track item.route) {
            <a
              [routerLink]="item.route"
              routerLinkActive="fast-nav-link-active"
              class="fast-nav-link"
              [class.justify-center]="sidebarCollapsed()"
              [pTooltip]="sidebarCollapsed() ? item.label : ''"
              [attr.aria-label]="sidebarCollapsed() ? item.label : null"
              tooltipPosition="right"
            >
              <i [class]="item.icon"></i>
              @if (!sidebarCollapsed()) {
                <span>{{ item.label }}</span>
              }
            </a>
          }
        </nav>
      </aside>

      <div class="fast-shell-content">
        <header class="fast-topbar z-10 shrink-0 px-4 py-3 lg:px-6">
          <div class="flex flex-wrap items-center justify-between gap-4">
            <div class="min-w-0">
              <p class="text-sm font-medium text-color">{{ displayName() }}</p>
              <p class="truncate text-xs text-muted-color">{{ workspaceName() }}</p>
            </div>

            <div class="flex flex-wrap items-center gap-3">
              <app-icon-button
                [label]="colorScheme() === 'dark' ? 'Use light mode' : 'Use dark mode'"
                [icon]="colorScheme() === 'dark' ? 'pi pi-sun' : 'pi pi-moon'"
                intent="secondary"
                (clicked)="designTokens.toggleColorScheme()"
              />
              <a routerLink="/app/settings" class="fast-shell-link text-sm font-medium">Settings</a>
              <a routerLink="/" class="fast-shell-link text-sm font-medium">Public site</a>
            </div>
          </div>

          <nav class="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4 lg:hidden">
            @for (item of navigation(); track item.route) {
              <a
                [routerLink]="item.route"
                routerLinkActive="fast-nav-link-active"
                class="fast-nav-link justify-center"
              >
                <i [class]="item.icon"></i>
                <span class="hidden sm:inline">{{ item.label }}</span>
              </a>
            }
          </nav>
        </header>

        <main class="fast-page fast-shell-main">
          <router-outlet />
        </main>
      </div>
    </div>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppShellComponent, { className: "AppShellComponent", filePath: "src/app/shared/shells/app-shell/app-shell.component.ts", lineNumber: 117 });
})();
export {
  AppShellComponent
};
//# sourceMappingURL=chunk-RLFZ6VQZ.js.map
