import { createAction } from 'redux-act'
import { costType } from 'types/cost'

export const actionCostsRequest = createAction('COSTS_REQUEST')
export const actionCostsRequestSucceed = createAction<costType[]>(
  'COSTS_REQUEST_SUCCEED',
  (costs) => costs,
)
export const actionCostsRequestFailed = createAction('COSTS_REQUEST_FAILED')

export const actionCostEditRequest = createAction('COST_EDIT_REQUEST')
export const actionCostsEditSucceed = createAction<costType>(
  'COST_EDIT_SUCCEED',
  (cost) => cost,
)
export const actionCostEditFailed = createAction('COST_EDIT_FAILED')

export const actionCreateCostRequest = createAction('CREATE_COST')
export const actionCreateCostSucceed = createAction<costType>(
  'CREATE_COST_SUCCEED',
)
export const actionCreateCostFailed = createAction('CREATE_COST_FAILED')

export const actionDeleteCostRequest = createAction('DELETE_COST')
export const actionDeleteCostSucceed = createAction<{ id: string }>(
  'DELETE_COST_SUCCEED',
)
export const actionDeleteCostFailed = createAction('DELETE_COST_FAILED')
