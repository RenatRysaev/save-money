import { createAction } from 'redux-act'
import { IModal } from 'types/modal'

export const actionOpenModal = createAction<IModal>(
  'OPEN_MODAL',
  (modal) => modal,
)
export const actionCloseModal = createAction<string>(
  'CLOSE_MODAL',
  (name) => name,
)
