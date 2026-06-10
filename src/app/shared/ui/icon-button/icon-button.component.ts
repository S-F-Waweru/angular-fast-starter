import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { ButtonIntent } from '../button/button.component';

@Component({
  selector: 'app-icon-button',
  standalone: true,
  imports: [ButtonModule, TooltipModule],
  template: `
    <p-button
      [icon]="icon()"
      [severity]="severity()"
      [outlined]="intent() === 'secondary'"
      [text]="intent() === 'ghost'"
      [rounded]="true"
      [disabled]="disabled()"
      [loading]="loading()"
      type="button"
      [ariaLabel]="label()"
      [pTooltip]="label()"
      tooltipPosition="bottom"
      (onClick)="clicked.emit()"
    />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppIconButtonComponent {
  label = input.required<string>();
  icon = input.required<string>();
  intent = input<ButtonIntent>('ghost');
  disabled = input(false);
  loading = input(false);
  clicked = output<void>();

  severity = computed(() => {
    if (this.intent() === 'danger') return 'danger';
    if (this.intent() === 'secondary') return 'secondary';
    return undefined;
  });
}
