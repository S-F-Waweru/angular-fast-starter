import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { AppButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-error-state',
  standalone: true,
  imports: [AppButtonComponent],
  template: `
    <div class="grid min-h-40 place-items-center px-4 py-8 text-center">
      <div>
        <div class="mx-auto mb-3 grid size-10 place-items-center bg-red-50 text-red-600" style="border-radius: var(--fast-radius-pill);">
          <i class="pi pi-exclamation-triangle"></i>
        </div>
        <p class="font-medium text-color">{{ title() }}</p>
        <p class="mt-1 text-sm text-muted-color">{{ message() }}</p>
        @if (retryable()) {
          <div class="mt-4">
            <app-button label="Retry" icon="pi pi-refresh" intent="secondary" (clicked)="retry.emit()" />
          </div>
        }
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppErrorStateComponent {
  title = input('Unable to load data');
  message = input('Please try again.');
  retryable = input(true);
  retry = output<void>();
}
