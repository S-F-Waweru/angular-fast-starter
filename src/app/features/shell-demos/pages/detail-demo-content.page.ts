import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-detail-demo-overview-page',
  standalone: true,
  template: `
    <section class="grid gap-4 lg:grid-cols-[1fr_18rem]">
      <article class="fast-panel p-4">
        <h2 class="text-base font-semibold text-color">Northstar Logistics</h2>
        <p class="mt-2 text-sm leading-6 text-muted-color">
          Enterprise account with active onboarding, executive sponsorship, and quarterly reporting.
        </p>

        <dl class="mt-4 grid gap-3 sm:grid-cols-3">
          @for (item of summary; track item.label) {
            <div class="fast-muted-panel p-3">
              <dt class="text-xs uppercase text-muted-color">{{ item.label }}</dt>
              <dd class="mt-1 text-sm font-semibold text-color">{{ item.value }}</dd>
            </div>
          }
        </dl>
      </article>

      <aside class="fast-panel p-4">
        <h3 class="text-sm font-semibold text-color">Owner</h3>
        <p class="mt-3 text-sm text-color">Maya Chen</p>
        <p class="text-xs text-muted-color">Customer Success</p>
      </aside>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailDemoOverviewPage {
  summary = [
    { label: 'ARR', value: '$240k' },
    { label: 'Seats', value: '186' },
    { label: 'Health', value: 'Strong' },
  ];
}

@Component({
  selector: 'app-detail-demo-activity-page',
  standalone: true,
  template: `
    <article class="fast-panel p-4">
      <h2 class="text-base font-semibold text-color">Activity</h2>
      <div class="mt-4 grid gap-3">
        @for (event of activity; track event.title) {
          <div class="grid gap-1 border-l-2 pl-3" style="border-color: var(--brand);">
            <p class="text-sm font-medium text-color">{{ event.title }}</p>
            <p class="text-xs text-muted-color">{{ event.time }}</p>
          </div>
        }
      </div>
    </article>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailDemoActivityPage {
  activity = [
    { title: 'Quarterly review booked', time: 'Today, 09:30' },
    { title: 'Implementation checklist updated', time: 'Yesterday, 16:20' },
    { title: 'New billing contact added', time: 'Monday, 11:45' },
  ];
}

@Component({
  selector: 'app-detail-demo-billing-page',
  standalone: true,
  template: `
    <section class="grid gap-4 md:grid-cols-2">
      <article class="fast-panel p-4">
        <p class="text-sm text-muted-color">Plan</p>
        <p class="mt-2 text-xl font-semibold text-color">Enterprise Annual</p>
        <p class="mt-1 text-sm text-muted-color">Renews on 12 Dec 2026</p>
      </article>

      <article class="fast-panel p-4">
        <p class="text-sm text-muted-color">Invoice status</p>
        <p class="mt-2 text-xl font-semibold text-color">Current</p>
        <p class="mt-1 text-sm text-muted-color">Next invoice estimated at $20k</p>
      </article>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailDemoBillingPage {}
