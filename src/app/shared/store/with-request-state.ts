import { computed } from '@angular/core';
import { patchState, signalStoreFeature, withComputed, withMethods, withState } from '@ngrx/signals';

export type RequestStatus = 'idle' | 'loading' | 'success' | 'error';

export interface RequestState {
  status: RequestStatus;
  error: string | null;
}

export function withRequestState() {
  return signalStoreFeature(
    withState<RequestState>({
      status: 'idle',
      error: null,
    }),
    withComputed((store) => ({
      loading: computed(() => store.status() === 'loading'),
      loaded: computed(() => store.status() === 'success'),
      failed: computed(() => store.status() === 'error'),
    })),
    withMethods((store) => ({
      setLoading() {
        patchState(store, { status: 'loading', error: null });
      },
      setSuccess() {
        patchState(store, { status: 'success', error: null });
      },
      setError(error: string) {
        patchState(store, { status: 'error', error });
      },
      resetRequest() {
        patchState(store, { status: 'idle', error: null });
      },
    }))
  );
}

