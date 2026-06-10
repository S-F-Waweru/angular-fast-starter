# Design System

PrimeNG owns component behavior. Tailwind owns layout and spacing. CSS variables own color, shape, surface, and visual semantics.

Runtime design tokens live in:

```txt
src/styles/tokens.css
src/styles/app-theme.ts
src/app/core/design-system/design-token.service.ts
src/app/shared/ui/design-token-panel/design-token-panel.component.ts
```

Use `/app/settings` to test color mode, theme, radius, gradient, density, and sidebar layout changes live.

Use:

```html
<section class="fast-panel p-4">
  <h1 class="text-xl font-semibold">Customers</h1>
</section>
```

Avoid:

```html
<section class="border-blue-700 bg-blue-500 text-white">
  <h1>Customers</h1>
</section>
```

## Add Or Change Brand Colors

Update:

```txt
src/styles/tokens.css
src/styles/app-theme.ts
```

The default HSL theme is defined from primitives, then mapped to semantic tokens and PrimeNG variables:

```css
:root {
  --primary-600: hsl(220, 48%, 38%);
  --slate-950: hsl(220, 42%, 4%);
  --brand: var(--primary-600);
  --bg-app: var(--slate-50);
  --bg-panel: #ffffff;
  --border-default: var(--slate-200);
  --text-primary: var(--slate-900);
  --radius-lg: 14px;
}
```

Keep app templates on shared classes and semantic tokens such as:

```txt
fast-panel
fast-topbar
fast-shell-panel
bg-primary
text-primary
text-primary-contrast
bg-surface-0
bg-surface-50
border-surface
text-color
text-muted-color
```

## FAST Tokens

Use these CSS variables for framework-level styling:

```css
:root {
  --fast-radius-sm: 0.375rem;
  --fast-radius-md: 0.5rem;
  --fast-radius-lg: 0.75rem;
  --fast-page-padding: 1.5rem;
  --fast-panel-padding: 1rem;
  --fast-gradient-brand: linear-gradient(135deg, var(--brand), #14b8a6);
  --fast-shell-sidebar-width: 17rem;
}
```

Use these classes instead of repeated hard-coded card styles:

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
fast-nav-link-active
fast-topbar
fast-shell-panel
fast-border-b
fast-border-t
fast-filter-bar
fast-filter-search
fast-filter-control
fast-filter-actions
```

## Token Profiles

The default runtime profiles are:

```txt
Mode: light, dark
Theme: hsl, blue, emerald, violet
Radius: sharp, soft, round
Gradient: none, brand, sunrise, aurora
Density: compact, comfortable, spacious
```

Add more by editing `tokens.css` and adding options in `DesignTokenPanelComponent`.

## Dark Mode

Dark mode uses the PrimeNG dark-mode selector configured in `app.config.ts`:

```txt
.app-dark
```

`DesignTokenService` applies that class to the root HTML element and stores the preference. Framework-level dark surfaces, sidebar gradients, topbars, panels, and soft gradients are tokenized in `src/styles/tokens.css`.

## Fixed App Shell

Use the authenticated shell pattern when the sidebar and topbar should remain fixed:

```html
<div class="fast-shell-grid fast-shell-layout grid">
  <aside class="fast-sidebar"></aside>
  <div class="fast-shell-content">
    <header class="fast-topbar"></header>
    <main class="fast-page fast-shell-main"></main>
  </div>
</div>
```

Only `fast-shell-main` scrolls. The sidebar receives its own internal scroll when navigation becomes taller than the viewport.

## Compact Filters

Use this pattern above tables when a feature can grow from two filters to many:

```html
<div class="fast-filter-bar">
  <span class="fast-filter-search"></span>
  <p-select class="fast-filter-control" />
  <div class="fast-filter-actions"></div>
</div>
```

Controls align to the same baseline, wrap predictably, and use compact control heights.
