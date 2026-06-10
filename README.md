# Angular FAST Starter

A runnable Angular starter based on:

- Angular standalone components and lazy routes
- NgRx SignalStore
- PrimeNG
- Tailwind CSS
- PrimeNG design tokens powered by CSS variables
- reusable application shells
- runtime design tokens for theme, radius, gradient, and density
- dark mode and collapsible sidebar preferences
- JWT auth with login, register, forgot password, reset password, Google auth hook, and profile
- reusable form system with validation helpers
- API client, API result type, and normalized error architecture
- shared UI wrappers
- mature data table with sorting, pagination, status tags, responsive columns, and dynamic actions
- responsive utility classes for dense app screens
- component documentation
- a reference Customers feature

## Run It

From this folder:

```bash
npm install
npm start
```

On Windows PowerShell, if `npm` is blocked by execution policy, use:

```bash
npm.cmd install
npm.cmd start
```

Open:

```txt
http://localhost:4200
```

## What Is Included

```txt
src/app/core
  API client, interceptor, API result, and API error model
  auth guard and demo auth store
  JWT token storage and auth API
  confirm and toast services
  design token service
  layout preference service
  project configuration service

src/app/features/auth
  login
  register
  forgot password
  reset password
  Google auth button

src/app/features/profile
  protected profile view/edit
  sign out

src/app/shared/shells
  public shell
  auth shell
  app shell
  workspace shell
  detail shell
  wizard shell
  report shell

src/app/shared/ui
  button
  icon button
  page header
  toolbar
  data table
  dialog
  form field
  status badge
  loading state
  empty state
  error state

src/app/shared/forms
  validation messages
  server field errors
  submit helpers

src/app/shared/store
  request state
  pagination
  sorting
  filters
  selection
  dialog state

src/app/features/customers
  lazy route
  list page
  detail page
  dynamic table actions
  sortable table state
  SignalStore
  mock API
  typed form
  DTO mapper

src/app/features/settings
  default settings section
  design token controls
  project config summary
  table defaults summary

src/app/features/shell-demos
  workspace shell demo
  detail shell demo
  wizard shell demo
  report shell demo
```

## Documentation

```txt
docs/architecture.md
docs/auth.md
docs/component-library.md
docs/design-system.md
docs/generator-guide.md
```

## Create A Feature

Generate a simple CRUD feature:

```bash
npm run generate:feature -- invoices --type=crud
```

Then add the generated route to `src/app/app.routes.ts`:

```ts
{
  path: 'invoices',
  loadChildren: () =>
    import('./features/invoices/invoices.routes').then((m) => m.INVOICES_ROUTES),
}
```

## Framework Rule

Use this rule to grow the starter:

```txt
If the same pattern appears in three features, move it into shared/ui, shared/store, or a generator.
```

## Change The Design

The starter is tokenized in:

```txt
src/styles/tokens.css
src/styles/app-theme.ts
src/app/core/design-system/design-token.service.ts
src/app/features/settings/pages/settings.page.ts
```

The running app includes a default Settings section at:

```txt
/app/settings
```

It controls:

```txt
mode       light, dark
theme      hsl, blue, emerald, violet
radius     sharp, soft, round
gradient   none, brand, sunrise, aurora
density    compact, comfortable, spacious
```

To change the design globally, edit the CSS variables in `src/styles/tokens.css`:

```css
:root {
  --primary-600: hsl(220, 48%, 38%);
  --slate-950: hsl(220, 42%, 4%);
  --brand: var(--primary-600);
  --bg-app: var(--slate-50);
  --bg-panel: #ffffff;
  --radius-lg: 14px;
  --sidebar-gradient: linear-gradient(160deg, var(--primary-800), var(--primary-600));
}
```

PrimeNG reads the same variables through `src/styles/app-theme.ts`, so changing the primitive tokens updates PrimeNG components and the FAST shell classes together.

Use token classes such as:

```txt
fast-panel
fast-muted-panel
fast-page
fast-brand-mark
fast-gradient-text
fast-gradient-surface
fast-shell-layout
fast-shell-content
fast-shell-main
fast-nav-link
fast-topbar
fast-shell-panel
fast-border-b
```

## Change Project Branding And Table Defaults

Edit:

```txt
src/app/core/config/project.config.ts
```

This controls:

```txt
brand name
logo text
workspace name
main navigation
default table page size
table page-size options
default table density
```

## Layout Preferences

The authenticated app shell includes:

```txt
collapsible desktop sidebar
icon-only collapsed navigation
tooltips for collapsed nav items
fixed app sidebar and topbar
main-content-only scrolling
dark mode toggle
responsive mobile top navigation
```

Sidebar state is stored by:

```txt
src/app/core/layout/layout-preference.service.ts
```

Dark mode is stored by:

```txt
src/app/core/design-system/design-token.service.ts
```

The root element receives:

```txt
class="app-dark"
data-color-scheme="dark"
data-sidebar="collapsed"
```

## Auth

The starter includes JWT auth in:

```txt
src/app/core/auth
src/app/features/auth
src/app/features/profile
```

Demo login:

```txt
email: admin@example.com
password: password
```

Routes:

```txt
/auth/login
/auth/register
/auth/forgot-password
/auth/reset-password
/app/profile
```

The mock backend is in `src/app/core/auth/auth.api.ts`. Replace those methods with real HTTP calls when connecting your backend.

To enable Google auth, set your Google OAuth client ID in:

```txt
src/app/core/auth/auth.config.ts
```

```ts
export const AUTH_CONFIG = {
  googleClientId: 'YOUR_GOOGLE_CLIENT_ID',
};
```

The Google button returns a JWT credential to `AuthStore.signInWithGoogle()`, where your real backend should verify/exchange it for your app JWT.

## Data Table Pattern

The shared table includes row numbering, pagination, compact spacing, sorting, status tags, responsive column hiding, and dynamic row actions.

Use the shared data table column and action API:

```ts
columns = [
  { field: 'fullName', header: 'Name', sortable: true, width: '13rem' },
  { field: 'company', header: 'Company', sortable: true, hideBelow: 'md' },
  { field: 'status', header: 'Status', type: 'status', sortable: true },
];
```

```ts
tableActions = [
  { id: 'view', label: 'View', icon: 'pi pi-eye' },
  { id: 'delete', label: 'Delete', icon: 'pi pi-trash', intent: 'danger' },
];
```

Handle the action from the page:

```html
<app-data-table
  [rows]="store.entities()"
  [columns]="columns"
  [actions]="tableActions"
  [sortField]="store.sortField()"
  [sortOrder]="store.sortOrder()"
  (actionTriggered)="handleTableAction($event)"
  (sortChanged)="handleSortChange($event)"
/>
```

Use `fast-filter-bar`, `fast-filter-search`, `fast-filter-control`, and `fast-filter-actions` for compact aligned filters above dense tables.

## Recommended Workflow

1. Pick a shell.
2. Pick a feature type.
3. Generate or copy the feature structure.
4. Fill in the model and mapper.
5. Fill in the API.
6. Customize the store methods.
7. Keep UI on shared wrappers and design tokens.
