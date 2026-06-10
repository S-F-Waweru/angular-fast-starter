import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-report-demo-content-page',
  standalone: true,
  template: `
    <section class="grid gap-4">
      <div class="grid gap-3 md:grid-cols-4">
        @for (metric of metrics; track metric.label) {
          <article class="fast-panel p-4">
            <p class="text-sm text-muted-color">{{ metric.label }}</p>
            <p class="mt-2 text-2xl font-semibold text-color">{{ metric.value }}</p>
            <p class="mt-1 text-xs text-primary">{{ metric.delta }}</p>
          </article>
        }
      </div>

      <article class="fast-panel p-5">
        <div class="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 class="text-base font-semibold text-color">Regional revenue</h2>
            <p class="mt-1 text-sm text-muted-color">Compact report rows with stable spacing.</p>
          </div>
        </div>

        <div class="mt-5 grid gap-2">
          @for (region of regions; track region.name) {
            <div class="grid grid-cols-[1fr_6rem_5rem] items-center gap-3 rounded-md px-3 py-2 text-sm" style="background: var(--fast-muted-panel-background);">
              <span class="truncate text-color">{{ region.name }}</span>
              <span class="text-right font-medium text-color">{{ region.revenue }}</span>
              <span class="text-right text-primary">{{ region.share }}</span>
            </div>
          }
        </div>
      </article>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReportDemoContentPage {
  metrics = [
    { label: 'Revenue', value: '$82.4k', delta: '+15.7%' },
    { label: 'Pipeline', value: '$410k', delta: '+9.4%' },
    { label: 'Retention', value: '94%', delta: '+2.1%' },
    { label: 'Margin', value: '38%', delta: '+4.8%' },
  ];

  regions = [
    { name: 'North America', revenue: '$38.2k', share: '46%' },
    { name: 'Europe', revenue: '$24.8k', share: '30%' },
    { name: 'Middle East', revenue: '$11.4k', share: '14%' },
    { name: 'Africa', revenue: '$8.0k', share: '10%' },
  ];
}
