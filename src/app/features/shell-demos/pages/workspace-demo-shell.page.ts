import { ChangeDetectionStrategy, Component } from '@angular/core';
import { WorkspaceShellComponent } from '../../../shared/shells/workspace-shell/workspace-shell.component';

@Component({
  selector: 'app-workspace-demo-shell-page',
  standalone: true,
  imports: [WorkspaceShellComponent],
  template: `<app-workspace-shell />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkspaceDemoShellPage {}
