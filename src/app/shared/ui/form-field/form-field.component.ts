import { AbstractControl } from '@angular/forms';
import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { getControlErrorMessage, ValidationMessageMap } from '../../forms/form-errors';

@Component({
  selector: 'app-form-field',
  standalone: true,
  template: `
    <label class="grid min-w-0 gap-1.5">
      <span class="flex min-w-0 items-center gap-1 text-sm font-medium text-color">
        <span class="truncate">{{ label() }}</span>
        @if (required()) {
          <span class="text-red-600" aria-hidden="true">*</span>
        }
      </span>
      <ng-content />
      @if (errorMessage()) {
        <span class="break-words text-xs leading-5 text-red-600" role="alert">{{ errorMessage() }}</span>
      } @else if (hint()) {
        <span class="break-words text-xs leading-5 text-muted-color">{{ hint() }}</span>
      }
    </label>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppFormFieldComponent {
  label = input.required<string>();
  hint = input('');
  required = input(false);
  control = input<AbstractControl | null>(null);
  messages = input<ValidationMessageMap>({});

  errorMessage = computed(() => getControlErrorMessage(this.control(), this.label(), this.messages()));
}
