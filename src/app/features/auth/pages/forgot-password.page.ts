import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { AuthStore } from '../../../core/auth/auth.store';
import { AppButtonComponent } from '../../../shared/ui/button/button.component';
import { AppFormFieldComponent } from '../../../shared/ui/form-field/form-field.component';

@Component({
  selector: 'app-forgot-password-page',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, InputTextModule, AppButtonComponent, AppFormFieldComponent],
  template: `
    <div class="text-center">
      <h1 class="text-2xl font-semibold text-color">Forgot password</h1>
      <p class="mt-2 text-sm text-muted-color">Request a reset token from your auth API.</p>
    </div>

    @if (submitted()) {
      <div class="mt-6 rounded-md bg-green-50 px-3 py-3 text-sm text-green-700">
        Reset requested. In the mock starter, use any reset token on the reset page.
      </div>
    } @else {
      <form [formGroup]="form" class="mt-6 grid gap-4">
        <app-form-field label="Email" [control]="form.controls.email">
          <input pInputText type="email" formControlName="email" class="w-full" autocomplete="email" />
        </app-form-field>

        @if (auth.error()) {
          <p class="rounded-md bg-red-50 px-3 py-2 text-sm text-red-700">{{ auth.error() }}</p>
        }

        <app-button label="Request reset" icon="pi pi-send" [loading]="auth.loading()" (clicked)="submit()" />
      </form>
    }

    <div class="mt-6 flex justify-center gap-3 text-sm">
      <a routerLink="/auth/login" class="font-medium text-primary">Back to login</a>
      <a routerLink="/auth/reset-password" class="font-medium text-primary">I have a token</a>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForgotPasswordPage {
  readonly auth = inject(AuthStore);
  submitted = signal(false);

  form = new FormGroup({
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
  });

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.auth.requestPasswordReset(this.form.getRawValue()).subscribe({
      next: () => this.submitted.set(true),
    });
  }
}

