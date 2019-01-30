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
} from './actions'

const initialState = fromJS({
  entities: {},
  isLoading: false,
})

const costsReducer = createReducer(
  {
    [actionCostsRequest]: (state) => state.set('isLoading', true),

    [actionCostsRequestSucceed]: (state, costs) =>
      state
        .set('entities', fromJS(arrayToMap(costs, 'id')))
        .set('isLoading', false),

    [actionCostsRequestFailed]: (state) => state.set('isLoading', false),

    [actionCostEditRequest]: (state) => state.set('isLoading', true),

    [actionCostEditFailed]: (state) => state.set('isLoading', false),

    [actionCostsEditSucceed]: (state, cost) =>
      state.set('isLoading', false).setIn(['entities', cost.id], cost),
  },
  initialState,
)

export default costsReducer
