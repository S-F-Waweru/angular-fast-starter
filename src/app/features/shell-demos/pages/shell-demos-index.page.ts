import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppPageHeaderComponent } from '../../../shared/ui/page-header/page-header.component';

interface ShellDemoCard {
  title: string;
  description: string;
  icon: string;
  route: string;
}

@Component({
  selector: 'app-shell-demos-index-page',
  standalone: true,
  imports: [RouterLink, AppPageHeaderComponent],
  template: `
    <app-page-header title="Shell Demos" description="Reusable layouts for common application situations." />

    <section class="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      @for (demo of demos; track demo.route) {
        <a [routerLink]="demo.route" class="fast-panel p-4 transition hover:-translate-y-0.5 hover:shadow-lg">
          <div class="flex items-center justify-between gap-3">
            <span class="grid size-10 place-items-center rounded-md bg-primary-50 text-primary">
              <i [class]="demo.icon"></i>
            </span>
            <i class="pi pi-arrow-right text-muted-color"></i>
          </div>
          <h2 class="mt-4 text-base font-semibold text-color">{{ demo.title }}</h2>
          <p class="mt-2 text-sm leading-6 text-muted-color">{{ demo.description }}</p>
        </a>
      }
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShellDemosIndexPage {
  demos: ShellDemoCard[] = [
    {
      title: 'Workspace',
      description: 'A two-column operational area with section navigation.',
      icon: 'pi pi-building',
      route: 'workspace',
    },
    {
      title: 'Detail',
      description: 'A record page with local tabs and focused content.',
      icon: 'pi pi-id-card',
      route: 'detail',
    },
    {
      title: 'Wizard',
      description: 'A guided multi-step flow with persistent actions.',
      icon: 'pi pi-list-check',
      route: 'wizard',
    },
    {
      title: 'Report',
      description: 'A report surface for metrics, summaries, and exports.',
      icon: 'pi pi-chart-bar',
      route: 'report',
    },
  ];
}
