import {
  AppLoadingStateComponent
} from "./chunk-7BH6NQVT.js";
import {
  AppConfirmService,
  AppErrorStateComponent,
  AppStatusBadgeComponent,
  CustomersStore
} from "./chunk-U2L6NLFI.js";
import {
  AppPageHeaderComponent
} from "./chunk-VWZ6ILE3.js";
import "./chunk-GHXMJHTX.js";
import {
  AppToastService
} from "./chunk-Q5HYC4IF.js";
import {
  AppButtonComponent
} from "./chunk-2BI5IW7M.js";
import "./chunk-TARWWEIZ.js";
import "./chunk-YGQPX75J.js";
import {
  Router,
  RouterLink
} from "./chunk-XVYRP3BM.js";
import {
  DatePipe
} from "./chunk-TI7NITK6.js";
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  inject,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-GI7FX4Z4.js";
import "./chunk-WDMUDEB6.js";

// src/app/features/customers/components/customer-status-badge.component.ts
var _CustomerStatusBadgeComponent = class _CustomerStatusBadgeComponent {
  constructor() {
    this.status = input.required(...ngDevMode ? [{ debugName: "status" }] : []);
  }
};
_CustomerStatusBadgeComponent.\u0275fac = function CustomerStatusBadgeComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CustomerStatusBadgeComponent)();
};
_CustomerStatusBadgeComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CustomerStatusBadgeComponent, selectors: [["app-customer-status-badge"]], inputs: { status: [1, "status"] }, decls: 1, vars: 1, consts: [[3, "value"]], template: function CustomerStatusBadgeComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-status-badge", 0);
  }
  if (rf & 2) {
    \u0275\u0275property("value", ctx.status());
  }
}, dependencies: [AppStatusBadgeComponent], encapsulation: 2, changeDetection: 0 });
var CustomerStatusBadgeComponent = _CustomerStatusBadgeComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CustomerStatusBadgeComponent, [{
    type: Component,
    args: [{
      selector: "app-customer-status-badge",
      standalone: true,
      imports: [AppStatusBadgeComponent],
      template: `<app-status-badge [value]="status()" />`,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, { status: [{ type: Input, args: [{ isSignal: true, alias: "status", required: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CustomerStatusBadgeComponent, { className: "CustomerStatusBadgeComponent", filePath: "src/app/features/customers/components/customer-status-badge.component.ts", lineNumber: 12 });
})();

// src/app/features/customers/pages/customer-detail.page.ts
function CustomerDetailPage_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-button", 7);
    \u0275\u0275listener("clicked", function CustomerDetailPage_Conditional_3_Template_app_button_clicked_0_listener() {
      const customer_r2 = \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.confirmDelete(customer_r2.id));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("loading", ctx_r2.store.loading());
  }
}
function CustomerDetailPage_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-loading-state", 4);
  }
}
function CustomerDetailPage_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-error-state", 5);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("message", ctx_r2.store.error() ?? "Failed to load customer")("retryable", false);
  }
}
function CustomerDetailPage_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 6)(1, "article", 8)(2, "div", 9)(3, "div")(4, "h2", 10);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 11);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(8, "app-customer-status-badge", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "dl", 13)(10, "div", 14)(11, "dt", 15);
    \u0275\u0275text(12, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "dd", 16);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 14)(16, "dt", 15);
    \u0275\u0275text(17, "Created");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "dd", 16);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "date");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(21, "aside", 8)(22, "h3", 17);
    \u0275\u0275text(23, "Feature pattern");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "ul", 18)(25, "li");
    \u0275\u0275text(26, "Route component");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "li");
    \u0275\u0275text(28, "Feature SignalStore");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "li");
    \u0275\u0275text(30, "API service");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "li");
    \u0275\u0275text(32, "DTO mapper");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "li");
    \u0275\u0275text(34, "Shared UI wrappers");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const customer_r4 = ctx;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(customer_r4.fullName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(customer_r4.company);
    \u0275\u0275advance();
    \u0275\u0275property("status", customer_r4.status);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(customer_r4.email);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 5, customer_r4.createdAt));
  }
}
var _CustomerDetailPage = class _CustomerDetailPage {
  constructor() {
    this.customerId = input.required(...ngDevMode ? [{ debugName: "customerId" }] : []);
    this.store = inject(CustomersStore);
    this.confirm = inject(AppConfirmService);
    this.router = inject(Router);
    this.toast = inject(AppToastService);
  }
  ngOnInit() {
    this.store.loadOne(this.customerId());
  }
  confirmDelete(id) {
    this.confirm.confirm({
      header: "Delete customer",
      message: "This customer will be removed from the demo list.",
      acceptLabel: "Delete",
      accept: () => {
        this.store.delete(id);
        this.toast.success("Customer deleted");
        void this.router.navigate(["/app/customers"]);
      }
    });
  }
};
_CustomerDetailPage.\u0275fac = function CustomerDetailPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CustomerDetailPage)();
};
_CustomerDetailPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CustomerDetailPage, selectors: [["app-customer-detail-page"]], inputs: { customerId: [1, "customerId"] }, features: [\u0275\u0275ProvidersFeature([CustomersStore])], decls: 7, vars: 3, consts: [["description", "Record detail page using a feature store.", 3, "title"], ["routerLink", "/app/customers"], ["label", "Back", "icon", "pi pi-arrow-left", "intent", "secondary"], ["label", "Delete", "icon", "pi pi-trash", "intent", "danger", 3, "loading"], ["label", "Loading customer"], [3, "message", "retryable"], [1, "grid", "gap-6", "lg:grid-cols-[1fr_20rem]"], ["label", "Delete", "icon", "pi pi-trash", "intent", "danger", 3, "clicked", "loading"], [1, "fast-panel", "p-5"], [1, "flex", "flex-wrap", "items-start", "justify-between", "gap-4"], [1, "text-xl", "font-semibold", "text-color"], [1, "mt-1", "text-sm", "text-muted-color"], [3, "status"], [1, "mt-6", "grid", "gap-4", "md:grid-cols-2"], [1, "fast-muted-panel", "p-3"], [1, "text-xs", "uppercase", "text-muted-color"], [1, "mt-1", "font-medium", "text-color"], [1, "font-semibold", "text-color"], [1, "mt-4", "grid", "gap-3", "text-sm", "text-muted-color"]], template: function CustomerDetailPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-page-header", 0)(1, "a", 1);
    \u0275\u0275element(2, "app-button", 2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, CustomerDetailPage_Conditional_3_Template, 1, 1, "app-button", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, CustomerDetailPage_Conditional_4_Template, 1, 0, "app-loading-state", 4)(5, CustomerDetailPage_Conditional_5_Template, 1, 2, "app-error-state", 5)(6, CustomerDetailPage_Conditional_6_Template, 35, 7, "section", 6);
  }
  if (rf & 2) {
    let tmp_0_0;
    let tmp_1_0;
    let tmp_2_0;
    \u0275\u0275property("title", ((tmp_0_0 = ctx.store.selectedCustomer()) == null ? null : tmp_0_0.fullName) ?? "Customer");
    \u0275\u0275advance(3);
    \u0275\u0275conditional((tmp_1_0 = ctx.store.selectedCustomer()) ? 3 : -1, tmp_1_0);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.store.loading() && !ctx.store.selectedCustomer() ? 4 : ctx.store.failed() ? 5 : (tmp_2_0 = ctx.store.selectedCustomer()) ? 6 : -1, tmp_2_0);
  }
}, dependencies: [
  RouterLink,
  AppButtonComponent,
  AppErrorStateComponent,
  AppLoadingStateComponent,
  AppPageHeaderComponent,
  CustomerStatusBadgeComponent,
  DatePipe
], encapsulation: 2, changeDetection: 0 });
var CustomerDetailPage = _CustomerDetailPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CustomerDetailPage, [{
    type: Component,
    args: [{
      selector: "app-customer-detail-page",
      standalone: true,
      imports: [
        RouterLink,
        DatePipe,
        AppButtonComponent,
        AppErrorStateComponent,
        AppLoadingStateComponent,
        AppPageHeaderComponent,
        CustomerStatusBadgeComponent
      ],
      providers: [CustomersStore],
      template: `
    <app-page-header
      [title]="store.selectedCustomer()?.fullName ?? 'Customer'"
      description="Record detail page using a feature store."
    >
      <a routerLink="/app/customers">
        <app-button label="Back" icon="pi pi-arrow-left" intent="secondary" />
      </a>
      @if (store.selectedCustomer(); as customer) {
        <app-button label="Delete" icon="pi pi-trash" intent="danger" [loading]="store.loading()" (clicked)="confirmDelete(customer.id)" />
      }
    </app-page-header>

    @if (store.loading() && !store.selectedCustomer()) {
      <app-loading-state label="Loading customer" />
    } @else if (store.failed()) {
      <app-error-state [message]="store.error() ?? 'Failed to load customer'" [retryable]="false" />
    } @else if (store.selectedCustomer(); as customer) {
      <section class="grid gap-6 lg:grid-cols-[1fr_20rem]">
        <article class="fast-panel p-5">
          <div class="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h2 class="text-xl font-semibold text-color">{{ customer.fullName }}</h2>
              <p class="mt-1 text-sm text-muted-color">{{ customer.company }}</p>
            </div>
            <app-customer-status-badge [status]="customer.status" />
          </div>

          <dl class="mt-6 grid gap-4 md:grid-cols-2">
            <div class="fast-muted-panel p-3">
              <dt class="text-xs uppercase text-muted-color">Email</dt>
              <dd class="mt-1 font-medium text-color">{{ customer.email }}</dd>
            </div>
            <div class="fast-muted-panel p-3">
              <dt class="text-xs uppercase text-muted-color">Created</dt>
              <dd class="mt-1 font-medium text-color">{{ customer.createdAt | date }}</dd>
            </div>
          </dl>
        </article>

        <aside class="fast-panel p-5">
          <h3 class="font-semibold text-color">Feature pattern</h3>
          <ul class="mt-4 grid gap-3 text-sm text-muted-color">
            <li>Route component</li>
            <li>Feature SignalStore</li>
            <li>API service</li>
            <li>DTO mapper</li>
            <li>Shared UI wrappers</li>
          </ul>
        </aside>
      </section>
    }
  `,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, { customerId: [{ type: Input, args: [{ isSignal: true, alias: "customerId", required: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CustomerDetailPage, { className: "CustomerDetailPage", filePath: "src/app/features/customers/pages/customer-detail.page.ts", lineNumber: 81 });
})();
export {
  CustomerDetailPage
};
//# sourceMappingURL=chunk-YXDT74GD.js.map
