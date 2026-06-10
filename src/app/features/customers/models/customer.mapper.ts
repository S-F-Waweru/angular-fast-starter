import { CreateCustomerDto, Customer, CustomerDto } from './customer.model';

export function mapCustomer(dto: CustomerDto): Customer {
  return {
    id: dto.id,
    fullName: dto.full_name,
    email: dto.email,
    status: dto.status,
    company: dto.company,
    createdAt: new Date(dto.created_at),
  };
}

export function mapCustomerToDto(customer: Customer): CustomerDto {
  return {
    id: customer.id,
    full_name: customer.fullName,
    email: customer.email,
    status: customer.status,
    company: customer.company,
    created_at: customer.createdAt.toISOString(),
  };
}

export function mapFormToCreateCustomerDto(value: {
  fullName: string;
  email: string;
  company: string;
}): CreateCustomerDto {
  return {
    full_name: value.fullName,
    email: value.email,
    company: value.company,
  };
}

