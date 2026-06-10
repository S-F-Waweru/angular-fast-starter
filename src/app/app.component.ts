import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { DesignTokenService } from './core/design-system/design-token.service';
import { LayoutPreferenceService } from './core/layout/layout-preference.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ConfirmDialogModule, ToastModule],
  template: `
    <router-outlet />
    <p-toast position="top-right" />
    <p-confirmDialog />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  private readonly designTokens = inject(DesignTokenService);
  private readonly layoutPreferences = inject(LayoutPreferenceService);
}
