import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const args = process.argv.slice(2);
const featureName = args.find((arg) => !arg.startsWith('--'));
const type = getOption('type', 'crud');

if (!featureName) {
  console.error('Usage: npm run generate:feature -- customers --type=crud');
  process.exit(1);
}

const names = createNames(featureName);
const root = join('src', 'app', 'features', names.kebabPlural);

const files = {
  [`${names.kebabPlural}.routes.ts`]: routesTemplate(names),
  [`pages/${names.kebabPlural}-list.page.ts`]: listPageTemplate(names, type),
  [`data-access/${names.kebabPlural}.api.ts`]: apiTemplate(names),
  [`data-access/${names.kebabPlural}.store.ts`]: storeTemplate(names),
  [`models/${names.kebabSingular}.model.ts`]: modelTemplate(names),
};

if (type === 'crud') {
  files[`components/${names.kebabSingular}-form.component.ts`] = formTemplate(names);
}

for (const file of Object.keys(files)) {
  const target = join(root, file);
  const dir = target.split(/[\\/]/).slice(0, -1).join('/');

  mkdirSync(dir, { recursive: true });

  if (existsSync(target)) {
    console.log(`Skipped ${target}`);
    continue;
  }

  writeFileSync(target, files[file]);
  console.log(`Created ${target}`);
}

console.log(`\nNext: add ${names.constant}_ROUTES to src/app/app.routes.ts`);

function getOption(name, fallback) {
  const prefix = `--${name}=`;
  const arg = args.find((item) => item.startsWith(prefix));
  return arg ? arg.slice(prefix.length) : fallback;
}

function createNames(input) {
  const kebabPlural = toKebab(input);
  const kebabSingular = kebabPlural.endsWith('s') ? kebabPlural.slice(0, -1) : kebabPlural;
  const camelPlural = toCamel(kebabPlural);
  const camelSingular = toCamel(kebabSingular);
  const pascalPlural = toPascal(kebabPlural);
  const pascalSingular = toPascal(kebabSingular);
  const constant = kebabPlural.replaceAll('-', '_').toUpperCase();

  return {
    kebabPlural,
    kebabSingular,
    camelPlural,
    camelSingular,
    pascalPlural,
    pascalSingular,
    constant,
  };
}

