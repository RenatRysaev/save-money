import { createReducer } from 'redux-act'
import { fromJS } from 'immutable'

import { actionOpenModal, actionCloseModal } from './actions'

const initialState = fromJS({
  modals: {},
})

const uiReducer = createReducer({}, initialState)

uiReducer.on(actionOpenModal, (state, modal) =>
  state.setIn(['modals', modal.name], modal),
)

uiReducer.on(actionCloseModal, (state, modalName) =>
  state.deleteIn(['modals', modalName]),
)

export default uiReducer
