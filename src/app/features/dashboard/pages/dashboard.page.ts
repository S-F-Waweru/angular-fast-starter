import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AppPageHeaderComponent } from '../../../shared/ui/page-header/page-header.component';
import { AppLoadingStateComponent } from '../../../shared/ui/loading-state/loading-state.component';

interface Metric {
  label: string;
  value: string;
  delta: string;
  icon: string;
}

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [AppPageHeaderComponent, AppLoadingStateComponent],
  template: `
    <app-page-header title="Dashboard" description="A shell-ready workspace overview." />

    <section class="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      @for (metric of metrics; track metric.label) {
        <article class="fast-panel p-4">
          <div class="flex items-center justify-between gap-3">
            <p class="text-sm text-muted-color">{{ metric.label }}</p>
            <i class="text-primary" [class]="metric.icon"></i>
          </div>
          <p class="mt-3 text-2xl font-semibold text-color">{{ metric.value }}</p>
          <p class="mt-1 text-sm text-green-600">{{ metric.delta }}</p>
        </article>
      }
    </section>

    <section class="fast-panel mt-6 p-5">
      <div class="mb-5 flex items-center justify-between gap-4">
        <div>
          <h2 class="text-lg font-semibold text-color">Revenue trend</h2>
          <p class="text-sm text-muted-color">Deferred area for charts, reports, and heavy widgets.</p>
        </div>
      </div>

      @defer {
        <div class="fast-muted-panel grid h-72 items-end gap-3 p-4" style="grid-template-columns: repeat(12, minmax(0, 1fr));">
          @for (bar of chartBars; track bar.month) {
            <div class="grid h-full items-end gap-2">
              <div class="bg-primary" [style.height.%]="bar.value" style="border-radius: var(--fast-radius-sm) var(--fast-radius-sm) 0 0;"></div>
              <p class="text-center text-xs text-muted-color">{{ bar.month }}</p>
            </div>
          }
        </div>
      } @placeholder {
        <app-loading-state label="Loading chart" />
      }
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardPage {
  metrics: Metric[] = [
    { label: 'Customers', value: '1,284', delta: '+12.4%', icon: 'pi pi-users' },
    { label: 'Orders', value: '342', delta: '+8.1%', icon: 'pi pi-shopping-cart' },
    { label: 'Revenue', value: '$82.4k', delta: '+15.7%', icon: 'pi pi-wallet' },
    { label: 'Tickets', value: '26', delta: '+3.2%', icon: 'pi pi-inbox' },
  ];

  chartBars = [
    { month: 'Jan', value: 44 },
    { month: 'Feb', value: 56 },
    { month: 'Mar', value: 38 },
    { month: 'Apr', value: 72 },
    { month: 'May', value: 63 },
    { month: 'Jun', value: 84 },
    { month: 'Jul', value: 70 },
    { month: 'Aug', value: 92 },
    { month: 'Sep', value: 76 },
    { month: 'Oct', value: 88 },
    { month: 'Nov', value: 95 },
    { month: 'Dec', value: 100 },
  ];
}
