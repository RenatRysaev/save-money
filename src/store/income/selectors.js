import { createSelector } from 'reselect'
import reduce from 'lodash/reduce'
import size from 'lodash/size'
import toNumber from 'lodash/toNumber'

export const selectIncome = (state) => state.income

export const selectIsLoadingIncome = (state) =>
  selectIncome(state).get('isLoading')

export const selectIncomeEntitiesJS = createSelector(
  selectIncome,
  (income) => income.get('entities').toJS(),
)

export const selectIncomeEntitiesLength = (state) =>
  size(selectIncomeEntitiesJS(state))

export const selectIncomeTotalSum = createSelector(
  selectIncomeEntitiesJS,
  (income) =>
    reduce(
      income,
      (acc, incomeItem) => toNumber(acc) + toNumber(incomeItem.sum),
      0,
    ),
)
