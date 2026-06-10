import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { TagModule } from 'primeng/tag';

export type StatusTone = 'success' | 'info' | 'warn' | 'danger' | 'secondary';

@Component({
  selector: 'app-status-badge',
  standalone: true,
  imports: [TagModule],
  template: `<p-tag [value]="label()" [severity]="tone()" />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppStatusBadgeComponent {
  value = input.required<string>();

  label = computed(() => this.value().replaceAll('-', ' '));

  tone = computed<StatusTone>(() => {
    const value = this.value();

    if (['active', 'paid', 'approved', 'success'].includes(value)) return 'success';
    if (['pending', 'draft', 'review'].includes(value)) return 'warn';
    if (['blocked', 'inactive', 'failed', 'danger'].includes(value)) return 'danger';
    return 'secondary';
  });
}
