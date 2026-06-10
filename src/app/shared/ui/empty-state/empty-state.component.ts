import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-empty-state',
  standalone: true,
  template: `
    <div class="grid min-h-40 place-items-center px-4 py-8 text-center">
      <div>
        <div class="mx-auto mb-3 grid size-10 place-items-center bg-surface-100 text-muted-color" style="border-radius: var(--fast-radius-pill);">
          <i class="pi pi-inbox"></i>
        </div>
        <p class="font-medium text-color">{{ title() }}</p>
        @if (message()) {
          <p class="mt-1 text-sm text-muted-color">{{ message() }}</p>
        }
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppEmptyStateComponent {
  title = input('No records found');
  message = input<string>();
}
