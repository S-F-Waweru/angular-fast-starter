import { computed } from '@angular/core';
import { patchState, signalStoreFeature, withComputed, withMethods, withState } from '@ngrx/signals';

export interface PaginationState {
  page: number;
  pageSize: number;
  total: number;
}

export function withPagination() {
  return signalStoreFeature(
    withState<PaginationState>({
      page: 1,
      pageSize: 10,
      total: 0,
    }),
    withComputed((store) => ({
      pageStart: computed(() => (store.page() - 1) * store.pageSize()),
      pageEnd: computed(() => store.page() * store.pageSize()),
      pageCount: computed(() => Math.max(1, Math.ceil(store.total() / store.pageSize()))),
    })),
    withMethods((store) => ({
      setPage(page: number) {
        patchState(store, { page });
      },
      setPageSize(pageSize: number) {
        patchState(store, { pageSize, page: 1 });
      },
      setTotal(total: number) {
        patchState(store, { total });
      },
      resetPagination() {
        patchState(store, { page: 1, pageSize: 10, total: 0 });
      },
    }))
  );
}

