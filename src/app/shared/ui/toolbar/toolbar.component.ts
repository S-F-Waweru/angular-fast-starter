import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  template: `
    <section class="fast-panel mb-4 flex flex-wrap items-center justify-between gap-3 p-3">
      <ng-content />
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppToolbarComponent {}
