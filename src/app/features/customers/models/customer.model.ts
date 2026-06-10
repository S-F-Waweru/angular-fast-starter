export type CustomerStatus = 'active' | 'inactive' | 'pending';

export interface Customer {
  id: string;
  fullName: string;
  email: string;
  status: CustomerStatus;
  company: string;
  createdAt: Date;
}

export interface CustomerDto {
  id: string;
  full_name: string;
  email: string;
  status: CustomerStatus;
  company: string;
  created_at: string;
}

export interface CreateCustomerDto {
  full_name: string;
  email: string;
  company: string;
}

export interface CustomerFilters {
  search: string;
  status: 'all' | CustomerStatus;
}

