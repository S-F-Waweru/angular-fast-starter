import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@Component({
  selector: 'app-loading-state',
  standalone: true,
  imports: [ProgressSpinnerModule],
  template: `
    <div class="grid min-h-40 place-items-center px-4 py-8 text-center">
      <div>
        <p-progressSpinner ariaLabel="Loading" styleClass="size-10" />
        <p class="mt-3 text-sm text-muted-color">{{ label() }}</p>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppLoadingStateComponent {
  label = input('Loading');
}

