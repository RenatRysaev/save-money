import { createAction } from 'redux-act'
import { IModalType } from 'types/modal'

export const actionOpenModal = createAction<IModalType>(
  'OPEN_MODAL',
  (modal) => modal,
)
export const actionCloseModal = createAction<string>(
  'CLOSE_MODAL',
  (name) => name,
)
