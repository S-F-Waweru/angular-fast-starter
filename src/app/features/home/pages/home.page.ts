import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectConfigService } from '../../../core/config/project-config.service';
import { AppButtonComponent } from '../../../shared/ui/button/button.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterLink, AppButtonComponent],
  template: `
    <section class="mx-auto grid max-w-7xl gap-10 px-6 py-12 lg:grid-cols-[1fr_28rem] lg:items-center lg:py-16">
      <div>
        <p class="mb-3 text-sm font-semibold uppercase text-primary">{{ brand().shortName }}</p>
        <h1 class="fast-gradient-text max-w-3xl text-4xl font-semibold leading-tight md:text-5xl">
          {{ brand().name }} starter for fast feature delivery.
        </h1>
        <p class="mt-5 max-w-2xl text-lg text-muted-color">
          {{ brand().tagline }}
        </p>

        <div class="mt-8 flex flex-wrap gap-3">
          <a routerLink="/app/dashboard">
            <app-button label="Open dashboard" icon="pi pi-arrow-right" />
          </a>
          <a routerLink="/app/customers">
            <app-button label="View customers" icon="pi pi-users" intent="secondary" />
          </a>
        </div>
      </div>

      <section class="fast-panel fast-gradient-surface p-4">
        <div class="fast-panel p-4">
          <div class="mb-4 flex items-center justify-between">
            <div>
              <p class="font-semibold text-color">Starter structure</p>
              <p class="text-sm text-muted-color">Everything has a place.</p>
            </div>
            <i class="pi pi-sitemap text-primary"></i>
          </div>

          <div class="grid gap-2 text-sm">
            @for (item of structure; track item) {
              <div class="fast-muted-panel px-3 py-2 font-mono text-muted-color">{{ item }}</div>
            }
          </div>
        </div>
      </section>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {
  private readonly project = inject(ProjectConfigService);

  brand = computed(() => this.project.brand());

  structure = [
    'core/api',
    'shared/shells',
    'shared/ui',
    'shared/store',
    'features/customers',
  ];
}
