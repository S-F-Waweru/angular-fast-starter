import { AbstractControl, FormGroup } from '@angular/forms';

export function formCanSubmit(control: AbstractControl, saving = false) {
  return control.valid && !control.pending && !saving;
}

export function touchInvalidForm(form: FormGroup) {
  if (form.valid) {
    return false;
  }

  form.markAllAsTouched();
  return true;
}
