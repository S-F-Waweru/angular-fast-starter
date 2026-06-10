import { patchState, signalStoreFeature, withMethods, withState } from '@ngrx/signals';

export interface SelectionState {
  selectedId: string | null;
}

export function withSelection() {
  return signalStoreFeature(
    withState<SelectionState>({
      selectedId: null,
    }),
    withMethods((store) => ({
      select(id: string) {
        patchState(store, { selectedId: id });
      },
      clearSelection() {
        patchState(store, { selectedId: null });
      },
    }))
  );
}

