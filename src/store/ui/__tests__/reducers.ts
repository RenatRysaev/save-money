import uiReducer, { initialState } from 'store/ui/reducers'
import { actionOpenModal, actionCloseModal } from 'store/ui/actions'

describe('ui reducer', () => {
  it('Should return the initial state', () => {
    expect(uiReducer(undefined, { type: 'AnyAction' }))
      .toEqual(initialState)
  })

  it('Should handle actionOpenModal', () => {
    const modal = { name: 'SuperModal', title: 'Super Modal Title' }
    const expectedState = initialState.setIn(['modals', modal.name], modal)

    expect(uiReducer(
      initialState,
      actionOpenModal(modal),
    ))
      .toEqual(expectedState)
  })

  it('Should handle actionCloseModal', () => {
    const modal = { name: 'SuperModal', title: 'Super Modal Title' }
    const currentState = initialState.setIn(['modals', modal.name], modal)
    const expectedState = currentState.deleteIn(['modals', modal.name])

    expect(uiReducer(
      currentState,
      actionCloseModal(modal.name),
    ))
      .toEqual(expectedState)
  })
})
