# Architecture

The starter uses the Angular FAST structure.

```txt
F = Feature contracts
A = API and adapter contracts
S = SignalStore contracts
T = Tokenized UI
```

## Folder Rules

```txt
core       app-wide infrastructure
shared     reusable framework pieces
features   business functionality
```

Rules:

- Feature routes are lazy-loaded.
- Pages can inject stores.
- Presentational components use inputs and outputs.
- Components do not call HTTP services.
- API services map DTOs to app models.
- API errors should pass through `toApiError()` or `apiErrorMessage()` before reaching the UI.
- Use `ApiClient` for result-based requests and feature API services for store-owned request streams.
- SignalStores own loading, errors, filters, pagination, sorting, selection, and mutations.
- Typed forms should use `shared/forms` helpers and `app-form-field`.
- PrimeNG patterns are wrapped when repeated.
- Tailwind colors should use PrimeNG semantic tokens.
- Radius, gradients, density, shell sizing, and panel styling should use FAST tokens from `src/styles/tokens.css`.
- Branding, navigation, and table defaults should come from `src/app/core/config/project.config.ts`.
- Table actions should be passed into `app-data-table` as dynamic action config.
- Table sorting and paging should be emitted from `app-data-table` and stored in SignalStore for server-ready lists.
- Auth routes should use `src/app/core/auth` for JWT session state, token storage, guards, and API boundaries.
- Layout preferences such as collapsed sidebar should live in `src/app/core/layout`.
- Dark mode should be applied through `DesignTokenService` and the root `.app-dark` class.

## Shell Selection

```txt
PublicShell      public pages
AuthShell        login and account recovery
AppShell         authenticated dashboards and internal tools
WorkspaceShell   tenant, organization, team, or project apps
DetailShell      record detail sections
WizardShell      multi-step workflows
ReportShell      analytics, exports, and printable screens
```

## Feature Contract

```txt
features/example/
  example.routes.ts
  pages/
  components/
  data-access/
  models/
```

Keep each feature self-contained. Export routes, not random internals.

## Documentation Contract

```txt
docs/component-library.md
```

Keep component usage, form rules, API/error rules, table behavior, and responsive utilities documented there when shared framework pieces change.
