import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { push, replace } from 'connected-react-router'

import moxios from 'moxios'

import { API_URL } from 'constants/api'
import { ROUTES } from 'constants/routes'
import api from 'api'

import {
  actionRegistrationRequest,
  actionRegistrationSuccess,
  actionRegistrationFail,
  actionLoginRequest,
  actionLoginSuccess,
  actionLoginFail,
  actionLogout,
} from 'store/auth/actions'

import {
  thunkRegistration,
  thunkLogin,
  thunkCheckLogin,
  thunkLogout,
} from 'store/auth/thunks'


const middlewares = [thunk.withExtraArgument(api)]
const mockStore = configureMockStore(middlewares)


describe('Auth thunks', () => {
  beforeEach(() => moxios.install())
  afterEach(() => moxios.uninstall())

  it('Registration thunk (SUCCESSFUL CASE)', async () => {
    const userData = { login: 'login', name: 'name', password: '123' }

    moxios.stubRequest(
      `${API_URL.V1}/registration`,
      {
        response: userData,
      },
    )

    const expectedActions = [
      actionRegistrationRequest(),
      actionRegistrationSuccess(userData),
      push(ROUTES.LOGIN.path),
    ]

    const store = mockStore({})

    await store.dispatch(thunkRegistration(userData))

    return expect(store.getActions()).toEqual(expectedActions)
  })

  it('Registration thunk (FAIL CASE)', async () => {
    const userData = { login: 'login', name: 'name', password: '123' }

    moxios.stubRequest(
      `${API_URL.V1}/registration`,
      {
        response: null,
        status: 400,
      },
    )

    const expectedActions = [
      actionRegistrationRequest(),
      actionRegistrationFail(),
    ]

    const store = mockStore({})

    await store.dispatch(thunkRegistration(userData))

    return expect(store.getActions()).toEqual(expectedActions)
  })

  it('Login thunk (SUCCESSFUL CASE)', async () => {
    const userData = { login: 'login', password: '123', token: '123' }

    moxios.stubRequest(
      `${API_URL.V1}/login`,
      {
        response: userData,
      },
    )

    const expectedActions = [
      actionLoginRequest(),
      actionLoginSuccess(userData),
      push(ROUTES.BUDGET.path),
    ]

    const store = mockStore({})

    await store.dispatch(thunkLogin(userData))

    return expect(store.getActions()).toEqual(expectedActions)
  })

  it('Login thunk (FAIL CASE)', async () => {
    const userData = { login: 'login', password: '123', token: '123' }

    moxios.stubRequest(
      `${API_URL.V1}/login`,
      {
        response: null,
        status: 401,
      },
    )

    const expectedActions = [
      actionLoginRequest(),
      actionLoginFail(),
    ]

    const store = mockStore({})

    await store.dispatch(thunkLogin(userData))

    return expect(store.getActions()).toEqual(expectedActions)
  })

  it('Check login thunk (SUCCESSFUL CASE)', async () => {
    const userData = { login: 'login', password: '123', token: '123' }

    moxios.stubRequest(
      `${API_URL.V1}/check_login`,
      {
        status: 200,
        response: userData,
      },
    )

    const expectedActions = [
      actionLoginSuccess(userData),
    ]

    const store = mockStore({})

    await store.dispatch(thunkCheckLogin())

    return expect(store.getActions()).toEqual(expectedActions)
  })

  it('Check login thunk (FAIL CASE)', async () => {
    moxios.stubRequest(
      `${API_URL.V1}/check_login`,
      {
        status: 401,
        response: null,
      },
    )

    const expectedActions = [
      actionLoginFail(),
      replace(ROUTES.LOGIN.path),
    ]

    const store = mockStore({})

    await store.dispatch(thunkCheckLogin())

    return expect(store.getActions()).toEqual(expectedActions)
  })

  it('Logout thunk', async () => {
    const expectedActions = [
      actionLogout(),
      push(ROUTES.LOGIN.path),
    ]

    const store = mockStore({})

    await store.dispatch(thunkLogout())

    return expect(store.getActions()).toEqual(expectedActions)
  })
})
