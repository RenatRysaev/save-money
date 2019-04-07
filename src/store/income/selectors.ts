import { createSelector } from 'reselect'
import { reduce, size, toNumber } from 'lodash'

export const selectIncome = (state) => state.income

export const selectIsLoadingIncome = (state) =>
  selectIncome(state).get('isLoading')

export const selectIncomeEntities = createSelector(
  selectIncome,
  (income) => income.get('entities').toJS(),
)
