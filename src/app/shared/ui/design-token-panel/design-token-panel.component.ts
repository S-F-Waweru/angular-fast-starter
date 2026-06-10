import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectModule } from 'primeng/select';
import { AppIconButtonComponent } from '../icon-button/icon-button.component';
import {
  AppDensity,
  AppGradient,
  AppRadius,
  AppTheme,
  AppColorScheme,
  DesignTokenService,
} from '../../../core/design-system/design-token.service';

interface TokenOption<TValue extends string> {
  label: string;
  value: TValue;
}

@Component({
  selector: 'app-design-token-panel',
  standalone: true,
  imports: [FormsModule, SelectModule, AppIconButtonComponent],
  template: `
    <section class="fast-token-panel" aria-label="Design tokens">
      <div class="fast-radius-preview" aria-hidden="true"></div>

      <p-select
        [options]="colorSchemeOptions"
        optionLabel="label"
        optionValue="value"
        [ngModel]="tokens.colorScheme()"
        (ngModelChange)="tokens.setColorScheme($event)"
        ariaLabel="Mode"
        styleClass="w-32"
      />

      <p-select
        [options]="themeOptions"
        optionLabel="label"
        optionValue="value"
        [ngModel]="tokens.theme()"
        (ngModelChange)="tokens.setTheme($event)"
        ariaLabel="Theme"
        styleClass="w-32"
      />

      <p-select
        [options]="radiusOptions"
        optionLabel="label"
        optionValue="value"
        [ngModel]="tokens.radius()"
        (ngModelChange)="tokens.setRadius($event)"
        ariaLabel="Radius"
        styleClass="w-32"
      />

      <p-select
        [options]="gradientOptions"
        optionLabel="label"
        optionValue="value"
        [ngModel]="tokens.gradient()"
        (ngModelChange)="tokens.setGradient($event)"
        ariaLabel="Gradient"
        styleClass="w-36"
      />

      <p-select
        [options]="densityOptions"
        optionLabel="label"
        optionValue="value"
        [ngModel]="tokens.density()"
        (ngModelChange)="tokens.setDensity($event)"
        ariaLabel="Density"
        styleClass="w-36"
      />

      <app-icon-button label="Reset design tokens" icon="pi pi-undo" intent="secondary" (clicked)="tokens.reset()" />
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DesignTokenPanelComponent {
  readonly tokens = inject(DesignTokenService);

  colorSchemeOptions: TokenOption<AppColorScheme>[] = [
    { label: 'Light', value: 'light' },
    { label: 'Dark', value: 'dark' },
  ];

  themeOptions: TokenOption<AppTheme>[] = [
    { label: 'HSL', value: 'hsl' },
    { label: 'Blue', value: 'blue' },
    { label: 'Emerald', value: 'emerald' },
    { label: 'Violet', value: 'violet' },
  ];

  radiusOptions: TokenOption<AppRadius>[] = [
    { label: 'Sharp', value: 'sharp' },
    { label: 'Soft', value: 'soft' },
    { label: 'Round', value: 'round' },
  ];

  gradientOptions: TokenOption<AppGradient>[] = [
    { label: 'None', value: 'none' },
    { label: 'Brand', value: 'brand' },
    { label: 'Sunrise', value: 'sunrise' },
    { label: 'Aurora', value: 'aurora' },
  ];

  densityOptions: TokenOption<AppDensity>[] = [
    { label: 'Compact', value: 'compact' },
    { label: 'Comfortable', value: 'comfortable' },
    { label: 'Spacious', value: 'spacious' },
  ];
}
