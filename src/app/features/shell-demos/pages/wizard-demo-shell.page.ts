import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { WizardShellComponent, WizardStep } from '../../../shared/shells/wizard-shell/wizard-shell.component';

@Component({
  selector: 'app-wizard-demo-shell-page',
  standalone: true,
  imports: [WizardShellComponent],
  template: `
    <app-wizard-shell
      [steps]="steps"
      [currentStep]="currentStep()"
      (previous)="previous()"
      (next)="next()"
    />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WizardDemoShellPage {
  currentStep = signal(1);

  steps: WizardStep[] = [
    { label: 'Details', value: 'details' },
    { label: 'Rules', value: 'rules' },
    { label: 'Review', value: 'review' },
  ];

  previous() {
    this.currentStep.update((step) => Math.max(0, step - 1));
  }

  next() {
    this.currentStep.update((step) => Math.min(this.steps.length - 1, step + 1));
  }
}
