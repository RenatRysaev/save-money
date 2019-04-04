import { createSelector } from 'reselect'
import { IExpense } from 'types/expense'

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
