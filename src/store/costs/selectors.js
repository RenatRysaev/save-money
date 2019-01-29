import { createSelector } from 'reselect'

export const selectCosts = (state) => state.costs

export const selectIsLoadingCosts = (state) =>
  selectCosts(state).get('isLoading')

export const selectCostsEntitiesJS = createSelector(
  selectCosts,
  (costs) => costs.get('entities').toJS(),
)
