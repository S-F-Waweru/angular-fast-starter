import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AppPageHeaderComponent } from '../../ui/page-header/page-header.component';

export interface DetailNavItem {
  label: string;
  route: string;
}

@Component({
  selector: 'app-detail-shell',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet, AppPageHeaderComponent],
  template: `
    <app-page-header [title]="title()" [description]="description()" />

    <div class="grid gap-6 lg:grid-cols-[14rem_1fr]">
      <aside>
        <nav class="fast-panel grid gap-1 p-2">
          @for (item of navItems(); track item.route) {
            <a
              [routerLink]="item.route"
              routerLinkActive="fast-nav-link-active"
              class="fast-nav-link"
            >
              {{ item.label }}
            </a>
          }
        </nav>
      </aside>

      <section class="min-w-0">
        <router-outlet />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailShellComponent {
  title = input('Detail');
  description = input<string>();
  navItems = input<DetailNavItem[]>([]);
}
