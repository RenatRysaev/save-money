import { createAction } from 'redux-act'

export const actionOpenModal = createAction<{
  name: string
  title: string
  component: Promise<any>
}>('OPEN_MODAL', (modal) => modal)
export const actionCloseModal = createAction('CLOSE_MODAL', (name) => name)
