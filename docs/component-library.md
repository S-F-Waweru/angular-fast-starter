# Component Library

This starter keeps repeated UI and workflow patterns in `src/app/shared`.

Use this file as the starter contract when building a new feature.

## Shared UI

```txt
shared/ui/button          PrimeNG button wrapper with intents and full-width support
shared/ui/icon-button     icon-only action button with tooltip-ready labels
shared/ui/page-header     page title and primary action slot
shared/ui/toolbar         compact filter and command surface
shared/ui/data-table      sortable, paginated, action-aware table
shared/ui/dialog          repeated modal wrapper
shared/ui/form-field      label, hint, required marker, and validation errors
shared/ui/status-badge    semantic tag for active, pending, inactive, failed, etc.
shared/ui/loading-state   standard loading placeholder
shared/ui/empty-state     empty table/list placeholder
shared/ui/error-state     retry/error placeholder
```

## Form System

Form helpers live in:

```txt
src/app/shared/forms/form-errors.ts
src/app/shared/forms/form-submit.ts
```

Use typed Angular reactive forms in each feature model file:

```ts
export function createCustomerForm() {
  return new FormGroup<CustomerForm>({
    fullName: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(2)],
    }),
  });
}
```

Use `app-form-field` for consistent labels, hints, and errors:

```html
<app-form-field label="Email" hint="Used for account notices." [control]="form.controls.email" [required]="true">
  <input pInputText type="email" formControlName="email" class="w-full" />
</app-form-field>
```

Submit with the shared helper:

```ts
submit() {
  if (touchInvalidForm(this.form)) {
    return;
  }

  this.submitted.emit(this.form.getRawValue());
}
```

For backend validation, map API field errors into the form:

```ts
setServerFieldErrors(this.form, [
  { field: 'email', message: 'This email is already registered' },
]);
```

## API And Error Architecture

Core API files live in:

```txt
src/app/core/api/api.config.ts
src/app/core/api/api-client.service.ts
src/app/core/api/api-error.model.ts
src/app/core/api/api-operators.ts
src/app/core/api/api-result.model.ts
src/app/core/api/api.interceptor.ts
```

The interceptor adds auth headers and normalizes thrown HTTP errors with `toApiError()`.

Use `ApiClient` when you want a non-throwing result:

```ts
this.api.get<CustomerDto[]>('/customers').subscribe((result) => {
  if (result.ok) {
    this.customers = result.data;
    return;
  }

  this.error = result.error.message;
});
```

Use normal `HttpClient` or feature API services when a SignalStore should own the request stream:

```ts
catchError((error) => {
  store.setError(apiErrorMessage(error, 'Failed to load customers'));
  return EMPTY;
})
```

Expected backend error shape:

```json
{
  "message": "Validation failed",
  "code": "VALIDATION_ERROR",
  "correlationId": "req_123",
  "fieldErrors": [
    { "field": "email", "message": "Email already exists" }
  ]
}
```

## Data Table

`app-data-table` supports:

```txt
row numbering
pagination
page-size options
sortable columns
dynamic row actions
status tags
empty state copy
error state copy
column widths
nowrap cells
mobile column hiding
sort and page events for server-driven tables
```

Column contract:

```ts
columns: DataTableColumn[] = [
  { field: 'fullName', header: 'Name', sortable: true, width: '13rem' },
  { field: 'company', header: 'Company', sortable: true, hideBelow: 'md' },
  { field: 'status', header: 'Status', type: 'status', sortable: true, nowrap: true },
];
```

Action contract:

```ts
tableActions: DataTableAction[] = [
  { id: 'view', label: 'View customer', icon: 'pi pi-eye' },
  {
    id: 'activate',
    label: 'Activate customer',
    icon: 'pi pi-check',
    visible: (row) => this.asCustomer(row).status !== 'active',
  },
];
```

Server-ready sort and paging:

```html
<app-data-table
  [rows]="store.entities()"
  [columns]="columns"
  [actions]="tableActions"
  [first]="store.pageStart()"
  [pageSize]="store.pageSize()"
  [sortField]="store.sortField()"
  [sortOrder]="store.sortOrder()"
  (pageChanged)="handlePageChange($event)"
  (sortChanged)="handleSortChange($event)"
/>
```

Use store features together:

```txt
withRequestState()
withPagination()
withSort()
withFilters(initialFilters)
withSelection()
withDialogState()
```

## Responsive Utilities

Use these classes before adding custom CSS:

```txt
fast-page
fast-panel
fast-muted-panel
fast-panel-pad
fast-filter-bar
fast-filter-search
fast-filter-control
fast-filter-actions
fast-responsive-grid
fast-responsive-split
fast-table-hide-sm
fast-table-hide-md
fast-table-hide-lg
```

Rules:

- Keep page sections unframed unless the user is working inside a tool, form, card item, or modal.
- Put repeated item boundaries in cards, not every page section.
- Hide low-priority table columns before shrinking important content.
- Keep filters compact and aligned with `fast-filter-*` classes.
- Prefer tokens from `src/styles/tokens.css` over one-off colors, spacing, shadows, and radius.

## Feature Checklist

For each new feature:

1. Add `feature.routes.ts`.
2. Add `models` for app models, DTOs, forms, and mappers.
3. Add a `data-access` API service.
4. Add a SignalStore with request, filters, pagination, sorting, selection, and dialog state as needed.
5. Use shared UI wrappers before adding feature-only UI.
6. Use `app-data-table` for list screens.
7. Use `app-form-field` and `shared/forms` helpers for forms.
8. Keep shell choice explicit: app, workspace, detail, wizard, report, auth, or public.
