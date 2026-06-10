import { Routes } from '@angular/router';

export const CUSTOMERS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/customers-list.page').then((m) => m.CustomersListPage),
  },
  {
    path: ':customerId',
    loadComponent: () => import('./pages/customer-detail.page').then((m) => m.CustomerDetailPage),
  },
];

