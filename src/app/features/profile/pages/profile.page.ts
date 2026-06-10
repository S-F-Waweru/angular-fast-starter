import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { AuthStore } from '../../../core/auth/auth.store';
import { AppToastService } from '../../../core/toast/app-toast.service';
import { AppButtonComponent } from '../../../shared/ui/button/button.component';
import { AppFormFieldComponent } from '../../../shared/ui/form-field/form-field.component';
import { AppPageHeaderComponent } from '../../../shared/ui/page-header/page-header.component';

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [ReactiveFormsModule, InputTextModule, AppButtonComponent, AppFormFieldComponent, AppPageHeaderComponent],
  template: `
    <app-page-header title="Profile" description="View and edit the signed-in user's profile.">
      <app-button label="Sign out" icon="pi pi-sign-out" intent="secondary" (clicked)="signOut()" />
    </app-page-header>

    <section class="grid gap-6 xl:grid-cols-[1fr_22rem]">
      <article class="fast-panel p-5">
        <div class="mb-6 flex items-center gap-4">
          <div class="grid size-14 place-items-center bg-primary text-lg font-semibold text-primary-contrast" style="border-radius: var(--fast-radius-pill);">
            {{ initials() }}
          </div>
          <div class="min-w-0">
            <h2 class="truncate text-lg font-semibold text-color">{{ auth.user()?.fullName }}</h2>
            <p class="truncate text-sm text-muted-color">{{ auth.user()?.email }}</p>
          </div>
        </div>

        <form [formGroup]="form" class="grid gap-4">
          <app-form-field label="Full name" [control]="form.controls.fullName">
            <input pInputText formControlName="fullName" class="w-full" autocomplete="name" />
          </app-form-field>

          <app-form-field label="Email" [control]="form.controls.email">
            <input pInputText type="email" formControlName="email" class="w-full" autocomplete="email" />
          </app-form-field>

          <app-form-field label="Avatar URL" [control]="form.controls.avatarUrl">
            <input pInputText formControlName="avatarUrl" class="w-full" autocomplete="photo" />
          </app-form-field>

          @if (auth.error()) {
            <p class="rounded-md bg-red-50 px-3 py-2 text-sm text-red-700">{{ auth.error() }}</p>
          }

          <div class="flex justify-end">
            <app-button label="Save profile" icon="pi pi-check" [loading]="auth.loading()" (clicked)="save()" />
          </div>
        </form>
      </article>

      <aside class="fast-panel min-w-0 p-5">
        <h2 class="text-lg font-semibold text-color">Session</h2>
        <dl class="mt-4 grid gap-3 text-sm">
          <div class="fast-muted-panel min-w-0 p-3">
            <dt class="text-xs uppercase text-muted-color">Provider</dt>
            <dd class="mt-1 min-w-0 break-words font-medium capitalize text-color">{{ auth.user()?.provider }}</dd>
          </div>
          <div class="fast-muted-panel min-w-0 p-3">
            <dt class="text-xs uppercase text-muted-color">Token expires</dt>
            <dd class="mt-1 min-w-0 break-words font-medium text-color">{{ auth.session()?.expiresAt }}</dd>
          </div>
          <div class="fast-muted-panel min-w-0 p-3">
            <dt class="text-xs uppercase text-muted-color">JWT</dt>
            <dd class="mt-1 min-w-0 break-all font-mono text-xs leading-5 text-muted-color">{{ auth.session()?.accessToken }}</dd>
          </div>
        </dl>
      </aside>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfilePage {
  readonly auth = inject(AuthStore);
  private readonly router = inject(Router);
  private readonly toast = inject(AppToastService);

  form = new FormGroup({
    fullName: new FormControl(this.auth.user()?.fullName ?? '', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(2)],
    }),
    email: new FormControl(this.auth.user()?.email ?? '', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
    avatarUrl: new FormControl(this.auth.user()?.avatarUrl ?? '', {
      nonNullable: true,
    }),
  });

  initials = computed(() => {
    const name = this.auth.user()?.fullName ?? 'User';
    return name
      .split(' ')
      .map((part) => part.charAt(0))
      .join('')
      .slice(0, 2)
      .toUpperCase();
  });

  save() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.auth.updateProfile(this.form.getRawValue()).subscribe({
      next: () => this.toast.success('Profile updated'),
    });
  }

  signOut() {
    this.auth.signOut();
    void this.router.navigate(['/auth/login']);
  }
}
