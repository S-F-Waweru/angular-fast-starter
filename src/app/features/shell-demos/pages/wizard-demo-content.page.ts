import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-wizard-demo-content-page',
  standalone: true,
  template: `
    <section class="grid gap-4 md:grid-cols-[1fr_18rem]">
      <article class="fast-panel p-5">
        <h1 class="text-xl font-semibold text-color">Campaign setup</h1>
        <p class="mt-2 text-sm leading-6 text-muted-color">
          The wizard shell keeps progress visible while the form content changes inside the center area.
        </p>

        <div class="mt-5 grid gap-3">
          @for (field of fields; track field.label) {
            <div class="fast-muted-panel flex items-center justify-between gap-3 px-3 py-2">
              <span class="text-sm text-color">{{ field.label }}</span>
              <span class="text-xs font-medium text-primary">{{ field.value }}</span>
            </div>
          }
        </div>
      </article>

      <aside class="fast-panel p-4">
        <h2 class="text-sm font-semibold text-color">Readiness</h2>
        <div class="mt-4 grid gap-2">
          @for (item of readiness; track item) {
            <div class="flex items-center gap-2 text-sm text-color">
              <i class="pi pi-check text-primary"></i>
              <span>{{ item }}</span>
            </div>
          }
        </div>
      </aside>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WizardDemoContentPage {
  fields = [
    { label: 'Audience', value: 'Enterprise' },
    { label: 'Schedule', value: 'Weekly' },
    { label: 'Owner', value: 'Operations' },
  ];

  readiness = ['Required fields complete', 'Rules validated', 'Preview generated'];
}
