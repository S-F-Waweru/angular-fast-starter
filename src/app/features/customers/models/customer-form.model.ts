import { FormControl, FormGroup, Validators } from '@angular/forms';

export interface CustomerForm {
  fullName: FormControl<string>;
  email: FormControl<string>;
  company: FormControl<string>;
}

export function createCustomerForm() {
  return new FormGroup<CustomerForm>({
    fullName: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(2)],
    }),
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
    company: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });
}

