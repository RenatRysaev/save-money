import uiReducer, { initialState } from 'store/ui/reducers'
import { actionOpenModal, actionCloseModal } from 'store/ui/actions'

describe('ui reducer', () => {
  it('Should return the initial state', () => {
    expect(uiReducer(undefined, { type: 'AnyAction' }))
      .toEqual(initialState)
  })

  it('Should handle OPEN_MODAL', () => {
    const modal = { name: 'SuperModal', title: 'Super Modal Title' }

    expect(uiReducer(
      initialState,
      actionOpenModal(modal),
    ))
      .toEqual(initialState.setIn(['modals', modal.name], modal))
  })

  it('Should handle CLOSE_MODAL', () => {
    const modal = { name: 'SuperModal', title: 'Super Modal Title' }
    const state = initialState.setIn(['modals', modal.name], modal)

    expect(uiReducer(
      state,
      actionCloseModal(modal.name),
    ))
      .toEqual(state.deleteIn(['modals', modal.name]))
  })
})
