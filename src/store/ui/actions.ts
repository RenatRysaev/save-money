import { createAction } from 'redux-act'
import { modalType } from 'types/modal'

export const actionOpenModal = createAction<modalType>(
  'OPEN_MODAL',
  (modal) => modal,
)
export const actionCloseModal = createAction<string>(
  'CLOSE_MODAL',
  (name) => name,
)
