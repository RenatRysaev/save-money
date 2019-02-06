import { createReducer } from 'redux-act'
import { fromJS } from 'immutable'

import { actionOpenModal, actionCloseModal } from './actions'

const initialState = fromJS({
  modals: {},
})

const uiReducer = createReducer(
  {
    [actionOpenModal]: (state, modal) =>
      state.setIn(['modals', modal.name], modal),

    [actionCloseModal]: (state, modalName) =>
      state.deleteIn(['modals', modalName]),
  },
  initialState,
)

export default uiReducer
