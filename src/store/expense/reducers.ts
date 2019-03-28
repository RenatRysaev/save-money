import { createReducer } from 'redux-act'
import { fromJS, Map } from 'immutable'
import { handleSimilarActions } from 'utils/reducer'

import {
  actionCreateExpenseSucceed,
  actionGetExpensesSucceed,
  actionRemoveExpenseSucceed,
  actionUpdateExpenseSucceed,
  requestActions,
  failActions,
} from './actions'

const initialState = fromJS({
  entities: [],
  isLoading: false,
})

const expenseReducer = createReducer({}, initialState)

const handleActions = handleSimilarActions(expenseReducer)

handleActions(requestActions, 'isLoading', true)
handleActions(failActions, 'isLoading', false)

expenseReducer.on(actionCreateExpenseSucceed, (state, expense) =>
  state.set('entities', state.get('entities').push(expense)),
)

expenseReducer.on(actionGetExpensesSucceed, (state, expenses) =>
  state.set('entities', expenses),
)

expenseReducer.on(actionUpdateExpenseSucceed, (state, expense) =>
  state.setIn(['entities', expense.id], expense),
)

expenseReducer.on(actionRemoveExpenseSucceed, (state, id) =>
  state.deleteIn(['entities', id]),
)
