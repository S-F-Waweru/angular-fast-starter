import { patchState, signalStoreFeature, withMethods, withState } from '@ngrx/signals';

export interface SortState {
  sortField: string;
  sortOrder: 1 | -1;
}

export function withSort(initialSort: SortState = { sortField: '', sortOrder: 1 }) {
  return signalStoreFeature(
    withState<SortState>(initialSort),
    withMethods((store) => ({
      setSort(field: string, order: 1 | -1) {
        patchState(store, {
          sortField: field,
          sortOrder: order,
        });
      },
      resetSort() {
        patchState(store, initialSort);
      },
    }))
  );
}
