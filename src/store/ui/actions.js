import { createAction } from 'redux-act'

export const actionOpenModal = createAction('OPEN_MODAL', (modal) => modal)
export const actionCloseModal = createAction('CLOSE_MODAL', (name) => name)
