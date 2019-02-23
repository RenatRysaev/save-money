import { createSelector } from 'reselect'
import reduce from 'lodash/reduce'
import size from 'lodash/size'
import toNumber from 'lodash/toNumber'

export const selectCosts = (state) => state.costs

export const selectIsLoadingCosts = (state) =>
  selectCosts(state).get('isLoading')

export const selectCostsEntitiesJS = createSelector(
  selectCosts,
  (costs) => costs.get('entities').toJS(),
)

export const selectCostsEntitiesLength = (state) =>
  size(selectCostsEntitiesJS(state))

export const selectCostTotalSum = createSelector(
  selectCostsEntitiesJS,
  (costs) =>
    reduce(costs, (acc, cost) => toNumber(acc) + toNumber(cost.sum), 0),
)
