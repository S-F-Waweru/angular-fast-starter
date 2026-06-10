import { inject, Injectable } from '@angular/core';
import { ConfirmationService } from 'primeng/api';

interface ConfirmOptions {
  header: string;
  message: string;
  acceptLabel?: string;
  rejectLabel?: string;
  accept: () => void;
}

@Injectable({ providedIn: 'root' })
export class AppConfirmService {
  private readonly confirmation = inject(ConfirmationService);

  confirm(options: ConfirmOptions) {
    this.confirmation.confirm({
      header: options.header,
      message: options.message,
      acceptLabel: options.acceptLabel ?? 'Confirm',
      rejectLabel: options.rejectLabel ?? 'Cancel',
      acceptButtonStyleClass: 'p-button-danger',
      accept: options.accept,
    });
  }
}

