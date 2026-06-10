import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';
import { ButtonModule } from 'primeng/button';

export type ButtonIntent = 'primary' | 'secondary' | 'danger' | 'ghost';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [ButtonModule],
  host: {
    '[class.block]': 'fullWidth()',
    '[class.w-full]': 'fullWidth()',
  },
  template: `
    <p-button
      [label]="label()"
      [icon]="icon()"
      [severity]="severity()"
      [outlined]="intent() === 'secondary'"
      [text]="intent() === 'ghost'"
      [disabled]="disabled()"
      [loading]="loading()"
      [size]="size()"
      [styleClass]="buttonClass()"
      [type]="type()"
      (onClick)="clicked.emit()"
    />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppButtonComponent {
  label = input.required<string>();
  icon = input<string>();
  intent = input<ButtonIntent>('primary');
  disabled = input(false);
  loading = input(false);
  fullWidth = input(false);
  size = input<'small' | 'large' | undefined>(undefined);
  styleClass = input('');
  type = input<'button' | 'submit' | 'reset'>('button');
  clicked = output<void>();

  buttonClass = computed(() => [this.fullWidth() ? 'w-full justify-center' : '', this.styleClass()].filter(Boolean).join(' '));

  severity = computed(() => {
    if (this.intent() === 'danger') return 'danger';
    if (this.intent() === 'secondary') return 'secondary';
    return undefined;
  });
}
