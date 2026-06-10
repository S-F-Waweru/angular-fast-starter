import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { AuthStore } from '../../../core/auth/auth.store';
import { AppToastService } from '../../../core/toast/app-toast.service';
import { AppButtonComponent } from '../../../shared/ui/button/button.component';
import { AppFormFieldComponent } from '../../../shared/ui/form-field/form-field.component';
import { GoogleAuthButtonComponent } from '../components/google-auth-button.component';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, InputTextModule, AppButtonComponent, AppFormFieldComponent, GoogleAuthButtonComponent],
  template: `
    <div class="text-center">
      <h1 class="text-2xl font-semibold text-color">Create account</h1>
      <p class="mt-2 text-sm text-muted-color">Register with email or continue with Google.</p>
    </div>

    <form [formGroup]="form" class="mt-6 grid gap-4">
      <app-form-field label="Full name" [control]="form.controls.fullName">
        <input pInputText formControlName="fullName" class="w-full" autocomplete="name" />
      </app-form-field>

      <app-form-field label="Email" [control]="form.controls.email">
        <input pInputText type="email" formControlName="email" class="w-full" autocomplete="email" />
      </app-form-field>

      <app-form-field label="Password" [control]="form.controls.password">
        <input pInputText type="password" formControlName="password" class="w-full" autocomplete="new-password" />
      </app-form-field>

      @if (auth.error()) {
        <p class="rounded-md bg-red-50 px-3 py-2 text-sm text-red-700">{{ auth.error() }}</p>
      }

      <app-button label="Register" icon="pi pi-user-plus" [fullWidth]="true" [loading]="auth.loading()" (clicked)="submit()" />
    </form>

    <div class="my-5 grid grid-cols-[1fr_auto_1fr] items-center gap-3 text-xs uppercase text-muted-color">
      <span class="h-px bg-surface-200"></span>
      or
      <span class="h-px bg-surface-200"></span>
    </div>

    <app-google-auth-button text="signup_with" (credentialReceived)="signInWithGoogle($event)" (failed)="toast.error($event)" />

    <p class="mt-6 text-center text-sm text-muted-color">
      Already have an account?
      <a routerLink="/auth/login" class="font-medium text-primary">Login</a>
    </p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterPage {
  readonly auth = inject(AuthStore);
  readonly toast = inject(AppToastService);
  private readonly router = inject(Router);

  form = new FormGroup({
    fullName: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(2)],
    }),
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
    password: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(6)],
    }),
  });

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.auth.register(this.form.getRawValue()).subscribe({
      next: () => void this.router.navigate(['/app/dashboard']),
    });
  }

  signInWithGoogle(credential: string) {
    this.auth.signInWithGoogle({ credential }).subscribe({
      next: () => void this.router.navigate(['/app/dashboard']),
    });
  }
}
