import { createSelector } from 'reselect'
import { reduce, size, toNumber } from 'lodash'

export const selectIncome = (state) => state.income

export const selectIsLoadingIncome = (state) =>
  selectIncome(state).get('isLoading')

export const selectIncomeEntities = createSelector(
  selectIncome,
  (income) => income.get('entities').toJS(),
)

export const selectIncomeEntitiesLength = (state) =>
  size(selectIncomeEntities(state))

export const selectIncomeTotalSum = createSelector(
  selectIncomeEntities,
  (income) =>
    reduce(
      income,
      (acc, incomeItem) => toNumber(acc) + toNumber(incomeItem.sum),
      0,
    ),
)
