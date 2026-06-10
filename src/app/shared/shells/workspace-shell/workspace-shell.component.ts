import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-workspace-shell',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  template: `
    <div class="fast-app-bg grid min-h-full lg:grid-cols-[18rem_1fr]">
      <aside class="fast-shell-panel">
        <section class="fast-shell-panel-header p-4">
          <p class="text-xs uppercase text-muted-color">Workspace</p>
          <p class="mt-1 font-semibold text-color">Acme Operations</p>
        </section>

        <nav class="grid gap-1 p-3">
          <a routerLink="./" class="fast-nav-link">
            Overview
          </a>
          <a routerLink="./members" class="fast-nav-link">
            Members
          </a>
          <a routerLink="./settings" class="fast-nav-link">
            Settings
          </a>
        </nav>
      </aside>

      <main class="fast-page min-w-0">
        <router-outlet />
      </main>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkspaceShellComponent {}
