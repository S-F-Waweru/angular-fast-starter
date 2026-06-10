import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppPageHeaderComponent } from '../../ui/page-header/page-header.component';

@Component({
  selector: 'app-report-shell',
  standalone: true,
  imports: [RouterOutlet, AppPageHeaderComponent],
  template: `
    <main class="fast-app-bg fast-page min-h-full">
      <app-page-header [title]="title()" [description]="description()">
        <ng-content select="[actions]" />
      </app-page-header>

      <router-outlet />
    </main>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReportShellComponent {
  title = input('Report');
  description = input<string>();
}
