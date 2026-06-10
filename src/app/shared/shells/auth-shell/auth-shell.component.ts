import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ProjectConfigService } from '../../../core/config/project-config.service';

@Component({
  selector: 'app-auth-shell',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  template: `
    <main class="fast-app-bg grid min-h-screen place-items-center px-4 py-10">
      <section class="w-full max-w-md">
        <a routerLink="/" class="mb-6 flex items-center justify-center gap-2 font-semibold">
          <span class="fast-brand-mark">{{ brand().logoText }}</span>
          {{ brand().name }}
        </a>

        <div class="fast-panel p-6">
          <router-outlet />
        </div>
      </section>
    </main>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthShellComponent {
  private readonly project = inject(ProjectConfigService);
  brand = computed(() => this.project.brand());
}
