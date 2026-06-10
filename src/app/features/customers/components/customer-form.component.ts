import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { formCanSubmit, touchInvalidForm } from '../../../shared/forms/form-submit';
import { AppButtonComponent } from '../../../shared/ui/button/button.component';
import { AppFormFieldComponent } from '../../../shared/ui/form-field/form-field.component';
import { mapFormToCreateCustomerDto } from '../models/customer.mapper';
import { CreateCustomerDto } from '../models/customer.model';
import { createCustomerForm } from '../models/customer-form.model';

@Component({
  selector: 'app-customer-form',
  standalone: true,
  imports: [ReactiveFormsModule, InputTextModule, AppButtonComponent, AppFormFieldComponent],
  template: `
    <form [formGroup]="form" class="grid gap-4" (ngSubmit)="submit()">
      <app-form-field label="Customer name" hint="Use the customer's legal or display name." [control]="form.controls.fullName" [required]="true">
        <input pInputText formControlName="fullName" class="w-full" />
      </app-form-field>

      <app-form-field label="Email" hint="This is used for account notices." [control]="form.controls.email" [required]="true">
        <input pInputText type="email" formControlName="email" class="w-full" />
      </app-form-field>

      <app-form-field label="Company" [control]="form.controls.company" [required]="true">
        <input pInputText formControlName="company" class="w-full" />
      </app-form-field>

      <footer class="flex justify-end gap-2 pt-2">
        <app-button label="Cancel" intent="secondary" type="button" (clicked)="cancelled.emit()" />
        <app-button label="Save" icon="pi pi-check" type="submit" [loading]="saving()" [disabled]="!canSubmit()" />
      </footer>
    </form>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomerFormComponent {
  saving = input(false);
  submitted = output<CreateCustomerDto>();
  cancelled = output<void>();

  form = createCustomerForm();

  canSubmit() {
    return formCanSubmit(this.form, this.saving());
  }

  submit() {
    if (touchInvalidForm(this.form)) {
      return;
    }

    this.submitted.emit(mapFormToCreateCustomerDto(this.form.getRawValue()));
    this.form.reset();
  }
}
