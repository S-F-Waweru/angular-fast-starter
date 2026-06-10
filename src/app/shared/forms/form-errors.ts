import { AbstractControl, FormGroup, ValidationErrors } from '@angular/forms';

export type ValidationMessageFactory = (error: unknown, label: string) => string;

export type ValidationMessageMap = Record<string, string | ValidationMessageFactory>;

export interface ApiFieldError {
  field: string;
  message: string;
}

export const DEFAULT_VALIDATION_MESSAGES: ValidationMessageMap = {
  required: (_error, label) => `${label} is required`,
  email: () => 'Enter a valid email address',
  minlength: (error, label) => {
    const minlength = error as { requiredLength?: number };
    return `${label} must be at least ${minlength.requiredLength ?? 2} characters`;
  },
  maxlength: (error, label) => {
    const maxlength = error as { requiredLength?: number };
    return `${label} must be ${maxlength.requiredLength ?? 'fewer'} characters or fewer`;
  },
  min: (error, label) => {
    const min = error as { min?: number };
    return `${label} must be at least ${min.min ?? 0}`;
  },
  max: (error, label) => {
    const max = error as { max?: number };
    return `${label} must be ${max.max ?? 0} or less`;
  },
  pattern: (_error, label) => `${label} has an invalid format`,
  server: (error) => String(error || 'This value is invalid'),
};

export function getControlErrorMessage(
  control: AbstractControl | null | undefined,
  label: string,
  messages: ValidationMessageMap = {}
) {
  if (!control || !control.touched || !control.errors) {
    return '';
  }

  return getValidationErrorMessage(control.errors, label, messages);
}

export function getValidationErrorMessage(errors: ValidationErrors, label: string, messages: ValidationMessageMap = {}) {
  const [firstKey] = Object.keys(errors);

  if (!firstKey) {
    return '';
  }

  const message = messages[firstKey] ?? DEFAULT_VALIDATION_MESSAGES[firstKey];

  if (typeof message === 'function') {
    return message(errors[firstKey], label);
  }

  if (typeof message === 'string') {
    return message;
  }

  return `${label} is invalid`;
}

export function setServerFieldErrors(form: FormGroup, fieldErrors: ApiFieldError[]) {
  for (const fieldError of fieldErrors) {
    const control = form.get(fieldError.field);

    if (!control) {
      continue;
    }

    control.setErrors({
      ...(control.errors ?? {}),
      server: fieldError.message,
    });
    control.markAsTouched();
  }
}

export function clearServerFieldErrors(form: FormGroup) {
  Object.values(form.controls).forEach((control) => {
    const errors = control.errors;

    if (!errors?.['server']) {
      return;
    }

    const { server: _server, ...rest } = errors;
    control.setErrors(Object.keys(rest).length ? rest : null);
  });
}
