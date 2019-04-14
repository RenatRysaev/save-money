import { createReducer } from 'redux-act'
import { fromJS } from 'immutable'
import { handleSimilarActions } from 'utils/reducer'

import {
  actionCreateExpenseSucceed,
  actionGetExpensesSucceed,
  actionRemoveExpenseSucceed,
  actionUpdateExpenseSucceed,
  requestActions,
  failActions,
} from './actions'

export const initialState = fromJS({
  entities: [],
  isLoading: false,
})

const expenseReducer = createReducer({}, initialState)

const handleActions = handleSimilarActions(expenseReducer)

handleActions(requestActions, 'isLoading', true)
handleActions(failActions, 'isLoading', false)

expenseReducer.on(actionCreateExpenseSucceed, (state, expense) =>
  state
    .set('isLoading', false)
    .set('entities', state.get('entities').push(fromJS(expense))),
)

expenseReducer.on(actionGetExpensesSucceed, (state, expenses) =>
  state
    .set('isLoading', false)
    .set('entities', fromJS(expenses)),
)

expenseReducer.on(actionUpdateExpenseSucceed, (state, expense) => {
  const indexForUpdate = state
    .get('entities')
    .findIndex((item) => item.get('_id') === expense._id)

  return state
    .set('isLoading', false)
    .setIn(['entities', indexForUpdate], fromJS(expense))
})

expenseReducer.on(actionRemoveExpenseSucceed, (state, { id }) => {
  const indexForDelete = state
    .get('entities')
    .findIndex((item) => item.get('_id') === id)

  return state
    .set('isLoading', false)
    .removeIn(['entities', indexForDelete])
})

export default expenseReducer
