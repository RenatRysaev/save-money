import { createReducer } from 'redux-act'
import { fromJS } from 'immutable'
import { arrayToMap } from 'utils'

import {
  actionCostsRequest,
  actionCostsRequestFailed,
  actionCostsRequestSucceed,
  actionCostsEditSucceed,
  actionCostEditRequest,
  actionCostEditFailed,
  actionCreateCostRequest,
  actionCreateCostFailed,
  actionCreateCostSucceed,
  actionDeleteCostFailed,
  actionDeleteCostRequest,
  actionDeleteCostSucceed,
} from './actions'

const initialState = fromJS({
  entities: {},
  isLoading: false,
})

const costsReducer = createReducer({}, initialState)

costsReducer.on(actionCostsRequest, (state) => state.set('isLoading', true))

costsReducer.on(actionCostsRequestSucceed, (state, costs) =>
  state
    .set('isLoading', false)
    .set('entities', fromJS(arrayToMap(costs, 'id'))),
)

costsReducer.on(actionCostsRequestFailed, (state) =>
  state.set('isLoading', false),
)

costsReducer.on(actionCostEditRequest, (state) => state.set('isLoading', false))

costsReducer.on(actionCostEditFailed, (state) => state.set('isLoading', false))

costsReducer.on(actionCostsEditSucceed, (state, cost) =>
  state.set('isLoading', false).setIn(['entities', cost.id], cost),
)

costsReducer.on(actionCreateCostRequest, (state) =>
  state.set('isLoading', true),
)

costsReducer.on(actionCreateCostSucceed, (state, cost) =>
  state.set('isLoading', false).setIn(['entities', cost.id], cost),
)

costsReducer.on(actionCreateCostFailed, (state) =>
  state.set('isLoading', false),
)

costsReducer.on(actionDeleteCostRequest, (state) =>
  state.set('isLoading', true),
)

costsReducer.on(actionDeleteCostFailed, (state) =>
  state.set('isLoading', false),
)

costsReducer.on(actionDeleteCostSucceed, (state, cost) =>
  state.set('isLoading', false).deleteIn(['entities', cost.id]),
)

// const costsReducer = createReducer(
//   {
// [actionCostsRequest]: (state) => state.set('isLoading', true),
//
// [actionCostsRequestSucceed]: (state, costs) =>
//   state
//     .set('entities', fromJS(arrayToMap(costs, 'id')))
//     .set('isLoading', false),
//
// [actionCostsRequestFailed]: (state) => state.set('isLoading', false),

// [actionCostEditRequest]: (state) => state.set('isLoading', true),

// [actionCostEditFailed]: (state) => state.set('isLoading', false),

// [actionCostsEditSucceed]: (state, cost) =>
//   state.set('isLoading', false).setIn(['entities', cost.id], cost),

// [actionCreateCostRequest]: (state) => state.set('isLoading', true),

// [actionCreateCostFailed]: (state) => state.set('isLoading', false),

// [actionCreateCostSucceed]: (state, cost) =>
//   state.set('isLoading', false).setIn(['entities', cost.id], cost),

// [actionDeleteCostRequest]: (state) => state.set('isLoading', true),

//     [actionDeleteCostFailed]: (state) => state.set('isLoading', false),
//
//     [actionDeleteCostSucceed]: (state, cost) =>
//       state.set('isLoading', false).deleteIn(['entities', cost.id]),
//   },
//   initialState,
// )

export default costsReducer
