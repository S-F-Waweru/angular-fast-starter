import { Injectable } from '@angular/core';
import { delay, map, Observable, of } from 'rxjs';
import { SortState } from '../../../shared/store/with-sort';
import { CreateCustomerDto, Customer, CustomerDto, CustomerFilters } from '../models/customer.model';
import { mapCustomer, mapCustomerToDto } from '../models/customer.mapper';

const seedCustomers: CustomerDto[] = [
  {
    id: 'cus_001',
    full_name: 'Amina Patel',
    email: 'amina@example.com',
    status: 'active',
    company: 'Northstar Labs',
    created_at: '2026-01-14T09:00:00.000Z',
  },
  {
    id: 'cus_002',
    full_name: 'Daniel Okello',
    email: 'daniel@example.com',
    status: 'pending',
    company: 'Savanna Works',
    created_at: '2026-02-03T09:00:00.000Z',
  },
  {
    id: 'cus_003',
    full_name: 'Maya Chen',
    email: 'maya@example.com',
    status: 'active',
    company: 'Blue Harbor',
    created_at: '2026-03-22T09:00:00.000Z',
  },
  {
    id: 'cus_004',
    full_name: 'James Mwangi',
    email: 'james@example.com',
    status: 'inactive',
    company: 'Metro Supply',
    created_at: '2026-04-09T09:00:00.000Z',
  },
];

let customers = [...seedCustomers];

@Injectable({ providedIn: 'root' })
export class CustomersApi {
  list(filters: CustomerFilters, sort?: SortState): Observable<Customer[]> {
    return of(customers).pipe(
      delay(250),
      map((items) => items.filter((item) => this.matchesFilters(item, filters))),
      map((items) => items.map(mapCustomer)),
      map((items) => this.sortItems(items, sort))
    );
  }

  get(id: string): Observable<Customer | null> {
    return of(customers.find((customer) => customer.id === id) ?? null).pipe(delay(180), map((item) => (item ? mapCustomer(item) : null)));
  }

  create(dto: CreateCustomerDto): Observable<Customer> {
    const customer: CustomerDto = {
      id: this.createId(),
      ...dto,
      status: 'active',
      created_at: new Date().toISOString(),
    };

    customers = [customer, ...customers];

    return of(mapCustomer(customer)).pipe(delay(250));
  }

  update(customer: Customer): Observable<Customer> {
    const dto = mapCustomerToDto(customer);
    customers = customers.map((item) => (item.id === customer.id ? dto : item));

    return of(mapCustomer(dto)).pipe(delay(250));
  }

  delete(id: string): Observable<void> {
    customers = customers.filter((customer) => customer.id !== id);

    return of(undefined).pipe(delay(250));
  }

  private matchesFilters(customer: CustomerDto, filters: CustomerFilters) {
    const search = filters.search.trim().toLowerCase();
    const matchesSearch =
      !search ||
      customer.full_name.toLowerCase().includes(search) ||
      customer.email.toLowerCase().includes(search) ||
      customer.company.toLowerCase().includes(search);

    const matchesStatus = filters.status === 'all' || customer.status === filters.status;

    return matchesSearch && matchesStatus;
  }

  private sortItems(items: Customer[], sort?: SortState) {
    if (!sort?.sortField) {
      return items;
    }

    return [...items].sort((left, right) => {
      const leftValue = this.sortValue(left, sort.sortField);
      const rightValue = this.sortValue(right, sort.sortField);

      if (leftValue < rightValue) return -1 * sort.sortOrder;
      if (leftValue > rightValue) return 1 * sort.sortOrder;
      return 0;
    });
  }

  private sortValue(customer: Customer, field: string) {
    const value = (customer as unknown as Record<string, unknown>)[field];

    if (value instanceof Date) {
      return value.getTime();
    }

    return String(value ?? '').toLowerCase();
  }

  private createId() {
    if ('randomUUID' in crypto) {
      return `cus_${crypto.randomUUID().slice(0, 8)}`;
    }

    return `cus_${Date.now()}`;
  }
}
