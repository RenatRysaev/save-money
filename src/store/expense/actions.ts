import { createAction } from 'redux-act'
import { IExpense } from 'types/expense'

export const actionGetExpenses = createAction('GET_EXPENSE')
export const actionGetExpensesSucceed = createAction<IExpense[]>(
  'GET_EXPENSE_SUCCEED',
  (expenses) => expenses,
)
export const actionGetExpensesFail = createAction('GET_EXPENSE_FAIL')

export const actionCreateExpense = createAction('CREATE_EXPENSE')
export const actionCreateExpenseSucceed = createAction<IExpense>(
  'CREATE_EXPENSE_SUCCEED',
  (expense) => expense,
)
export const actionCreateExpenseFail = createAction('CREATE_EXPENSE_FAIL')

export const actionUpdateExpense = createAction('UPDATE_EXPENSE')
export const actionUpdateExpenseSucceed = createAction<IExpense>(
  'UPDATE_EXPENSE_SUCCEED',
  (expense) => expense,
)
export const actionUpdateExpenseFail = createAction('UPDATE_EXPENSE_FAIL')

export const actionRemoveExpense = createAction('REMOVE_EXPENSE')
export const actionRemoveExpenseSucceed = createAction<{ id: string }>(
  'REMOVE_EXPENSE_SUCCEED',
  (id) => id,
)
export const actionRemoveExpenseFail = createAction('REMOVE_EXPENSE_FAIL')

export const requestActions = [
  actionCreateExpense,
  actionGetExpenses,
  actionRemoveExpense,
  actionUpdateExpense,
]
export const failActions = [
  actionGetExpensesFail,
  actionCreateExpenseFail,
  actionUpdateExpenseFail,
  actionRemoveExpenseFail,
]
