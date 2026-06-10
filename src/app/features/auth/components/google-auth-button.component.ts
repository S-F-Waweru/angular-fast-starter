import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  ViewChild,
  input,
  output,
} from '@angular/core';
import { AUTH_CONFIG } from '../../../core/auth/auth.config';
import { AppButtonComponent } from '../../../shared/ui/button/button.component';

interface GoogleCredentialResponse {
  credential: string;
  select_by?: string;
}

interface GoogleIdentityServices {
  accounts: {
    id: {
      initialize(config: {
        client_id: string;
        callback: (response: GoogleCredentialResponse) => void;
        ux_mode?: 'popup' | 'redirect';
      }): void;
      renderButton(parent: HTMLElement, options: Record<string, string | number | boolean>): void;
    };
  };
}

declare global {
  interface Window {
    google?: GoogleIdentityServices;
  }
}

@Component({
  selector: 'app-google-auth-button',
  standalone: true,
  imports: [AppButtonComponent],
  template: `
    @if (enabled) {
      <div #buttonHost class="grid min-h-10 w-full"></div>
    } @else {
      <app-button label="Google auth not configured" icon="pi pi-google" intent="secondary" [fullWidth]="true" [disabled]="true" />
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GoogleAuthButtonComponent implements AfterViewInit {
  text = input<'signin_with' | 'signup_with'>('signin_with');
  credentialReceived = output<string>();
  failed = output<string>();

  @ViewChild('buttonHost') private readonly buttonHost?: ElementRef<HTMLElement>;

  enabled = Boolean(AUTH_CONFIG.googleClientId);

  async ngAfterViewInit() {
    if (!this.enabled || !this.buttonHost) {
      return;
    }

    try {
      await this.loadGoogleScript();
      window.google?.accounts.id.initialize({
        client_id: AUTH_CONFIG.googleClientId,
        callback: (response) => this.credentialReceived.emit(response.credential),
        ux_mode: 'popup',
      });
      window.google?.accounts.id.renderButton(this.buttonHost.nativeElement, {
        type: 'standard',
        theme: 'outline',
        size: 'large',
        shape: 'rectangular',
        text: this.text(),
        width: this.buttonHost.nativeElement.offsetWidth || 320,
      });
    } catch {
      this.failed.emit('Unable to load Google Identity Services');
    }
  }

  private loadGoogleScript() {
    const scriptId = 'google-identity-services';
    const existing = document.getElementById(scriptId);

    if (existing) {
      return Promise.resolve();
    }

    return new Promise<void>((resolve, reject) => {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://accounts.google.com/gsi/client';
      script.async = true;
      script.defer = true;
      script.onload = () => resolve();
      script.onerror = () => reject();
      document.head.appendChild(script);
    });
  }
}
