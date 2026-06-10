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
  Output,
  input,
  output,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-GI7FX4Z4.js";
import "./chunk-WDMUDEB6.js";

// src/app/shared/shells/wizard-shell/wizard-shell.component.ts
var _forTrack0 = ($index, $item) => $item.value;
function WizardShellComponent_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "span", 8);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 9);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const step_r1 = ctx.$implicit;
    const \u0275$index_7_r2 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-primary", \u0275$index_7_r2 <= ctx_r2.currentStep())("text-primary-contrast", \u0275$index_7_r2 <= ctx_r2.currentStep())("bg-surface-100", \u0275$index_7_r2 > ctx_r2.currentStep())("text-muted-color", \u0275$index_7_r2 > ctx_r2.currentStep());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275$index_7_r2 + 1, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(step_r1.label);
  }
}
var _WizardShellComponent = class _WizardShellComponent {
  constructor() {
    this.steps = input([], ...ngDevMode ? [{ debugName: "steps" }] : []);
    this.currentStep = input(0, ...ngDevMode ? [{ debugName: "currentStep" }] : []);
    this.previous = output();
    this.next = output();
  }
};
_WizardShellComponent.\u0275fac = function WizardShellComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _WizardShellComponent)();
};
_WizardShellComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WizardShellComponent, selectors: [["app-wizard-shell"]], inputs: { steps: [1, "steps"], currentStep: [1, "currentStep"] }, outputs: { previous: "previous", next: "next" }, decls: 10, vars: 0, consts: [[1, "fast-app-bg", "mx-auto", "grid", "min-h-full", "max-w-5xl", "grid-rows-[auto_1fr_auto]", "px-6"], [1, "fast-border-b", "py-4"], [1, "flex", "flex-wrap", "items-center", "gap-2"], [1, "flex", "items-center", "gap-2"], [1, "py-8"], [1, "fast-border-t", "flex", "justify-between", "py-4"], ["label", "Back", "intent", "secondary", 3, "clicked"], ["label", "Continue", "icon", "pi pi-arrow-right", 3, "clicked"], [1, "grid", "size-8", "place-items-center", "rounded-full", "text-sm", "font-semibold"], [1, "text-sm", "font-medium", "text-color"]], template: function WizardShellComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 0)(1, "header", 1)(2, "div", 2);
    \u0275\u0275repeaterCreate(3, WizardShellComponent_For_4_Template, 5, 10, "div", 3, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "section", 4);
    \u0275\u0275element(6, "router-outlet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "footer", 5)(8, "app-button", 6);
    \u0275\u0275listener("clicked", function WizardShellComponent_Template_app_button_clicked_8_listener() {
      return ctx.previous.emit();
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "app-button", 7);
    \u0275\u0275listener("clicked", function WizardShellComponent_Template_app_button_clicked_9_listener() {
      return ctx.next.emit();
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx.steps());
  }
}, dependencies: [RouterOutlet, AppButtonComponent], encapsulation: 2, changeDetection: 0 });
var WizardShellComponent = _WizardShellComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WizardShellComponent, [{
    type: Component,
    args: [{
      selector: "app-wizard-shell",
      standalone: true,
      imports: [RouterOutlet, AppButtonComponent],
      template: `
    <main class="fast-app-bg mx-auto grid min-h-full max-w-5xl grid-rows-[auto_1fr_auto] px-6">
      <header class="fast-border-b py-4">
        <div class="flex flex-wrap items-center gap-2">
          @for (step of steps(); track step.value; let index = $index) {
            <div class="flex items-center gap-2">
              <span
                class="grid size-8 place-items-center rounded-full text-sm font-semibold"
                [class.bg-primary]="index <= currentStep()"
                [class.text-primary-contrast]="index <= currentStep()"
                [class.bg-surface-100]="index > currentStep()"
                [class.text-muted-color]="index > currentStep()"
              >
                {{ index + 1 }}
              </span>
              <span class="text-sm font-medium text-color">{{ step.label }}</span>
            </div>
          }
        </div>
      </header>

      <section class="py-8">
        <router-outlet />
      </section>

      <footer class="fast-border-t flex justify-between py-4">
        <app-button label="Back" intent="secondary" (clicked)="previous.emit()" />
        <app-button label="Continue" icon="pi pi-arrow-right" (clicked)="next.emit()" />
      </footer>
    </main>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, { steps: [{ type: Input, args: [{ isSignal: true, alias: "steps", required: false }] }], currentStep: [{ type: Input, args: [{ isSignal: true, alias: "currentStep", required: false }] }], previous: [{ type: Output, args: ["previous"] }], next: [{ type: Output, args: ["next"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WizardShellComponent, { className: "WizardShellComponent", filePath: "src/app/shared/shells/wizard-shell/wizard-shell.component.ts", lineNumber: 47 });
})();

// src/app/features/shell-demos/pages/wizard-demo-shell.page.ts
var _WizardDemoShellPage = class _WizardDemoShellPage {
  constructor() {
    this.currentStep = signal(1, ...ngDevMode ? [{ debugName: "currentStep" }] : []);
    this.steps = [
      { label: "Details", value: "details" },
      { label: "Rules", value: "rules" },
      { label: "Review", value: "review" }
    ];
  }
  previous() {
    this.currentStep.update((step) => Math.max(0, step - 1));
  }
  next() {
    this.currentStep.update((step) => Math.min(this.steps.length - 1, step + 1));
  }
};
_WizardDemoShellPage.\u0275fac = function WizardDemoShellPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _WizardDemoShellPage)();
};
_WizardDemoShellPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WizardDemoShellPage, selectors: [["app-wizard-demo-shell-page"]], decls: 1, vars: 2, consts: [[3, "previous", "next", "steps", "currentStep"]], template: function WizardDemoShellPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-wizard-shell", 0);
    \u0275\u0275listener("previous", function WizardDemoShellPage_Template_app_wizard_shell_previous_0_listener() {
      return ctx.previous();
    })("next", function WizardDemoShellPage_Template_app_wizard_shell_next_0_listener() {
      return ctx.next();
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("steps", ctx.steps)("currentStep", ctx.currentStep());
  }
}, dependencies: [WizardShellComponent], encapsulation: 2, changeDetection: 0 });
var WizardDemoShellPage = _WizardDemoShellPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WizardDemoShellPage, [{
    type: Component,
    args: [{
      selector: "app-wizard-demo-shell-page",
      standalone: true,
      imports: [WizardShellComponent],
      template: `
    <app-wizard-shell
      [steps]="steps"
      [currentStep]="currentStep()"
      (previous)="previous()"
      (next)="next()"
    />
  `,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WizardDemoShellPage, { className: "WizardDemoShellPage", filePath: "src/app/features/shell-demos/pages/wizard-demo-shell.page.ts", lineNumber: 18 });
})();
export {
  WizardDemoShellPage
};
//# sourceMappingURL=chunk-UIHLAVXO.js.map
