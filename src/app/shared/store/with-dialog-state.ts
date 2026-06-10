import { patchState, signalStoreFeature, withMethods, withState } from '@ngrx/signals';

export interface DialogState {
  dialogOpen: boolean;
}

export function withDialogState() {
  return signalStoreFeature(
    withState<DialogState>({
      dialogOpen: false,
    }),
    withMethods((store) => ({
      openDialog() {
        patchState(store, { dialogOpen: true });
      },
      closeDialog() {
        patchState(store, { dialogOpen: false });
      },
    }))
  );
}

