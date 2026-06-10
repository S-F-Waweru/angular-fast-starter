import "./chunk-WDMUDEB6.js";

// src/app/features/shell-demos/shell-demos.routes.ts
var SHELL_DEMOS_ROUTES = [
  {
    path: "",
    loadComponent: () => import("./chunk-BUBLASHI.js").then((m) => m.ShellDemosIndexPage)
  },
  {
    path: "workspace",
    loadComponent: () => import("./chunk-D66AKQUX.js").then((m) => m.WorkspaceDemoShellPage),
    children: [
      {
        path: "",
        loadComponent: () => import("./chunk-BKJB2R3G.js").then((m) => m.WorkspaceDemoOverviewPage)
      },
      {
        path: "members",
        loadComponent: () => import("./chunk-BKJB2R3G.js").then((m) => m.WorkspaceDemoMembersPage)
      },
      {
        path: "settings",
        loadComponent: () => import("./chunk-BKJB2R3G.js").then((m) => m.WorkspaceDemoSettingsPage)
      }
    ]
  },
  {
    path: "detail",
    loadComponent: () => import("./chunk-65DL2EJC.js").then((m) => m.DetailDemoShellPage),
    children: [
      {
        path: "",
        pathMatch: "full",
        redirectTo: "overview"
      },
      {
        path: "overview",
        loadComponent: () => import("./chunk-WT63Z6A6.js").then((m) => m.DetailDemoOverviewPage)
      },
      {
        path: "activity",
        loadComponent: () => import("./chunk-WT63Z6A6.js").then((m) => m.DetailDemoActivityPage)
      },
      {
        path: "billing",
        loadComponent: () => import("./chunk-WT63Z6A6.js").then((m) => m.DetailDemoBillingPage)
      }
    ]
  },
  {
    path: "wizard",
    loadComponent: () => import("./chunk-UIHLAVXO.js").then((m) => m.WizardDemoShellPage),
    children: [
      {
        path: "",
        loadComponent: () => import("./chunk-YDKVDV7E.js").then((m) => m.WizardDemoContentPage)
      }
    ]
  },
  {
    path: "report",
    loadComponent: () => import("./chunk-FLYEI3GN.js").then((m) => m.ReportDemoShellPage),
    children: [
      {
        path: "",
        loadComponent: () => import("./chunk-BZFOJWLO.js").then((m) => m.ReportDemoContentPage)
      }
    ]
  }
];
export {
  SHELL_DEMOS_ROUTES
};
//# sourceMappingURL=chunk-FFLINUEE.js.map
