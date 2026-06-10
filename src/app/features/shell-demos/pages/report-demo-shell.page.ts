import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ReportShellComponent } from '../../../shared/shells/report-shell/report-shell.component';
import { AppButtonComponent } from '../../../shared/ui/button/button.component';

@Component({
  selector: 'app-report-demo-shell-page',
  standalone: true,
  imports: [ReportShellComponent, AppButtonComponent],
  template: `
    <app-report-shell title="Revenue Report" description="A dense shell for summaries, slices, and export actions.">
      <app-button actions label="Export" icon="pi pi-download" intent="secondary" size="small" />
    </app-report-shell>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReportDemoShellPage {}
