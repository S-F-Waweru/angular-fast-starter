import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { ProjectConfigService } from '../../../core/config/project-config.service';
import { DesignTokenService } from '../../../core/design-system/design-token.service';
import { LayoutPreferenceService } from '../../../core/layout/layout-preference.service';
import { AppButtonComponent } from '../../../shared/ui/button/button.component';
import { DesignTokenPanelComponent } from '../../../shared/ui/design-token-panel/design-token-panel.component';
import { AppPageHeaderComponent } from '../../../shared/ui/page-header/page-header.component';

@Component({
  selector: 'app-settings-page',
  standalone: true,
  imports: [AppPageHeaderComponent, DesignTokenPanelComponent, AppButtonComponent],
  template: `
    <app-page-header title="Settings" description="Default framework settings for branding, tokens, and table behavior." />

    <section class="grid gap-6 xl:grid-cols-[1fr_22rem]">
      <div class="grid gap-6">
        <article class="fast-panel p-5">
          <div class="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h2 class="text-lg font-semibold text-color">Design Tokens</h2>
              <p class="mt-1 text-sm text-muted-color">
                Change theme, radius, gradient, and density from one section.
              </p>
            </div>
            <div class="fast-radius-preview" aria-hidden="true"></div>
          </div>

          <div class="mt-5">
            <app-design-token-panel />
          </div>

          <dl class="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            @for (token of activeTokens(); track token.label) {
              <div class="fast-muted-panel p-3">
                <dt class="text-xs uppercase text-muted-color">{{ token.label }}</dt>
                <dd class="mt-1 font-medium capitalize text-color">{{ token.value }}</dd>
              </div>
            }
          </dl>
        </article>

        <article class="fast-panel p-5">
          <div class="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h2 class="text-lg font-semibold text-color">Layout Preferences</h2>
              <p class="mt-1 text-sm text-muted-color">
                Collapse the sidebar when you need more working space on smaller monitors.
              </p>
            </div>

            <app-button
              [label]="sidebarCollapsed() ? 'Expand sidebar' : 'Collapse sidebar'"
              [icon]="sidebarCollapsed() ? 'pi pi-angle-double-right' : 'pi pi-angle-double-left'"
              intent="secondary"
              (clicked)="layout.toggleSidebar()"
            />
          </div>

          <dl class="mt-6 grid gap-3 md:grid-cols-2">
            <div class="fast-muted-panel p-3">
              <dt class="text-xs uppercase text-muted-color">Sidebar</dt>
              <dd class="mt-1 font-medium text-color">{{ sidebarCollapsed() ? 'Collapsed' : 'Expanded' }}</dd>
            </div>
            <div class="fast-muted-panel p-3">
              <dt class="text-xs uppercase text-muted-color">Mode</dt>
              <dd class="mt-1 font-medium capitalize text-color">{{ tokens.colorScheme() }}</dd>
            </div>
          </dl>
        </article>

        <article class="fast-panel p-5">
          <h2 class="text-lg font-semibold text-color">Token Classes</h2>
          <p class="mt-1 text-sm text-muted-color">
            Use these classes instead of repeating hard-coded border radius, card, gradient, and spacing styles.
          </p>

          <div class="mt-4 grid gap-2 sm:grid-cols-2 xl:grid-cols-3">
            @for (className of tokenClasses; track className) {
              <code class="fast-muted-panel px-3 py-2 text-sm text-muted-color">{{ className }}</code>
            }
          </div>
        </article>
      </div>

      <aside class="grid gap-6">
        <article class="fast-panel p-5">
          <h2 class="text-lg font-semibold text-color">Project Config</h2>
          <dl class="mt-4 grid gap-3 text-sm">
            <div class="fast-muted-panel p-3">
              <dt class="text-xs uppercase text-muted-color">Name</dt>
              <dd class="mt-1 font-medium text-color">{{ brand().name }}</dd>
            </div>
            <div class="fast-muted-panel p-3">
              <dt class="text-xs uppercase text-muted-color">Logo mark</dt>
              <dd class="mt-1 font-medium text-color">{{ brand().logoText }}</dd>
            </div>
            <div class="fast-muted-panel p-3">
              <dt class="text-xs uppercase text-muted-color">Workspace</dt>
              <dd class="mt-1 font-medium text-color">{{ workspaceName() }}</dd>
            </div>
          </dl>
        </article>

        <article class="fast-panel p-5">
          <h2 class="text-lg font-semibold text-color">Table Defaults</h2>
          <dl class="mt-4 grid gap-3 text-sm">
            <div class="fast-muted-panel p-3">
              <dt class="text-xs uppercase text-muted-color">Density</dt>
              <dd class="mt-1 font-medium capitalize text-color">{{ table().size }}</dd>
            </div>
            <div class="fast-muted-panel p-3">
              <dt class="text-xs uppercase text-muted-color">Page size</dt>
              <dd class="mt-1 font-medium text-color">{{ table().defaultPageSize }}</dd>
            </div>
            <div class="fast-muted-panel p-3">
              <dt class="text-xs uppercase text-muted-color">Options</dt>
              <dd class="mt-1 font-medium text-color">{{ table().pageSizeOptions.join(', ') }}</dd>
            </div>
          </dl>
        </article>
      </aside>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsPage {
  private readonly project = inject(ProjectConfigService);
  readonly tokens = inject(DesignTokenService);
  readonly layout = inject(LayoutPreferenceService);

  brand = computed(() => this.project.brand());
  table = computed(() => this.project.table());
  workspaceName = computed(() => this.project.workspaceName());

  activeTokens = computed(() => [
    { label: 'Mode', value: this.tokens.colorScheme() },
    { label: 'Theme', value: this.tokens.theme() },
    { label: 'Radius', value: this.tokens.radius() },
    { label: 'Gradient', value: this.tokens.gradient() },
    { label: 'Density', value: this.tokens.density() },
  ]);

  sidebarCollapsed = computed(() => this.layout.sidebarCollapsed());

  tokenClasses = [
    'fast-panel',
    'fast-muted-panel',
    'fast-page',
    'fast-brand-mark',
    'fast-gradient-text',
    'fast-gradient-surface',
    'fast-shell-layout',
    'fast-shell-content',
    'fast-shell-main',
    'fast-nav-link',
    'fast-nav-link-active',
    'fast-topbar',
    'fast-shell-panel',
    'fast-border-b',
    'fast-filter-bar',
    'fast-filter-control',
  ];
}
