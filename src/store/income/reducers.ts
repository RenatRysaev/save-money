import { createReducer } from 'redux-act'
import { fromJS } from 'immutable'
import { arrayToMap } from 'utils'
import { handleSimilarActions } from 'utils/reducer'

import {
  actionCreateIncomeSucceed,
  actionGetIncomeSucceed,
  actionUpdateIncomeSucceed,
  actionRemoveIncomeSucceed,
  requestActions,
  failActions,
} from './actions'


const initialState = fromJS({
  entities: [],
  isLoading: false,
})

const incomeReducer = createReducer({}, initialState)

const handleActions = handleSimilarActions(incomeReducer)

handleActions(requestActions, 'isLoading', true)
handleActions(failActions, 'isLoading', false)


incomeReducer.on(actionCreateIncomeSucceed, (state, income) =>
  state
    .set('isLoading', false)
    .set('entities', state.get('entities').push(fromJS(income))),
)

incomeReducer.on(actionGetIncomeSucceed, (state, income) =>
  state
    .set('isLoading', false)
    .set('entities', fromJS(income)),
)

incomeReducer.on(actionUpdateIncomeSucceed, (state, income) => {
  const indexForUpdate = state
    .get('entities')
    .findIndex((item) => item.get('_id') === income._id)

  return state
    .set('isLoading', false)
    .setIn(['entities', indexForUpdate], fromJS(income))
})

incomeReducer.on(actionRemoveIncomeSucceed, (state, id) => {
  const indexForDelete = state
    .get('entities')
    .findIndex((item) => item.get('_id') === id)

  return state
    .set('isLoading', false)
    .removeIn(['entities', indexForDelete])
})

export default incomeReducer
