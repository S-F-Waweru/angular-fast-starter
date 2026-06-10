import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [DialogModule],
  template: `
    <p-dialog
      [header]="title()"
      [visible]="open()"
      [modal]="true"
      [draggable]="false"
      [resizable]="false"
      [style]="{ width: width() }"
      (onHide)="closed.emit()"
    >
      <ng-content />
    </p-dialog>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppDialogComponent {
  title = input.required<string>();
  open = input.required<boolean>();
  width = input('32rem');
  closed = output<void>();
}

