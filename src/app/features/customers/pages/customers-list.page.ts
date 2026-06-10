import { ChangeDetectionStrategy, Component, OnInit, computed, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { ProjectConfigService } from '../../../core/config/project-config.service';
import { AppConfirmService } from '../../../core/confirm/app-confirm.service';
import { AppToastService } from '../../../core/toast/app-toast.service';
import { AppButtonComponent } from '../../../shared/ui/button/button.component';
import {
  AppDataTableComponent,
  DataTableAction,
  DataTableActionEvent,
  DataTableColumn,
  DataTablePageEvent,
  DataTableSortEvent,
} from '../../../shared/ui/data-table/data-table.component';
import { AppDialogComponent } from '../../../shared/ui/dialog/dialog.component';
import { AppErrorStateComponent } from '../../../shared/ui/error-state/error-state.component';
import { AppPageHeaderComponent } from '../../../shared/ui/page-header/page-header.component';
import { AppToolbarComponent } from '../../../shared/ui/toolbar/toolbar.component';
import { CustomerFormComponent } from '../components/customer-form.component';
import { CustomersStore } from '../data-access/customers.store';
import { Customer, CustomerFilters } from '../models/customer.model';

@Component({
  selector: 'app-customers-list-page',
  standalone: true,
  imports: [
    InputTextModule,
    FormsModule,
    SelectModule,
    AppButtonComponent,
    AppDataTableComponent,
    AppDialogComponent,
    AppErrorStateComponent,
    AppPageHeaderComponent,
    AppToolbarComponent,
    CustomerFormComponent,
  ],
  providers: [CustomersStore],
  template: `
    <app-page-header title="Customers" description="Reference CRUD feature using SignalStore and PrimeNG wrappers.">
      <app-button label="New customer" icon="pi pi-plus" (clicked)="store.openDialog()" />
    </app-page-header>

    <app-toolbar>
      <div class="fast-filter-bar">
        <span class="p-input-icon-left fast-filter-search">
          <i class="pi pi-search"></i>
          <input
            pInputText
            type="search"
            class="w-full"
            placeholder="Search customers"
            [value]="store.filters().search"
            (input)="search($event)"
          />
        </span>

        <p-select
          [options]="statusOptions"
          optionLabel="label"
          optionValue="value"
          [ngModel]="store.filters().status"
          (ngModelChange)="setStatus($event)"
          placeholder="Status"
          class="fast-filter-control"
          styleClass="w-full"
        />

        <div class="fast-filter-actions">
          <app-button
            label="Refresh"
            icon="pi pi-refresh"
            intent="secondary"
            size="small"
            [loading]="store.loading()"
            (clicked)="store.load()"
          />
        </div>
      </div>
    </app-toolbar>

    @if (store.failed()) {
      <app-error-state [message]="store.error() ?? 'Failed to load customers'" (retry)="store.load()" />
    } @else {
      <app-data-table
        [rows]="store.entities()"
        [columns]="columns"
        [actions]="tableActions"
        [loading]="store.loading()"
        [first]="store.pageStart()"
        [pageSize]="store.pageSize()"
        [pageSizeOptions]="tableConfig().pageSizeOptions"
        [totalRecords]="store.total()"
        [size]="tableConfig().size"
        [sortField]="store.sortField()"
        [sortOrder]="store.sortOrder()"
        minTableWidth="50rem"
        emptyTitle="No customers match the filters"
        emptyMessage="Try changing the search text or selected status."
        (rowClicked)="openDetail($event)"
        (actionTriggered)="handleTableAction($event)"
        (pageChanged)="handlePageChange($event)"
        (sortChanged)="handleSortChange($event)"
      />
    }

    <app-dialog title="New customer" [open]="store.dialogOpen()" (closed)="store.closeDialog()">
      <app-customer-form
        [saving]="store.loading()"
        (submitted)="store.create($event)"
        (cancelled)="store.closeDialog()"
      />
    </app-dialog>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomersListPage implements OnInit {
  readonly store = inject(CustomersStore);
  private readonly router = inject(Router);
  private readonly confirm = inject(AppConfirmService);
  private readonly project = inject(ProjectConfigService);
  private readonly toast = inject(AppToastService);

  tableConfig = computed(() => this.project.table());

  columns: DataTableColumn[] = [
    { field: 'fullName', header: 'Name', sortable: true, width: '13rem' },
    { field: 'company', header: 'Company', sortable: true, hideBelow: 'md' },
    { field: 'email', header: 'Email', sortable: true, hideBelow: 'sm' },
    { field: 'status', header: 'Status', type: 'status', sortable: true, nowrap: true, width: '8rem' },
    { field: 'createdAt', header: 'Created', sortable: true, nowrap: true, hideBelow: 'lg' },
  ];

  tableActions: DataTableAction[] = [
    {
      id: 'view',
      label: 'View customer',
      icon: 'pi pi-eye',
      intent: 'ghost',
    },
    {
      id: 'activate',
      label: 'Activate customer',
      icon: 'pi pi-check',
      intent: 'secondary',
      visible: (row) => this.asCustomer(row).status !== 'active',
    },
    {
      id: 'deactivate',
      label: 'Deactivate customer',
      icon: 'pi pi-ban',
      intent: 'secondary',
      visible: (row) => this.asCustomer(row).status === 'active',
    },
    {
      id: 'delete',
      label: 'Delete customer',
      icon: 'pi pi-trash',
      intent: 'danger',
    },
  ];

  statusOptions: { label: string; value: CustomerFilters['status'] }[] = [
    { label: 'All statuses', value: 'all' },
    { label: 'Active', value: 'active' },
    { label: 'Pending', value: 'pending' },
    { label: 'Inactive', value: 'inactive' },
  ];

  ngOnInit() {
    this.store.setPageSize(this.tableConfig().defaultPageSize);
    this.store.load();
  }

  search(event: Event) {
    const input = event.target as HTMLInputElement;
    this.store.setFilters({ search: input.value });
    this.store.setPage(1);
    this.store.load();
  }

  setStatus(status: CustomerFilters['status']) {
    this.store.setFilters({ status });
    this.store.setPage(1);
    this.store.load();
  }

  openDetail(row: unknown) {
    const customer = row as Customer;
    void this.router.navigate(['/app/customers', customer.id]);
  }

  handleTableAction(event: DataTableActionEvent) {
    const customer = this.asCustomer(event.row);

    if (event.action.id === 'view') {
      this.openDetail(customer);
      return;
    }

    if (event.action.id === 'activate') {
      this.store.update({ ...customer, status: 'active' });
      this.toast.success('Customer activated', customer.fullName);
      return;
    }

    if (event.action.id === 'deactivate') {
      this.store.update({ ...customer, status: 'inactive' });
      this.toast.info('Customer deactivated', customer.fullName);
      return;
    }

    if (event.action.id === 'delete') {
      this.confirm.confirm({
        header: 'Delete customer',
        message: `${customer.fullName} will be removed from the list.`,
        acceptLabel: 'Delete',
        accept: () => {
          this.store.delete(customer.id);
          this.toast.success('Customer deleted', customer.fullName);
        },
      });
    }
  }

  handlePageChange(event: DataTablePageEvent) {
    this.store.setPageSize(event.rows);
    this.store.setPage(event.page + 1);
  }

  handleSortChange(event: DataTableSortEvent) {
    if (!event.field) {
      return;
    }

    this.store.setSort(event.field, event.order);
    this.store.setPage(1);
    this.store.load();
  }

  private asCustomer(row: unknown) {
    return row as Customer;
  }
}
