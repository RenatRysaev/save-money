import { fromJS } from 'immutable'
import authReducer, { initialState } from 'store/auth/reducers'
import {
  actionLoginRequest,
  actionLoginSuccess,
  actionLoginFail,
  actionRegistrationRequest,
  actionRegistrationSuccess,
  actionRegistrationFail,
} from 'store/auth/actions'


describe('auth reducer', () => {
  it('Should return the initial state', () => {
    expect(authReducer(undefined, { type: 'AnyAction' }))
      .toEqual(initialState)
  })

  it('Should handle actionLoginRequest', () => {
    const expectedState = initialState.set('isLoading', true)

    expect(authReducer(
      initialState,
      actionLoginRequest(),
    ))
      .toEqual(expectedState)
  })

  it('Should handle actionLoginFail', () => {
    const expectedState = initialState.set('isLoading', false)

    expect(authReducer(
      initialState,
      actionLoginFail(),
    ))
      .toEqual(expectedState)
  })

  it('Should handle actionLoginSuccess', () => {
    const user = { name: 'super-user' }
    const expectedState = initialState
      .set('isLoading', false)
      .set('isLogin', true)
      .set('user', fromJS(user))

    expect(authReducer(
      initialState,
      actionLoginSuccess(user),
    ))
      .toEqual(expectedState)
  })

  it('Should handle actionRegistrationRequest', () => {
    const expectedState = initialState.set('isLoading', true)

    expect(authReducer(
      initialState,
      actionRegistrationRequest(),
    ))
      .toEqual(expectedState)
  })

  it('Should handle actionRegistrationSuccess', () => {
    const expectedState = initialState.set('isLoading', false)

    expect(authReducer(
      initialState,
      actionRegistrationSuccess(),
    ))
      .toEqual(expectedState)
  })

  it('Should handle actionRegistrationFail', () => {
    const expectedState = initialState.set('isLoading', false)

    expect(authReducer(
      initialState,
      actionRegistrationFail(),
    ))
      .toEqual(expectedState)
  })
})
