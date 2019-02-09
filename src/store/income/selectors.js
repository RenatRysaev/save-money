import { createSelector } from 'reselect'

export const selectIncome = (state) => state.income

export const selectIsLoadingIncome = (state) =>
  selectIncome(state).get('isLoading')

export const selectIncomeEntitiesJS = createSelector(
  selectIncome,
  (income) => income.get('entities').toJS(),
)
