import { patchState, signalStoreFeature, withMethods, withState } from '@ngrx/signals';

export interface FilterState<TFilters extends object> {
  filters: TFilters;
}

export function withFilters<TFilters extends object>(initialFilters: TFilters) {
  return signalStoreFeature(
    withState<FilterState<TFilters>>({
      filters: initialFilters,
    }),
    withMethods((store) => ({
      setFilters(filters: Partial<TFilters>) {
        patchState(store, {
          filters: {
            ...store.filters(),
            ...filters,
          },
        });
      },
      resetFilters() {
        patchState(store, { filters: initialFilters });
      },
    }))
  );
}

