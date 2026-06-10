import { ChangeDetectionStrategy, Component } from '@angular/core';

const workspaceStats = [
  { label: 'Active projects', value: '12' },
  { label: 'Open reviews', value: '7' },
  { label: 'SLA risk', value: '2' },
];

@Component({
  selector: 'app-workspace-demo-overview-page',
  standalone: true,
  template: `
    <section class="grid gap-4">
      <div>
        <h1 class="text-xl font-semibold text-color">Workspace overview</h1>
        <p class="mt-1 text-sm text-muted-color">Team-level work, health, and ownership.</p>
      </div>

      <div class="grid gap-3 md:grid-cols-3">
        @for (stat of stats; track stat.label) {
          <article class="fast-panel p-4">
            <p class="text-sm text-muted-color">{{ stat.label }}</p>
            <p class="mt-2 text-2xl font-semibold text-color">{{ stat.value }}</p>
          </article>
        }
      </div>

      <article class="fast-panel p-4">
        <h2 class="text-base font-semibold text-color">Operations queue</h2>
        <div class="mt-4 grid gap-2">
          @for (item of queue; track item) {
            <div class="fast-muted-panel flex items-center justify-between gap-3 px-3 py-2">
              <span class="text-sm text-color">{{ item }}</span>
              <span class="text-xs font-medium text-primary">Open</span>
            </div>
          }
        </div>
      </article>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkspaceDemoOverviewPage {
  stats = workspaceStats;
  queue = ['Renewal accounts', 'Implementation review', 'Data quality pass'];
}

@Component({
  selector: 'app-workspace-demo-members-page',
  standalone: true,
  template: `
    <section class="grid gap-4">
      <div>
        <h1 class="text-xl font-semibold text-color">Members</h1>
        <p class="mt-1 text-sm text-muted-color">Compact team list inside the workspace shell.</p>
      </div>

      <article class="fast-panel overflow-hidden">
        @for (member of members; track member.email) {
          <div class="flex items-center justify-between gap-3 border-b px-4 py-3 last:border-b-0" style="border-color: var(--fast-panel-border);">
            <div class="min-w-0">
              <p class="truncate text-sm font-medium text-color">{{ member.name }}</p>
              <p class="truncate text-xs text-muted-color">{{ member.email }}</p>
            </div>
            <span class="text-xs font-medium text-primary">{{ member.role }}</span>
          </div>
        }
      </article>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkspaceDemoMembersPage {
  members = [
    { name: 'Maya Chen', email: 'maya@example.com', role: 'Owner' },
    { name: 'Jon Bell', email: 'jon@example.com', role: 'Admin' },
    { name: 'Amina Stone', email: 'amina@example.com', role: 'Member' },
  ];
}

@Component({
  selector: 'app-workspace-demo-settings-page',
  standalone: true,
  template: `
    <section class="grid gap-4">
      <div>
        <h1 class="text-xl font-semibold text-color">Workspace settings</h1>
        <p class="mt-1 text-sm text-muted-color">Settings grouped as compact operational rows.</p>
      </div>

      <article class="fast-panel p-4">
        <div class="grid gap-3">
          @for (setting of settings; track setting.label) {
            <div class="fast-muted-panel flex items-center justify-between gap-3 px-3 py-2">
              <div>
                <p class="text-sm font-medium text-color">{{ setting.label }}</p>
                <p class="text-xs text-muted-color">{{ setting.description }}</p>
              </div>
              <span class="text-xs font-medium text-primary">{{ setting.value }}</span>
            </div>
          }
        </div>
      </article>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkspaceDemoSettingsPage {
  settings = [
    { label: 'Approval mode', description: 'Controls review handoff', value: 'Team' },
    { label: 'Default density', description: 'Applies to workspace tables', value: 'Compact' },
    { label: 'Notifications', description: 'Workspace-level alerts', value: 'Enabled' },
  ];
}
