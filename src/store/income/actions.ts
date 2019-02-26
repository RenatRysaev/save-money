import { createAction } from 'redux-act'
import { IIncomeType } from 'types/income'

export const actionIncomeRequest = createAction('INCOME_REQUEST')
export const actionIncomeRequestSucceed = createAction<IIncomeType>(
  'INCOME_REQUEST_SUCCEED',
  (income) => income,
)
export const actionIncomeRequestFailed = createAction('INCOME_REQUEST_FAILED')

export const actionIncomeEditRequest = createAction('INCOME_EDIT_REQUEST')
export const actionIncomeEditSucceed = createAction<IIncomeType>(
  'INCOME_EDIT_SUCCEED',
  (income) => income,
)
export const actionIncomeEditFailed = createAction('INCOME_EDIT_FAILED')

export const actionCreateIncomeRequest = createAction('CREATE_INCOME')
export const actionCreateIncomeSucceed = createAction<IIncomeType>(
  'CREATE_INCOME_SUCCEED',
)
export const actionCreateIncomeFailed = createAction('CREATE_INCOME_FAILED')

export const actionDeleteIncomeRequest = createAction('DELETE_INCOME')
export const actionDeleteIncomeSucceed = createAction<{ id: string }>(
  'DELETE_INCOME_SUCCEED',
)
export const actionDeleteIncomeFailed = createAction('DELETE_INCOME_FAILED')
