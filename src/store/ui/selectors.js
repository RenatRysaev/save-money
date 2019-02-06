import { createSelector } from 'reselect'

export const selectUI = (state) => state.ui

export const selectModals = createSelector(
  selectUI,
  (UI) => UI.get('modals').toJS(),
)
