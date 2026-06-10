import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppButtonComponent } from '../../ui/button/button.component';

export interface WizardStep {
  label: string;
  value: string;
}

@Component({
  selector: 'app-wizard-shell',
  standalone: true,
  imports: [RouterOutlet, AppButtonComponent],
  template: `
    <main class="fast-app-bg mx-auto grid min-h-full max-w-5xl grid-rows-[auto_1fr_auto] px-6">
      <header class="fast-border-b py-4">
        <div class="flex flex-wrap items-center gap-2">
          @for (step of steps(); track step.value; let index = $index) {
            <div class="flex items-center gap-2">
              <span
                class="grid size-8 place-items-center rounded-full text-sm font-semibold"
                [class.bg-primary]="index <= currentStep()"
                [class.text-primary-contrast]="index <= currentStep()"
                [class.bg-surface-100]="index > currentStep()"
                [class.text-muted-color]="index > currentStep()"
              >
                {{ index + 1 }}
              </span>
              <span class="text-sm font-medium text-color">{{ step.label }}</span>
            </div>
          }
        </div>
      </header>

      <section class="py-8">
        <router-outlet />
      </section>

      <footer class="fast-border-t flex justify-between py-4">
        <app-button label="Back" intent="secondary" (clicked)="previous.emit()" />
        <app-button label="Continue" icon="pi pi-arrow-right" (clicked)="next.emit()" />
      </footer>
    </main>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WizardShellComponent {
  steps = input<WizardStep[]>([]);
  currentStep = input(0);
  previous = output<void>();
  next = output<void>();
}
