# Generator Guide

The starter includes a small local generator:

```bash
npm run generate:feature -- invoices --type=crud
```

It creates:

```txt
src/app/features/invoices/
  invoices.routes.ts
  pages/invoices-list.page.ts
  components/invoice-form.component.ts
  data-access/invoices.api.ts
  data-access/invoices.store.ts
  models/invoice.model.ts
```

After generation, add the route to `src/app/app.routes.ts`.

The generator is intentionally small. When your project grows, convert it to an Angular schematic or Nx generator.

