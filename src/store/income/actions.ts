import { createAction } from 'redux-act'
import { IIncome } from 'types/income'

export const actionCreateIncome = createAction('CREATE_INCOME')
export const actionCreateIncomeSucceed = createAction<IIncome>(
  'CREATE_INCOME_SUCCEED',
)
export const actionCreateIncomeFail = createAction('CREATE_INCOME_FAIL')

export const actionGetIncome = createAction('GET_INCOME')
export const actionGetIncomeSucceed = createAction<IIncome>(
  'GET_INCOME_SUCCEED',
  (income) => income,
)
export const actionGetIncomeFail = createAction('GET_INCOME_FAIL')

export const actionUpdateIncome = createAction('UPDATE_INCOME')
export const actionUpdateIncomeSucceed = createAction<IIncome>(
  'UPDATE_INCOME_SUCCEED',
  (income) => income,
)
export const actionUpdateIncomeFail = createAction('UPDATE_INCOME_FAIL')

export const actionRemoveIncome = createAction('REMOVE_INCOME')
export const actionRemoveIncomeSucceed = createAction(
  'REMOVE_INCOME_SUCCEED',
  (id) => id,
)
export const actionRemoveIncomeFail = createAction('REMOVE_INCOME_FAILED')

export const requestActions = [
  actionCreateIncome,
  actionGetIncome,
  actionUpdateIncome,
  actionRemoveIncome,
]
export const failActions = [
  actionCreateIncomeFail,
  actionGetIncomeFail,
  actionUpdateIncomeFail,
  actionRemoveIncomeFail,
]
