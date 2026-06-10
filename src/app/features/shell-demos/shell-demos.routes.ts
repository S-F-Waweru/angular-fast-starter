import { Routes } from '@angular/router';

export const SHELL_DEMOS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/shell-demos-index.page').then((m) => m.ShellDemosIndexPage),
  },
  {
    path: 'workspace',
    loadComponent: () => import('./pages/workspace-demo-shell.page').then((m) => m.WorkspaceDemoShellPage),
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/workspace-demo-content.page').then((m) => m.WorkspaceDemoOverviewPage),
      },
      {
        path: 'members',
        loadComponent: () => import('./pages/workspace-demo-content.page').then((m) => m.WorkspaceDemoMembersPage),
      },
      {
        path: 'settings',
        loadComponent: () => import('./pages/workspace-demo-content.page').then((m) => m.WorkspaceDemoSettingsPage),
      },
    ],
  },
  {
    path: 'detail',
    loadComponent: () => import('./pages/detail-demo-shell.page').then((m) => m.DetailDemoShellPage),
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'overview',
      },
      {
        path: 'overview',
        loadComponent: () => import('./pages/detail-demo-content.page').then((m) => m.DetailDemoOverviewPage),
      },
      {
        path: 'activity',
        loadComponent: () => import('./pages/detail-demo-content.page').then((m) => m.DetailDemoActivityPage),
      },
      {
        path: 'billing',
        loadComponent: () => import('./pages/detail-demo-content.page').then((m) => m.DetailDemoBillingPage),
      },
    ],
  },
  {
    path: 'wizard',
    loadComponent: () => import('./pages/wizard-demo-shell.page').then((m) => m.WizardDemoShellPage),
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/wizard-demo-content.page').then((m) => m.WizardDemoContentPage),
      },
    ],
  },
  {
    path: 'report',
    loadComponent: () => import('./pages/report-demo-shell.page').then((m) => m.ReportDemoShellPage),
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/report-demo-content.page').then((m) => m.ReportDemoContentPage),
      },
    ],
  },
];
