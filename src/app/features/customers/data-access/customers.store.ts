import { computed, inject } from '@angular/core';
import { patchState, signalStore, withComputed, withMethods } from '@ngrx/signals';
import { addEntity, removeEntity, setAllEntities, updateEntity, withEntities } from '@ngrx/signals/entities';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { catchError, EMPTY, pipe, switchMap, tap } from 'rxjs';
import { apiErrorMessage } from '../../../core/api/api-error.model';
import { withDialogState } from '../../../shared/store/with-dialog-state';
import { withFilters } from '../../../shared/store/with-filters';
import { withPagination } from '../../../shared/store/with-pagination';
import { withRequestState } from '../../../shared/store/with-request-state';
import { withSelection } from '../../../shared/store/with-selection';
import { withSort } from '../../../shared/store/with-sort';
import { Customer, CustomerFilters, CreateCustomerDto } from '../models/customer.model';
import { CustomersApi } from './customers.api';

const initialFilters: CustomerFilters = {
  search: '',
  status: 'all',
};

export const CustomersStore = signalStore(
  withEntities<Customer>(),
  withRequestState(),
  withPagination(),
  withSort({ sortField: 'createdAt', sortOrder: -1 }),
  withSelection(),
  withDialogState(),
  withFilters(initialFilters),
  withComputed((store) => ({
    selectedCustomer: computed(() => {
      const selectedId = store.selectedId();
      return store.entities().find((customer) => customer.id === selectedId) ?? null;
    }),
    activeCustomers: computed(() => store.entities().filter((customer) => customer.status === 'active')),
  })),
  withMethods((store, api = inject(CustomersApi)) => ({
    load: rxMethod<void>(
      pipe(
        tap(() => store.setLoading()),
        switchMap(() =>
          api.list(store.filters(), { sortField: store.sortField(), sortOrder: store.sortOrder() }).pipe(
            tap((customers) => {
              patchState(store, setAllEntities(customers));
              store.setTotal(customers.length);
              store.setSuccess();
            }),
            catchError((error) => {
              store.setError(apiErrorMessage(error, 'Failed to load customers'));
              return EMPTY;
            })
          )
        )
      )
    ),

    loadOne: rxMethod<string>(
      pipe(
        tap(() => store.setLoading()),
        switchMap((id) =>
          api.get(id).pipe(
            tap((customer) => {
              if (customer) {
                patchState(store, addEntity(customer));
                store.select(customer.id);
                store.setSuccess();
                return;
              }

              store.setError('Customer was not found');
            }),
            catchError((error) => {
              store.setError(apiErrorMessage(error, 'Failed to load customer'));
              return EMPTY;
            })
          )
        )
      )
    ),

    create: rxMethod<CreateCustomerDto>(
      pipe(
        tap(() => store.setLoading()),
        switchMap((dto) =>
          api.create(dto).pipe(
            tap((customer) => {
              patchState(store, addEntity(customer));
              store.setTotal(store.total() + 1);
              store.closeDialog();
              store.setSuccess();
            }),
            catchError((error) => {
              store.setError(apiErrorMessage(error, 'Failed to create customer'));
              return EMPTY;
            })
          )
        )
      )
    ),

    update: rxMethod<Customer>(
      pipe(
        tap(() => store.setLoading()),
        switchMap((customer) =>
          api.update(customer).pipe(
            tap((updated) => {
              patchState(store, updateEntity({ id: updated.id, changes: updated }));
              store.setSuccess();
            }),
            catchError((error) => {
              store.setError(apiErrorMessage(error, 'Failed to update customer'));
              return EMPTY;
            })
          )
        )
      )
    ),

    delete: rxMethod<string>(
      pipe(
        tap(() => store.setLoading()),
        switchMap((id) =>
          api.delete(id).pipe(
            tap(() => {
              patchState(store, removeEntity(id));
              store.setTotal(Math.max(0, store.total() - 1));
              store.setSuccess();
            }),
            catchError((error) => {
              store.setError(apiErrorMessage(error, 'Failed to delete customer'));
              return EMPTY;
            })
          )
        )
      )
    ),
  }))
);
