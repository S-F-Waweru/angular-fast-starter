import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { TooltipModule } from 'primeng/tooltip';
import { AuthStore } from '../../../core/auth/auth.store';
import { ProjectConfigService } from '../../../core/config/project-config.service';
import { DesignTokenService } from '../../../core/design-system/design-token.service';
import { LayoutPreferenceService } from '../../../core/layout/layout-preference.service';
import { AppIconButtonComponent } from '../../ui/icon-button/icon-button.component';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet, TooltipModule, AppIconButtonComponent],
  template: `
    <div class="fast-app-bg fast-shell-grid fast-shell-layout grid">
      <aside class="fast-sidebar hidden lg:block">
        <div class="fast-sidebar-header px-5 py-4">
          <div class="flex items-center justify-between gap-2">
            <a
              routerLink="/app/dashboard"
              class="flex min-w-0 items-center gap-2 font-semibold"
              [class.justify-center]="sidebarCollapsed()"
              [pTooltip]="sidebarCollapsed() ? brand().name : ''"
              [attr.aria-label]="sidebarCollapsed() ? brand().name : null"
              tooltipPosition="right"
            >
              <span class="fast-brand-mark shrink-0">{{ brand().logoText }}</span>
              @if (!sidebarCollapsed()) {
                <span class="truncate">{{ brand().name }}</span>
              }
            </a>

            @if (!sidebarCollapsed()) {
              <app-icon-button
                label="Collapse sidebar"
                icon="pi pi-angle-double-left"
                intent="ghost"
                (clicked)="layout.toggleSidebar()"
              />
            }
          </div>

          @if (sidebarCollapsed()) {
            <div class="mt-3 flex justify-center">
              <app-icon-button
                label="Expand sidebar"
                icon="pi pi-angle-double-right"
                intent="ghost"
                (clicked)="layout.toggleSidebar()"
              />
            </div>
          }
        </div>

        <nav class="grid gap-1 p-3">
          @for (item of navigation(); track item.route) {
            <a
              [routerLink]="item.route"
              routerLinkActive="fast-nav-link-active"
              class="fast-nav-link"
              [class.justify-center]="sidebarCollapsed()"
              [pTooltip]="sidebarCollapsed() ? item.label : ''"
              [attr.aria-label]="sidebarCollapsed() ? item.label : null"
              tooltipPosition="right"
            >
              <i [class]="item.icon"></i>
              @if (!sidebarCollapsed()) {
                <span>{{ item.label }}</span>
              }
            </a>
          }
        </nav>
      </aside>

      <div class="fast-shell-content">
        <header class="fast-topbar z-10 shrink-0 px-4 py-3 lg:px-6">
          <div class="flex flex-wrap items-center justify-between gap-4">
            <div class="min-w-0">
              <p class="text-sm font-medium text-color">{{ displayName() }}</p>
              <p class="truncate text-xs text-muted-color">{{ workspaceName() }}</p>
            </div>

            <div class="flex flex-wrap items-center gap-3">
              <app-icon-button
                [label]="colorScheme() === 'dark' ? 'Use light mode' : 'Use dark mode'"
                [icon]="colorScheme() === 'dark' ? 'pi pi-sun' : 'pi pi-moon'"
                intent="secondary"
                (clicked)="designTokens.toggleColorScheme()"
              />
              <a routerLink="/app/settings" class="fast-shell-link text-sm font-medium">Settings</a>
              <a routerLink="/" class="fast-shell-link text-sm font-medium">Public site</a>
            </div>
          </div>

          <nav class="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4 lg:hidden">
            @for (item of navigation(); track item.route) {
              <a
                [routerLink]="item.route"
                routerLinkActive="fast-nav-link-active"
                class="fast-nav-link justify-center"
              >
                <i [class]="item.icon"></i>
                <span class="hidden sm:inline">{{ item.label }}</span>
              </a>
            }
          </nav>
        </header>

        <main class="fast-page fast-shell-main">
          <router-outlet />
        </main>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppShellComponent {
  private readonly auth = inject(AuthStore);
  private readonly project = inject(ProjectConfigService);
  readonly designTokens = inject(DesignTokenService);
  readonly layout = inject(LayoutPreferenceService);

  displayName = computed(() => this.auth.displayName());
  brand = computed(() => this.project.brand());
  navigation = computed(() => this.project.navigation());
  workspaceName = computed(() => this.project.workspaceName());
  colorScheme = computed(() => this.designTokens.colorScheme());
  sidebarCollapsed = computed(() => this.layout.sidebarCollapsed());
}
