import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, inject, input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AppConfirmService } from '../../../core/confirm/app-confirm.service';
import { AppToastService } from '../../../core/toast/app-toast.service';
import { AppButtonComponent } from '../../../shared/ui/button/button.component';
import { AppErrorStateComponent } from '../../../shared/ui/error-state/error-state.component';
import { AppLoadingStateComponent } from '../../../shared/ui/loading-state/loading-state.component';
import { AppPageHeaderComponent } from '../../../shared/ui/page-header/page-header.component';
import { CustomerStatusBadgeComponent } from '../components/customer-status-badge.component';
import { CustomersStore } from '../data-access/customers.store';

@Component({
  selector: 'app-customer-detail-page',
  standalone: true,
  imports: [
    RouterLink,
    DatePipe,
    AppButtonComponent,
    AppErrorStateComponent,
    AppLoadingStateComponent,
    AppPageHeaderComponent,
    CustomerStatusBadgeComponent,
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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomerDetailPage implements OnInit {
  customerId = input.required<string>();

  readonly store = inject(CustomersStore);
  private readonly confirm = inject(AppConfirmService);
  private readonly router = inject(Router);
  private readonly toast = inject(AppToastService);

  ngOnInit() {
    this.store.loadOne(this.customerId());
  }

  confirmDelete(id: string) {
    this.confirm.confirm({
      header: 'Delete customer',
      message: 'This customer will be removed from the demo list.',
      acceptLabel: 'Delete',
      accept: () => {
        this.store.delete(id);
        this.toast.success('Customer deleted');
        void this.router.navigate(['/app/customers']);
      },
    });
  }
}
