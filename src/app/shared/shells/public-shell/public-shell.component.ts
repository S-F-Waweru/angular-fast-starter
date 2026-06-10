import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ProjectConfigService } from '../../../core/config/project-config.service';
import { AppButtonComponent } from '../../ui/button/button.component';

@Component({
  selector: 'app-public-shell',
  standalone: true,
  imports: [RouterLink, RouterOutlet, AppButtonComponent],
  template: `
    <div class="fast-app-bg min-h-screen text-color">
      <header class="fast-topbar px-6 py-4">
        <nav class="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <a routerLink="/" class="flex items-center gap-2 font-semibold">
            <span class="fast-brand-mark">{{ brand().logoText }}</span>
            {{ brand().name }}
          </a>

          <div class="flex items-center gap-2">
            <a routerLink="/auth/login" class="fast-shell-link text-sm font-medium">Login</a>
            <app-button label="Open app" icon="pi pi-arrow-right" (clicked)="noop()" />
          </div>
        </nav>
      </header>

      <main>
        <router-outlet />
      </main>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PublicShellComponent {
  private readonly project = inject(ProjectConfigService);
  brand = computed(() => this.project.brand());

  noop() {
    window.location.href = '/app/dashboard';
  }
}
