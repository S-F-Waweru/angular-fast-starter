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
  ɵɵrepeaterTrackByIdentity,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-GI7FX4Z4.js";
import "./chunk-WDMUDEB6.js";

// src/app/features/shell-demos/pages/workspace-demo-content.page.ts
var _forTrack0 = ($index, $item) => $item.label;
function WorkspaceDemoOverviewPage_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "article", 4)(1, "p", 8);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "p", 9);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const stat_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stat_r1.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stat_r1.value);
  }
}
function WorkspaceDemoOverviewPage_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 7)(1, "span", 10);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span", 11);
    \u0275\u0275text(4, "Open");
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2);
  }
}
var _forTrack1 = ($index, $item) => $item.email;
function WorkspaceDemoMembersPage_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 4)(1, "div", 5)(2, "p", 6);
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "p", 7);
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(6, "span", 8);
    \u0275\u0275text(7);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const member_r1 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(member_r1.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(member_r1.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(member_r1.role);
  }
}
function WorkspaceDemoSettingsPage_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 5)(1, "div")(2, "p", 6);
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "p", 7);
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(6, "span", 8);
    \u0275\u0275text(7);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const setting_r1 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(setting_r1.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(setting_r1.description);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(setting_r1.value);
  }
}
var workspaceStats = [
  { label: "Active projects", value: "12" },
  { label: "Open reviews", value: "7" },
  { label: "SLA risk", value: "2" }
];
var _WorkspaceDemoOverviewPage = class _WorkspaceDemoOverviewPage {
  constructor() {
    this.stats = workspaceStats;
    this.queue = ["Renewal accounts", "Implementation review", "Data quality pass"];
  }
};
_WorkspaceDemoOverviewPage.\u0275fac = function WorkspaceDemoOverviewPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _WorkspaceDemoOverviewPage)();
};
_WorkspaceDemoOverviewPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WorkspaceDemoOverviewPage, selectors: [["app-workspace-demo-overview-page"]], decls: 15, vars: 0, consts: [[1, "grid", "gap-4"], [1, "text-xl", "font-semibold", "text-color"], [1, "mt-1", "text-sm", "text-muted-color"], [1, "grid", "gap-3", "md:grid-cols-3"], [1, "fast-panel", "p-4"], [1, "text-base", "font-semibold", "text-color"], [1, "mt-4", "grid", "gap-2"], [1, "fast-muted-panel", "flex", "items-center", "justify-between", "gap-3", "px-3", "py-2"], [1, "text-sm", "text-muted-color"], [1, "mt-2", "text-2xl", "font-semibold", "text-color"], [1, "text-sm", "text-color"], [1, "text-xs", "font-medium", "text-primary"]], template: function WorkspaceDemoOverviewPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "section", 0)(1, "div")(2, "h1", 1);
    \u0275\u0275text(3, "Workspace overview");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "p", 2);
    \u0275\u0275text(5, "Team-level work, health, and ownership.");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(6, "div", 3);
    \u0275\u0275repeaterCreate(7, WorkspaceDemoOverviewPage_For_8_Template, 5, 2, "article", 4, _forTrack0);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(9, "article", 4)(10, "h2", 5);
    \u0275\u0275text(11, "Operations queue");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(12, "div", 6);
    \u0275\u0275repeaterCreate(13, WorkspaceDemoOverviewPage_For_14_Template, 5, 1, "div", 7, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(7);
    \u0275\u0275repeater(ctx.stats);
    \u0275\u0275advance(6);
    \u0275\u0275repeater(ctx.queue);
  }
}, encapsulation: 2, changeDetection: 0 });
var WorkspaceDemoOverviewPage = _WorkspaceDemoOverviewPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WorkspaceDemoOverviewPage, [{
    type: Component,
    args: [{
      selector: "app-workspace-demo-overview-page",
      standalone: true,
      template: `
    <section class="grid gap-4">
      <div>
        <h1 class="text-xl font-semibold text-color">Workspace overview</h1>
        <p class="mt-1 text-sm text-muted-color">Team-level work, health, and ownership.</p>
      </div>

      <div class="grid gap-3 md:grid-cols-3">
        @for (stat of stats; track stat.label) {
          <article class="fast-panel p-4">
            <p class="text-sm text-muted-color">{{ stat.label }}</p>
            <p class="mt-2 text-2xl font-semibold text-color">{{ stat.value }}</p>
          </article>
        }
      </div>

      <article class="fast-panel p-4">
        <h2 class="text-base font-semibold text-color">Operations queue</h2>
        <div class="mt-4 grid gap-2">
          @for (item of queue; track item) {
            <div class="fast-muted-panel flex items-center justify-between gap-3 px-3 py-2">
              <span class="text-sm text-color">{{ item }}</span>
              <span class="text-xs font-medium text-primary">Open</span>
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WorkspaceDemoOverviewPage, { className: "WorkspaceDemoOverviewPage", filePath: "src/app/features/shell-demos/pages/workspace-demo-content.page.ts", lineNumber: 43 });
})();
var _WorkspaceDemoMembersPage = class _WorkspaceDemoMembersPage {
  constructor() {
    this.members = [
      { name: "Maya Chen", email: "maya@example.com", role: "Owner" },
      { name: "Jon Bell", email: "jon@example.com", role: "Admin" },
      { name: "Amina Stone", email: "amina@example.com", role: "Member" }
    ];
  }
};
_WorkspaceDemoMembersPage.\u0275fac = function WorkspaceDemoMembersPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _WorkspaceDemoMembersPage)();
};
_WorkspaceDemoMembersPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WorkspaceDemoMembersPage, selectors: [["app-workspace-demo-members-page"]], decls: 9, vars: 0, consts: [[1, "grid", "gap-4"], [1, "text-xl", "font-semibold", "text-color"], [1, "mt-1", "text-sm", "text-muted-color"], [1, "fast-panel", "overflow-hidden"], [1, "flex", "items-center", "justify-between", "gap-3", "border-b", "px-4", "py-3", "last:border-b-0", 2, "border-color", "var(--fast-panel-border)"], [1, "min-w-0"], [1, "truncate", "text-sm", "font-medium", "text-color"], [1, "truncate", "text-xs", "text-muted-color"], [1, "text-xs", "font-medium", "text-primary"]], template: function WorkspaceDemoMembersPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "section", 0)(1, "div")(2, "h1", 1);
    \u0275\u0275text(3, "Members");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "p", 2);
    \u0275\u0275text(5, "Compact team list inside the workspace shell.");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(6, "article", 3);
    \u0275\u0275repeaterCreate(7, WorkspaceDemoMembersPage_For_8_Template, 8, 3, "div", 4, _forTrack1);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(7);
    \u0275\u0275repeater(ctx.members);
  }
}, encapsulation: 2, changeDetection: 0 });
var WorkspaceDemoMembersPage = _WorkspaceDemoMembersPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WorkspaceDemoMembersPage, [{
    type: Component,
    args: [{
      selector: "app-workspace-demo-members-page",
      standalone: true,
      template: `
    <section class="grid gap-4">
      <div>
        <h1 class="text-xl font-semibold text-color">Members</h1>
        <p class="mt-1 text-sm text-muted-color">Compact team list inside the workspace shell.</p>
      </div>

      <article class="fast-panel overflow-hidden">
        @for (member of members; track member.email) {
          <div class="flex items-center justify-between gap-3 border-b px-4 py-3 last:border-b-0" style="border-color: var(--fast-panel-border);">
            <div class="min-w-0">
              <p class="truncate text-sm font-medium text-color">{{ member.name }}</p>
              <p class="truncate text-xs text-muted-color">{{ member.email }}</p>
            </div>
            <span class="text-xs font-medium text-primary">{{ member.role }}</span>
          </div>
        }
      </article>
    </section>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WorkspaceDemoMembersPage, { className: "WorkspaceDemoMembersPage", filePath: "src/app/features/shell-demos/pages/workspace-demo-content.page.ts", lineNumber: 73 });
})();
var _WorkspaceDemoSettingsPage = class _WorkspaceDemoSettingsPage {
  constructor() {
    this.settings = [
      { label: "Approval mode", description: "Controls review handoff", value: "Team" },
      { label: "Default density", description: "Applies to workspace tables", value: "Compact" },
      { label: "Notifications", description: "Workspace-level alerts", value: "Enabled" }
    ];
  }
};
_WorkspaceDemoSettingsPage.\u0275fac = function WorkspaceDemoSettingsPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _WorkspaceDemoSettingsPage)();
};
_WorkspaceDemoSettingsPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WorkspaceDemoSettingsPage, selectors: [["app-workspace-demo-settings-page"]], decls: 10, vars: 0, consts: [[1, "grid", "gap-4"], [1, "text-xl", "font-semibold", "text-color"], [1, "mt-1", "text-sm", "text-muted-color"], [1, "fast-panel", "p-4"], [1, "grid", "gap-3"], [1, "fast-muted-panel", "flex", "items-center", "justify-between", "gap-3", "px-3", "py-2"], [1, "text-sm", "font-medium", "text-color"], [1, "text-xs", "text-muted-color"], [1, "text-xs", "font-medium", "text-primary"]], template: function WorkspaceDemoSettingsPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "section", 0)(1, "div")(2, "h1", 1);
    \u0275\u0275text(3, "Workspace settings");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "p", 2);
    \u0275\u0275text(5, "Settings grouped as compact operational rows.");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(6, "article", 3)(7, "div", 4);
    \u0275\u0275repeaterCreate(8, WorkspaceDemoSettingsPage_For_9_Template, 8, 3, "div", 5, _forTrack0);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(8);
    \u0275\u0275repeater(ctx.settings);
  }
}, encapsulation: 2, changeDetection: 0 });
var WorkspaceDemoSettingsPage = _WorkspaceDemoSettingsPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WorkspaceDemoSettingsPage, [{
    type: Component,
    args: [{
      selector: "app-workspace-demo-settings-page",
      standalone: true,
      template: `
    <section class="grid gap-4">
      <div>
        <h1 class="text-xl font-semibold text-color">Workspace settings</h1>
        <p class="mt-1 text-sm text-muted-color">Settings grouped as compact operational rows.</p>
      </div>

      <article class="fast-panel p-4">
        <div class="grid gap-3">
          @for (setting of settings; track setting.label) {
            <div class="fast-muted-panel flex items-center justify-between gap-3 px-3 py-2">
              <div>
                <p class="text-sm font-medium text-color">{{ setting.label }}</p>
                <p class="text-xs text-muted-color">{{ setting.description }}</p>
              </div>
              <span class="text-xs font-medium text-primary">{{ setting.value }}</span>
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WorkspaceDemoSettingsPage, { className: "WorkspaceDemoSettingsPage", filePath: "src/app/features/shell-demos/pages/workspace-demo-content.page.ts", lineNumber: 108 });
})();
export {
  WorkspaceDemoMembersPage,
  WorkspaceDemoOverviewPage,
  WorkspaceDemoSettingsPage
};
//# sourceMappingURL=chunk-BKJB2R3G.js.map
