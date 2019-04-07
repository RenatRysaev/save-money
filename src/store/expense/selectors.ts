import { createSelector } from 'reselect'
import { IExpense } from 'types/expense'
import { head, get } from 'lodash'
import { compose } from 'lodash/fp'

export const selectExpense = (state) => state.expense

export const selectIsLoadingExpense = (state) => selectExpense(state).isLoading

export const selectExpenseEntities = createSelector(
  selectExpense,
  (expense) => expense.get('entities').toJS(),
)

export const selectExpenseByType = (type) =>
  createSelector(
    selectExpenseEntities,
    (expenseEntities) =>
      expenseEntities.filter((expense: IExpense) => expense.type === type),
  )

export const selectExpenseTotalSumByType = (type) =>
  createSelector(
    selectExpenseByType(type),
    (expense) => expense.reduce((acc, { sum }) => acc + sum, 0),
  )

export const selectExpenseCurrency = createSelector(
  selectExpenseEntities,
  (expense) =>
    compose(
      (firstIncome) => get(firstIncome, 'currency'),
      head,
    )(expense),
)
