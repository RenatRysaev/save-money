import { createReducer } from 'redux-act'
import { fromJS } from 'immutable'
import { arrayToMap } from 'utils/index'

import {
  actionIncomeRequest,
  actionIncomeRequestFailed,
  actionIncomeRequestSucceed,
  actionCreateIncomeFailed,
  actionCreateIncomeRequest,
  actionCreateIncomeSucceed,
  actionDeleteIncomeFailed,
  actionDeleteIncomeRequest,
  actionDeleteIncomeSucceed,
  actionIncomeEditFailed,
  actionIncomeEditRequest,
  actionIncomeEditSucceed,
} from './actions'

const initialState = fromJS({
  entities: {},
  isLoading: false,
})

const incomeReducer = createReducer({}, initialState)

incomeReducer.on(actionIncomeRequest, (state) => state.set('isLoading', true))

incomeReducer.on(actionIncomeRequestSucceed, (state, income) =>
  state
    .set('entities', fromJS(arrayToMap(income, 'id')))
    .set('isLoading', false),
)

incomeReducer.on(actionIncomeRequestFailed, (state) =>
  state.set('isLoading', false),
)

incomeReducer.on(actionIncomeEditRequest, (state) =>
  state.set('isLoading', true),
)

incomeReducer.on(actionIncomeEditFailed, (state) =>
  state.set('isLoading', false),
)

incomeReducer.on(actionIncomeEditSucceed, (state, income) =>
  state.set('isLoading', false).setIn(['entities', income.id], income),
)

incomeReducer.on(actionCreateIncomeRequest, (state) =>
  state.set('isLoading', true),
)

incomeReducer.on(actionCreateIncomeFailed, (state) =>
  state.set('isLoading', false),
)

incomeReducer.on(actionCreateIncomeSucceed, (state, income) =>
  state.set('isLoading', false).setIn(['entities', income.id], income),
)

incomeReducer.on(actionDeleteIncomeRequest, (state) =>
  state.set('isLoading', true),
)

incomeReducer.on(actionDeleteIncomeFailed, (state) =>
  state.set('isLoading', false),
)

incomeReducer.on(actionDeleteIncomeSucceed, (state, income) =>
  state.set('isLoading', false).deleteIn(['entities', income.id]),
)

//
// const incomeReducer = createReducer(
//   {
// [actionIncomeRequest]: (state) => state.set('isLoading', true),

// [actionIncomeRequestSucceed]: (state, income) =>
//   state
//     .set('entities', fromJS(arrayToMap(income, 'id')))
//     .set('isLoading', false),

// [actionIncomeRequestFailed]: (state) => state.set('isLoading', false),

// [actionIncomeEditRequest]: (state) => state.set('isLoading', true),

// [actionIncomeEditFailed]: (state) => state.set('isLoading', false),

// [actionIncomeEditSucceed]: (state, income) =>
//   state.set('isLoading', false).setIn(['entities', income.id], income),

// [actionCreateIncomeRequest]: (state) => state.set('isLoading', true),

// [actionCreateIncomeFailed]: (state) => state.set('isLoading', false),

// [actionCreateIncomeSucceed]: (state, income) =>
//   state.set('isLoading', false).setIn(['entities', income.id], income),

// [actionDeleteIncomeRequest]: (state) => state.set('isLoading', true),

// [actionDeleteIncomeFailed]: (state) => state.set('isLoading', false),

//     [actionDeleteIncomeSucceed]: (state, income) =>
//       state.set('isLoading', false).deleteIn(['entities', income.id]),
//   },
//   initialState,
// )

export default incomeReducer
