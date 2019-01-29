import { createAction } from 'redux-act'

export const actionCostsRequest = createAction('COSTS_REQUEST')
export const actionCostsRequestSucceed = createAction(
  'COSTS_REQUEST_SUCCEED',
  (costs) => costs,
)
export const actionCostsRequestFailed = createAction('COSTS_REQUEST_FAILED')