function toKebab(value) {
  return value
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/[^a-zA-Z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .toLowerCase();
}

function toCamel(value) {
  return value.replace(/-([a-z0-9])/g, (_, letter) => letter.toUpperCase());
}

function toPascal(value) {
  const camel = toCamel(value);
  return camel.charAt(0).toUpperCase() + camel.slice(1);
}

function routesTemplate(names) {
  return `import { Routes } from '@angular/router';

export const ${names.constant}_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/${names.kebabPlural}-list.page').then((m) => m.${names.pascalPlural}ListPage),
  },
];
`;
}

function listPageTemplate(names, type) {
  const formImport =
    type === 'crud'
      ? `import { ${names.pascalSingular}FormComponent } from '../components/${names.kebabSingular}-form.component';\n`
      : '';

  const formImportName = type === 'crud' ? `, ${names.pascalSingular}FormComponent` : '';
  const newButton =
    type === 'crud'
      ? `<app-button label="New ${names.kebabSingular}" icon="pi pi-plus" (clicked)="store.openDialog()" />`
      : '';

  const dialog =
    type === 'crud'
      ? `
    <app-dialog title="New ${names.kebabSingular}" [open]="store.dialogOpen()" (closed)="store.closeDialog()">
      <app-${names.kebabSingular}-form
        [saving]="store.loading()"
        (submitted)="store.create($event)"
        (cancelled)="store.closeDialog()"
      />
    </app-dialog>`
      : '';

  return `import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { AppButtonComponent } from '../../../shared/ui/button/button.component';
import { AppDataTableComponent, DataTableColumn } from '../../../shared/ui/data-table/data-table.component';
import { AppDialogComponent } from '../../../shared/ui/dialog/dialog.component';
import { AppErrorStateComponent } from '../../../shared/ui/error-state/error-state.component';
import { AppPageHeaderComponent } from '../../../shared/ui/page-header/page-header.component';
${formImport}import { ${names.pascalPlural}Store } from '../data-access/${names.kebabPlural}.store';

@Component({
  selector: 'app-${names.kebabPlural}-list-page',
  standalone: true,
  imports: [
    AppButtonComponent,
    AppDataTableComponent,
    AppDialogComponent,
    AppErrorStateComponent,
    AppPageHeaderComponent${formImportName},
  ],
  providers: [${names.pascalPlural}Store],
  template: \`
    <app-page-header title="${names.pascalPlural}" description="Generated ${type} feature.">
      ${newButton}
    </app-page-header>

    @if (store.failed()) {
      <app-error-state [message]="store.error() ?? 'Failed to load ${names.kebabPlural}'" (retry)="store.load()" />
    } @else {
      <app-data-table
        [rows]="store.entities()"
        [columns]="columns"
        [loading]="store.loading()"
      />
    }${dialog}
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ${names.pascalPlural}ListPage implements OnInit {
  readonly store = inject(${names.pascalPlural}Store);

  columns: DataTableColumn[] = [
    { field: 'name', header: 'Name' },
    { field: 'createdAt', header: 'Created' },
  ];

  ngOnInit() {
    this.store.load();
  }
}
`;
}

function modelTemplate(names) {
  return `export interface ${names.pascalSingular} {
  id: string;
  name: string;
  createdAt: Date;
}

export interface Create${names.pascalSingular}Dto {
  name: string;
}
`;
}

function apiTemplate(names) {
  return `import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { Create${names.pascalSingular}Dto, ${names.pascalSingular} } from '../models/${names.kebabSingular}.model';

let ${names.camelPlural}: ${names.pascalSingular}[] = [
  {
    id: '${names.kebabSingular}_001',
    name: 'Example ${names.pascalSingular}',
    createdAt: new Date(),
  },
];

@Injectable({ providedIn: 'root' })
export class ${names.pascalPlural}Api {
  list(): Observable<${names.pascalSingular}[]> {
    return of(${names.camelPlural}).pipe(delay(200));
  }

  create(dto: Create${names.pascalSingular}Dto): Observable<${names.pascalSingular}> {
    const item: ${names.pascalSingular} = {
      id: '${names.kebabSingular}_' + Date.now(),
      name: dto.name,
      createdAt: new Date(),
    };

    ${names.camelPlural} = [item, ...${names.camelPlural}];
    return of(item).pipe(delay(200));
  }
}
`;
}

function storeTemplate(names) {
  return `import { inject } from '@angular/core';
import { patchState, signalStore, withMethods } from '@ngrx/signals';
import { addEntity, setAllEntities, withEntities } from '@ngrx/signals/entities';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { catchError, EMPTY, pipe, switchMap, tap } from 'rxjs';
import { withDialogState } from '../../../shared/store/with-dialog-state';
import { withRequestState } from '../../../shared/store/with-request-state';
import { Create${names.pascalSingular}Dto, ${names.pascalSingular} } from '../models/${names.kebabSingular}.model';
import { ${names.pascalPlural}Api } from './${names.kebabPlural}.api';

export const ${names.pascalPlural}Store = signalStore(
  withEntities<${names.pascalSingular}>(),
  withRequestState(),
  withDialogState(),
  withMethods((store, api = inject(${names.pascalPlural}Api)) => ({
    load: rxMethod<void>(
      pipe(
        tap(() => store.setLoading()),
        switchMap(() =>
          api.list().pipe(
            tap((items) => {
              patchState(store, setAllEntities(items));
              store.setSuccess();
            }),
            catchError(() => {
              store.setError('Failed to load ${names.kebabPlural}');
              return EMPTY;
            })
          )
        )
      )
    ),

    create: rxMethod<Create${names.pascalSingular}Dto>(
      pipe(
        tap(() => store.setLoading()),
        switchMap((dto) =>
          api.create(dto).pipe(
            tap((item) => {
              patchState(store, addEntity(item));
              store.closeDialog();
              store.setSuccess();
            }),
            catchError(() => {
              store.setError('Failed to create ${names.kebabSingular}');
              return EMPTY;
            })
          )
        )
      )
    ),
  }))
);
`;
}

function formTemplate(names) {
  return `import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { AppButtonComponent } from '../../../shared/ui/button/button.component';
import { AppFormFieldComponent } from '../../../shared/ui/form-field/form-field.component';
import { Create${names.pascalSingular}Dto } from '../models/${names.kebabSingular}.model';

@Component({
  selector: 'app-${names.kebabSingular}-form',
  standalone: true,
  imports: [ReactiveFormsModule, InputTextModule, AppButtonComponent, AppFormFieldComponent],
  template: \`
    <form [formGroup]="form" class="grid gap-4" (ngSubmit)="submit()">
      <app-form-field label="Name" [control]="form.controls.name">
        <input pInputText formControlName="name" class="w-full" />
      </app-form-field>

      <footer class="flex justify-end gap-2">
        <app-button label="Cancel" intent="secondary" (clicked)="cancelled.emit()" />
        <app-button label="Save" icon="pi pi-check" [loading]="saving()" (clicked)="submit()" />
      </footer>
    </form>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ${names.pascalSingular}FormComponent {
  saving = input(false);
  submitted = output<Create${names.pascalSingular}Dto>();
  cancelled = output<void>();

  form = new FormGroup({
    name: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.submitted.emit(this.form.getRawValue());
    this.form.reset();
  }
}
`;
}

