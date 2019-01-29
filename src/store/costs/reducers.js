import { createReducer } from 'redux-act'
import { fromJS } from 'immutable'

import {
  actionCostsRequest,
  actionCostsRequestFailed,
  actionCostsRequestSucceed,
} from './actions'

const initialState = fromJS({
  entities: [],
  isLoading: false,
})

const costsReducer = createReducer(
  {
    [actionCostsRequest]: (state) => state.set('isLoading', true),

    [actionCostsRequestSucceed]: (state, costs) =>
      state.set('entities', fromJS(costs)).set('isLoading', false),

    [actionCostsRequestFailed]: (state) => state.set('isLoading', false),
  },
  initialState,
)

export default costsReducer
