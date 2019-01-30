import { createAction } from 'redux-act'

export const actionCostsRequest = createAction('COSTS_REQUEST')
export const actionCostsRequestSucceed = createAction(
  'COSTS_REQUEST_SUCCEED',
  (costs) => costs,
)
export const actionCostsRequestFailed = createAction('COSTS_REQUEST_FAILED')

export const actionCostEditRequest = createAction('COST_EDIT_REQUEST')
export const actionCostsEditSucceed = createAction(
  'COST_EDIT_SUCCEED',
  (cost) => cost,
)
export const actionCostEditFailed = createAction('COST_EDIT_FAILED')
