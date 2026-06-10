import { inject, Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({ providedIn: 'root' })
export class AppToastService {
  private readonly messages = inject(MessageService);

  success(summary: string, detail?: string) {
    this.messages.add({ severity: 'success', summary, detail });
  }

  error(summary: string, detail?: string) {
    this.messages.add({ severity: 'error', summary, detail });
  }

  info(summary: string, detail?: string) {
    this.messages.add({ severity: 'info', summary, detail });
  }
}

