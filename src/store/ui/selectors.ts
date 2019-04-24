import { createSelector } from 'reselect'
import { curry, get } from 'lodash'

export const selectUI = (state) => state.ui

export const selectModals = createSelector(
  selectUI,
  (UI) => UI.get('modals').toJS(),
)

export const selectModalByName = curry((state, modalName) =>
  get(selectModals(state), modalName),
)
