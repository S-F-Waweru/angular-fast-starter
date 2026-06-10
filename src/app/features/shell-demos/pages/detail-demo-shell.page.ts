import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DetailNavItem, DetailShellComponent } from '../../../shared/shells/detail-shell/detail-shell.component';

@Component({
  selector: 'app-detail-demo-shell-page',
  standalone: true,
  imports: [DetailShellComponent],
  template: `
    <app-detail-shell
      title="Account Detail"
      description="A focused record workspace with local navigation."
      [navItems]="navItems"
    />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailDemoShellPage {
  navItems: DetailNavItem[] = [
    { label: 'Overview', route: './overview' },
    { label: 'Activity', route: './activity' },
    { label: 'Billing', route: './billing' },
  ];
}
