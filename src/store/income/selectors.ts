import { createSelector } from 'reselect'
import { head, get } from 'lodash'
import { compose } from 'lodash/fp'

export const selectIncome = (state) => state.income

export const selectIsLoadingIncome = (state) =>
  selectIncome(state).get('isLoading')

export const selectIncomeEntities = createSelector(
  selectIncome,
  (income) => income.get('entities').toJS(),
)

export const selectIncomeTotalSum = createSelector(
  selectIncomeEntities,
  (income) => income.reduce((acc, { sum }) => acc + sum, 0),
)

export const selectIncomeCurrency = createSelector(
  selectIncomeEntities,
  (income) =>
    compose(
      (firstIncome) => get(firstIncome, 'currency'),
      head,
    )(income),
)
