import {
  Select,
  SelectModule
} from "./chunk-6XBRKP3U.js";
import {
  AppIconButtonComponent
} from "./chunk-IN6YF4N5.js";
import {
  AppPageHeaderComponent
} from "./chunk-VWZ6ILE3.js";
import {
  DesignTokenService,
  LayoutPreferenceService
} from "./chunk-QYDCMUDJ.js";
import "./chunk-6FGTUABS.js";
import "./chunk-XJGTUOEY.js";
import "./chunk-DVT5PDPC.js";
import {
  ProjectConfigService
} from "./chunk-MUAKPLNK.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-MIX2WWC3.js";
import {
  AppButtonComponent
} from "./chunk-2BI5IW7M.js";
import "./chunk-TARWWEIZ.js";
import "./chunk-YGQPX75J.js";
import "./chunk-TI7NITK6.js";
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-GI7FX4Z4.js";
import "./chunk-WDMUDEB6.js";

// src/app/shared/ui/design-token-panel/design-token-panel.component.ts
var _DesignTokenPanelComponent = class _DesignTokenPanelComponent {
  constructor() {
    this.tokens = inject(DesignTokenService);
    this.colorSchemeOptions = [
      { label: "Light", value: "light" },
      { label: "Dark", value: "dark" }
    ];
    this.themeOptions = [
      { label: "HSL", value: "hsl" },
      { label: "Blue", value: "blue" },
      { label: "Emerald", value: "emerald" },
      { label: "Violet", value: "violet" }
    ];
    this.radiusOptions = [
      { label: "Sharp", value: "sharp" },
      { label: "Soft", value: "soft" },
      { label: "Round", value: "round" }
    ];
    this.gradientOptions = [
      { label: "None", value: "none" },
      { label: "Brand", value: "brand" },
      { label: "Sunrise", value: "sunrise" },
      { label: "Aurora", value: "aurora" }
    ];
    this.densityOptions = [
      { label: "Compact", value: "compact" },
      { label: "Comfortable", value: "comfortable" },
      { label: "Spacious", value: "spacious" }
    ];
  }
};
_DesignTokenPanelComponent.\u0275fac = function DesignTokenPanelComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DesignTokenPanelComponent)();
};
_DesignTokenPanelComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DesignTokenPanelComponent, selectors: [["app-design-token-panel"]], decls: 8, vars: 10, consts: [["aria-label", "Design tokens", 1, "fast-token-panel"], ["aria-hidden", "true", 1, "fast-radius-preview"], ["optionLabel", "label", "optionValue", "value", "ariaLabel", "Mode", "styleClass", "w-32", 3, "ngModelChange", "options", "ngModel"], ["optionLabel", "label", "optionValue", "value", "ariaLabel", "Theme", "styleClass", "w-32", 3, "ngModelChange", "options", "ngModel"], ["optionLabel", "label", "optionValue", "value", "ariaLabel", "Radius", "styleClass", "w-32", 3, "ngModelChange", "options", "ngModel"], ["optionLabel", "label", "optionValue", "value", "ariaLabel", "Gradient", "styleClass", "w-36", 3, "ngModelChange", "options", "ngModel"], ["optionLabel", "label", "optionValue", "value", "ariaLabel", "Density", "styleClass", "w-36", 3, "ngModelChange", "options", "ngModel"], ["label", "Reset design tokens", "icon", "pi pi-undo", "intent", "secondary", 3, "clicked"]], template: function DesignTokenPanelComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 0);
    \u0275\u0275element(1, "div", 1);
    \u0275\u0275elementStart(2, "p-select", 2);
    \u0275\u0275listener("ngModelChange", function DesignTokenPanelComponent_Template_p_select_ngModelChange_2_listener($event) {
      return ctx.tokens.setColorScheme($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p-select", 3);
    \u0275\u0275listener("ngModelChange", function DesignTokenPanelComponent_Template_p_select_ngModelChange_3_listener($event) {
      return ctx.tokens.setTheme($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p-select", 4);
    \u0275\u0275listener("ngModelChange", function DesignTokenPanelComponent_Template_p_select_ngModelChange_4_listener($event) {
      return ctx.tokens.setRadius($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p-select", 5);
    \u0275\u0275listener("ngModelChange", function DesignTokenPanelComponent_Template_p_select_ngModelChange_5_listener($event) {
      return ctx.tokens.setGradient($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p-select", 6);
    \u0275\u0275listener("ngModelChange", function DesignTokenPanelComponent_Template_p_select_ngModelChange_6_listener($event) {
      return ctx.tokens.setDensity($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "app-icon-button", 7);
    \u0275\u0275listener("clicked", function DesignTokenPanelComponent_Template_app_icon_button_clicked_7_listener() {
      return ctx.tokens.reset();
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("options", ctx.colorSchemeOptions)("ngModel", ctx.tokens.colorScheme());
    \u0275\u0275advance();
    \u0275\u0275property("options", ctx.themeOptions)("ngModel", ctx.tokens.theme());
    \u0275\u0275advance();
    \u0275\u0275property("options", ctx.radiusOptions)("ngModel", ctx.tokens.radius());
    \u0275\u0275advance();
    \u0275\u0275property("options", ctx.gradientOptions)("ngModel", ctx.tokens.gradient());
    \u0275\u0275advance();
    \u0275\u0275property("options", ctx.densityOptions)("ngModel", ctx.tokens.density());
  }
}, dependencies: [FormsModule, NgControlStatus, NgModel, SelectModule, Select, AppIconButtonComponent], encapsulation: 2, changeDetection: 0 });
var DesignTokenPanelComponent = _DesignTokenPanelComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DesignTokenPanelComponent, [{
    type: Component,
    args: [{
      selector: "app-design-token-panel",
      standalone: true,
      imports: [FormsModule, SelectModule, AppIconButtonComponent],
      template: `
    <section class="fast-token-panel" aria-label="Design tokens">
      <div class="fast-radius-preview" aria-hidden="true"></div>

      <p-select
        [options]="colorSchemeOptions"
        optionLabel="label"
        optionValue="value"
        [ngModel]="tokens.colorScheme()"
        (ngModelChange)="tokens.setColorScheme($event)"
        ariaLabel="Mode"
        styleClass="w-32"
      />

      <p-select
        [options]="themeOptions"
        optionLabel="label"
        optionValue="value"
        [ngModel]="tokens.theme()"
        (ngModelChange)="tokens.setTheme($event)"
        ariaLabel="Theme"
        styleClass="w-32"
      />

      <p-select
        [options]="radiusOptions"
        optionLabel="label"
        optionValue="value"
        [ngModel]="tokens.radius()"
        (ngModelChange)="tokens.setRadius($event)"
        ariaLabel="Radius"
        styleClass="w-32"
      />

      <p-select
        [options]="gradientOptions"
        optionLabel="label"
        optionValue="value"
        [ngModel]="tokens.gradient()"
        (ngModelChange)="tokens.setGradient($event)"
        ariaLabel="Gradient"
        styleClass="w-36"
      />

      <p-select
        [options]="densityOptions"
        optionLabel="label"
        optionValue="value"
        [ngModel]="tokens.density()"
        (ngModelChange)="tokens.setDensity($event)"
        ariaLabel="Density"
        styleClass="w-36"
      />

      <app-icon-button label="Reset design tokens" icon="pi pi-undo" intent="secondary" (clicked)="tokens.reset()" />
    </section>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DesignTokenPanelComponent, { className: "DesignTokenPanelComponent", filePath: "src/app/shared/ui/design-token-panel/design-token-panel.component.ts", lineNumber: 82 });
})();

// src/app/features/settings/pages/settings.page.ts
var _forTrack0 = ($index, $item) => $item.label;
function SettingsPage_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "dt", 13);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "dd", 15);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const token_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(token_r1.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(token_r1.value);
  }
}
function SettingsPage_For_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "code", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const className_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(className_r2);
  }
}
var _SettingsPage = class _SettingsPage {
  constructor() {
    this.project = inject(ProjectConfigService);
    this.tokens = inject(DesignTokenService);
    this.layout = inject(LayoutPreferenceService);
    this.brand = computed(() => this.project.brand(), ...ngDevMode ? [{ debugName: "brand" }] : []);
    this.table = computed(() => this.project.table(), ...ngDevMode ? [{ debugName: "table" }] : []);
    this.workspaceName = computed(() => this.project.workspaceName(), ...ngDevMode ? [{ debugName: "workspaceName" }] : []);
    this.activeTokens = computed(() => [
      { label: "Mode", value: this.tokens.colorScheme() },
      { label: "Theme", value: this.tokens.theme() },
      { label: "Radius", value: this.tokens.radius() },
      { label: "Gradient", value: this.tokens.gradient() },
      { label: "Density", value: this.tokens.density() }
    ], ...ngDevMode ? [{ debugName: "activeTokens" }] : []);
    this.sidebarCollapsed = computed(() => this.layout.sidebarCollapsed(), ...ngDevMode ? [{ debugName: "sidebarCollapsed" }] : []);
    this.tokenClasses = [
      "fast-panel",
      "fast-muted-panel",
      "fast-page",
      "fast-brand-mark",
      "fast-gradient-text",
      "fast-gradient-surface",
      "fast-shell-layout",
      "fast-shell-content",
      "fast-shell-main",
      "fast-nav-link",
      "fast-nav-link-active",
      "fast-topbar",
      "fast-shell-panel",
      "fast-border-b",
      "fast-filter-bar",
      "fast-filter-control"
    ];
  }
};
_SettingsPage.\u0275fac = function SettingsPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SettingsPage)();
};
_SettingsPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SettingsPage, selectors: [["app-settings-page"]], decls: 82, vars: 10, consts: [["title", "Settings", "description", "Default framework settings for branding, tokens, and table behavior."], [1, "grid", "gap-6", "xl:grid-cols-[1fr_22rem]"], [1, "grid", "gap-6"], [1, "fast-panel", "p-5"], [1, "flex", "flex-wrap", "items-start", "justify-between", "gap-4"], [1, "text-lg", "font-semibold", "text-color"], [1, "mt-1", "text-sm", "text-muted-color"], ["aria-hidden", "true", 1, "fast-radius-preview"], [1, "mt-5"], [1, "mt-6", "grid", "gap-3", "md:grid-cols-2", "xl:grid-cols-4"], [1, "fast-muted-panel", "p-3"], ["intent", "secondary", 3, "clicked", "label", "icon"], [1, "mt-6", "grid", "gap-3", "md:grid-cols-2"], [1, "text-xs", "uppercase", "text-muted-color"], [1, "mt-1", "font-medium", "text-color"], [1, "mt-1", "font-medium", "capitalize", "text-color"], [1, "mt-4", "grid", "gap-2", "sm:grid-cols-2", "xl:grid-cols-3"], [1, "fast-muted-panel", "px-3", "py-2", "text-sm", "text-muted-color"], [1, "mt-4", "grid", "gap-3", "text-sm"]], template: function SettingsPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-page-header", 0);
    \u0275\u0275elementStart(1, "section", 1)(2, "div", 2)(3, "article", 3)(4, "div", 4)(5, "div")(6, "h2", 5);
    \u0275\u0275text(7, "Design Tokens");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 6);
    \u0275\u0275text(9, " Change theme, radius, gradient, and density from one section. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(10, "div", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 8);
    \u0275\u0275element(12, "app-design-token-panel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "dl", 9);
    \u0275\u0275repeaterCreate(14, SettingsPage_For_15_Template, 5, 2, "div", 10, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "article", 3)(17, "div", 4)(18, "div")(19, "h2", 5);
    \u0275\u0275text(20, "Layout Preferences");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "p", 6);
    \u0275\u0275text(22, " Collapse the sidebar when you need more working space on smaller monitors. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "app-button", 11);
    \u0275\u0275listener("clicked", function SettingsPage_Template_app_button_clicked_23_listener() {
      return ctx.layout.toggleSidebar();
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "dl", 12)(25, "div", 10)(26, "dt", 13);
    \u0275\u0275text(27, "Sidebar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "dd", 14);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 10)(31, "dt", 13);
    \u0275\u0275text(32, "Mode");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "dd", 15);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(35, "article", 3)(36, "h2", 5);
    \u0275\u0275text(37, "Token Classes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "p", 6);
    \u0275\u0275text(39, " Use these classes instead of repeating hard-coded border radius, card, gradient, and spacing styles. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 16);
    \u0275\u0275repeaterCreate(41, SettingsPage_For_42_Template, 2, 1, "code", 17, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(43, "aside", 2)(44, "article", 3)(45, "h2", 5);
    \u0275\u0275text(46, "Project Config");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "dl", 18)(48, "div", 10)(49, "dt", 13);
    \u0275\u0275text(50, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "dd", 14);
    \u0275\u0275text(52);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "div", 10)(54, "dt", 13);
    \u0275\u0275text(55, "Logo mark");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "dd", 14);
    \u0275\u0275text(57);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "div", 10)(59, "dt", 13);
    \u0275\u0275text(60, "Workspace");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "dd", 14);
    \u0275\u0275text(62);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(63, "article", 3)(64, "h2", 5);
    \u0275\u0275text(65, "Table Defaults");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "dl", 18)(67, "div", 10)(68, "dt", 13);
    \u0275\u0275text(69, "Density");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "dd", 15);
    \u0275\u0275text(71);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(72, "div", 10)(73, "dt", 13);
    \u0275\u0275text(74, "Page size");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "dd", 14);
    \u0275\u0275text(76);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(77, "div", 10)(78, "dt", 13);
    \u0275\u0275text(79, "Options");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "dd", 14);
    \u0275\u0275text(81);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(14);
    \u0275\u0275repeater(ctx.activeTokens());
    \u0275\u0275advance(9);
    \u0275\u0275property("label", ctx.sidebarCollapsed() ? "Expand sidebar" : "Collapse sidebar")("icon", ctx.sidebarCollapsed() ? "pi pi-angle-double-right" : "pi pi-angle-double-left");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx.sidebarCollapsed() ? "Collapsed" : "Expanded");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx.tokens.colorScheme());
    \u0275\u0275advance(7);
    \u0275\u0275repeater(ctx.tokenClasses);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx.brand().name);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx.brand().logoText);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx.workspaceName());
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx.table().size);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx.table().defaultPageSize);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx.table().pageSizeOptions.join(", "));
  }
}, dependencies: [AppPageHeaderComponent, DesignTokenPanelComponent, AppButtonComponent], encapsulation: 2, changeDetection: 0 });
var SettingsPage = _SettingsPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SettingsPage, [{
    type: Component,
    args: [{
      selector: "app-settings-page",
      standalone: true,
      imports: [AppPageHeaderComponent, DesignTokenPanelComponent, AppButtonComponent],
      template: `
    <app-page-header title="Settings" description="Default framework settings for branding, tokens, and table behavior." />

    <section class="grid gap-6 xl:grid-cols-[1fr_22rem]">
      <div class="grid gap-6">
        <article class="fast-panel p-5">
          <div class="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h2 class="text-lg font-semibold text-color">Design Tokens</h2>
              <p class="mt-1 text-sm text-muted-color">
                Change theme, radius, gradient, and density from one section.
              </p>
            </div>
            <div class="fast-radius-preview" aria-hidden="true"></div>
          </div>

          <div class="mt-5">
            <app-design-token-panel />
          </div>

          <dl class="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            @for (token of activeTokens(); track token.label) {
              <div class="fast-muted-panel p-3">
                <dt class="text-xs uppercase text-muted-color">{{ token.label }}</dt>
                <dd class="mt-1 font-medium capitalize text-color">{{ token.value }}</dd>
              </div>
            }
          </dl>
        </article>

        <article class="fast-panel p-5">
          <div class="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h2 class="text-lg font-semibold text-color">Layout Preferences</h2>
              <p class="mt-1 text-sm text-muted-color">
                Collapse the sidebar when you need more working space on smaller monitors.
              </p>
            </div>

            <app-button
              [label]="sidebarCollapsed() ? 'Expand sidebar' : 'Collapse sidebar'"
              [icon]="sidebarCollapsed() ? 'pi pi-angle-double-right' : 'pi pi-angle-double-left'"
              intent="secondary"
              (clicked)="layout.toggleSidebar()"
            />
          </div>

          <dl class="mt-6 grid gap-3 md:grid-cols-2">
            <div class="fast-muted-panel p-3">
              <dt class="text-xs uppercase text-muted-color">Sidebar</dt>
              <dd class="mt-1 font-medium text-color">{{ sidebarCollapsed() ? 'Collapsed' : 'Expanded' }}</dd>
            </div>
            <div class="fast-muted-panel p-3">
              <dt class="text-xs uppercase text-muted-color">Mode</dt>
              <dd class="mt-1 font-medium capitalize text-color">{{ tokens.colorScheme() }}</dd>
            </div>
          </dl>
        </article>

        <article class="fast-panel p-5">
          <h2 class="text-lg font-semibold text-color">Token Classes</h2>
          <p class="mt-1 text-sm text-muted-color">
            Use these classes instead of repeating hard-coded border radius, card, gradient, and spacing styles.
          </p>

          <div class="mt-4 grid gap-2 sm:grid-cols-2 xl:grid-cols-3">
            @for (className of tokenClasses; track className) {
              <code class="fast-muted-panel px-3 py-2 text-sm text-muted-color">{{ className }}</code>
            }
          </div>
        </article>
      </div>

      <aside class="grid gap-6">
        <article class="fast-panel p-5">
          <h2 class="text-lg font-semibold text-color">Project Config</h2>
          <dl class="mt-4 grid gap-3 text-sm">
            <div class="fast-muted-panel p-3">
              <dt class="text-xs uppercase text-muted-color">Name</dt>
              <dd class="mt-1 font-medium text-color">{{ brand().name }}</dd>
            </div>
            <div class="fast-muted-panel p-3">
              <dt class="text-xs uppercase text-muted-color">Logo mark</dt>
              <dd class="mt-1 font-medium text-color">{{ brand().logoText }}</dd>
            </div>
            <div class="fast-muted-panel p-3">
              <dt class="text-xs uppercase text-muted-color">Workspace</dt>
              <dd class="mt-1 font-medium text-color">{{ workspaceName() }}</dd>
            </div>
          </dl>
        </article>

        <article class="fast-panel p-5">
          <h2 class="text-lg font-semibold text-color">Table Defaults</h2>
          <dl class="mt-4 grid gap-3 text-sm">
            <div class="fast-muted-panel p-3">
              <dt class="text-xs uppercase text-muted-color">Density</dt>
              <dd class="mt-1 font-medium capitalize text-color">{{ table().size }}</dd>
            </div>
            <div class="fast-muted-panel p-3">
              <dt class="text-xs uppercase text-muted-color">Page size</dt>
              <dd class="mt-1 font-medium text-color">{{ table().defaultPageSize }}</dd>
            </div>
            <div class="fast-muted-panel p-3">
              <dt class="text-xs uppercase text-muted-color">Options</dt>
              <dd class="mt-1 font-medium text-color">{{ table().pageSizeOptions.join(', ') }}</dd>
            </div>
          </dl>
        </article>
      </aside>
    </section>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SettingsPage, { className: "SettingsPage", filePath: "src/app/features/settings/pages/settings.page.ts", lineNumber: 127 });
})();
export {
  SettingsPage
};
//# sourceMappingURL=chunk-BTGHAHZ3.js.map
