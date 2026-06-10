import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { AuthStore } from '../../../core/auth/auth.store';
import { AppButtonComponent } from '../../../shared/ui/button/button.component';
import { AppFormFieldComponent } from '../../../shared/ui/form-field/form-field.component';

@Component({
  selector: 'app-reset-password-page',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, InputTextModule, AppButtonComponent, AppFormFieldComponent],
  template: `
    <div class="text-center">
      <h1 class="text-2xl font-semibold text-color">Reset password</h1>
      <p class="mt-2 text-sm text-muted-color">Set a new password using a reset token.</p>
    </div>

    @if (submitted()) {
      <div class="mt-6 rounded-md bg-green-50 px-3 py-3 text-sm text-green-700">
        Password reset complete.
      </div>
    } @else {
      <form [formGroup]="form" class="mt-6 grid gap-4">
        <app-form-field label="Reset token" [control]="form.controls.token">
          <input pInputText formControlName="token" class="w-full" autocomplete="one-time-code" />
        </app-form-field>

        <app-form-field label="New password" [control]="form.controls.password">
          <input pInputText type="password" formControlName="password" class="w-full" autocomplete="new-password" />
        </app-form-field>

        <app-form-field label="Confirm password" [control]="form.controls.confirmPassword">
          <input pInputText type="password" formControlName="confirmPassword" class="w-full" autocomplete="new-password" />
        </app-form-field>

        @if (passwordMismatch()) {
          <p class="rounded-md bg-red-50 px-3 py-2 text-sm text-red-700">Passwords must match.</p>
        }

        @if (auth.error()) {
          <p class="rounded-md bg-red-50 px-3 py-2 text-sm text-red-700">{{ auth.error() }}</p>
        }

        <app-button label="Reset password" icon="pi pi-key" [loading]="auth.loading()" (clicked)="submit()" />
      </form>
    }

    <p class="mt-6 text-center text-sm">
      <a routerLink="/auth/login" class="font-medium text-primary">Back to login</a>
    </p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResetPasswordPage {
  readonly auth = inject(AuthStore);
  private readonly route = inject(ActivatedRoute);
  submitted = signal(false);
  passwordMismatch = signal(false);

  form = new FormGroup({
    token: new FormControl(this.route.snapshot.queryParamMap.get('token') ?? '', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    password: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(6)],
    }),
    confirmPassword: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });

  submit() {
    this.passwordMismatch.set(false);

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const value = this.form.getRawValue();

    if (value.password !== value.confirmPassword) {
      this.passwordMismatch.set(true);
      return;
    }

    this.auth.resetPassword({ token: value.token, password: value.password }).subscribe({
      next: () => this.submitted.set(true),
    });
  }
}

