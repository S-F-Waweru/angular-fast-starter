import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { AppStatusBadgeComponent } from '../../../shared/ui/status-badge/status-badge.component';
import { CustomerStatus } from '../models/customer.model';

@Component({
  selector: 'app-customer-status-badge',
  standalone: true,
  imports: [AppStatusBadgeComponent],
  template: `<app-status-badge [value]="status()" />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomerStatusBadgeComponent {
  status = input.required<CustomerStatus>();
}

