import "./chunk-WDMUDEB6.js";

// src/app/features/customers/customers.routes.ts
var CUSTOMERS_ROUTES = [
  {
    path: "",
    loadComponent: () => import("./chunk-3Q7VMEDF.js").then((m) => m.CustomersListPage)
  },
  {
    path: ":customerId",
    loadComponent: () => import("./chunk-YXDT74GD.js").then((m) => m.CustomerDetailPage)
  }
];
export {
  CUSTOMERS_ROUTES
};
//# sourceMappingURL=chunk-OVKRVAIB.js.map
