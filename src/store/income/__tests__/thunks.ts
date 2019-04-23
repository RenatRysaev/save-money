import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import moxios from 'moxios'

import { API_URL } from 'constants/api'
import api from 'api'

import {
  actionGetIncome,
  actionGetIncomeSucceed,
  actionGetIncomeFail,
  actionCreateIncome,
  actionCreateIncomeSucceed,
  actionCreateIncomeFail,
  actionUpdateIncome,
  actionUpdateIncomeSucceed,
  actionUpdateIncomeFail,
  actionRemoveIncome,
  actionRemoveIncomeSucceed,
  actionRemoveIncomeFail,
} from 'store/income/actions'

import {
  thunkGetIncome,
  thunkCreateIncome,
  thunkUpdateIncome,
  thunkRemoveIncome,
} from 'store/income/thunks'


const middlewares = [thunk.withExtraArgument(api)]
const mockStore = configureMockStore(middlewares)


describe('Expense thunks', () => {
  beforeEach(() => moxios.install())
  afterEach(() => moxios.uninstall())

  it('Get income thunk (SUCCESSFUL CASE)', async () => {
    const income = { id: '123', name: '123', sum: 123, currency: 'RUB' }

    moxios.stubRequest(
      `${API_URL.V1}/income`,
      { response: income },
    )

    const expectedActions = [
      actionGetIncome(),
      actionGetIncomeSucceed(income),
    ]

    const store = mockStore({})

    await store.dispatch(thunkGetIncome())

    return expect(store.getActions()).toEqual(expectedActions)
  })

  it('Get income thunk (FAIL CASE)', async () => {
    moxios.stubRequest(
      `${API_URL.V1}/income`,
      { response: null, status: 500 },
    )

    const expectedActions = [
      actionGetIncome(),
      actionGetIncomeFail(),
    ]

    const store = mockStore({})

    await store.dispatch(thunkGetIncome())

    return expect(store.getActions()).toEqual(expectedActions)
  })

  it('Create income thunk (SUCCESSFUL CASE)', async () => {
    const income = { _id: '123', name: '123', sum: 123, currency: 'RUB' }

    moxios.stubRequest(
      `${API_URL.V1}/income/create`,
      { response: income },
    )

    const expectedActions = [
      actionCreateIncome(),
      actionCreateIncomeSucceed(income),
    ]

    const store = mockStore({})

    await store.dispatch(thunkCreateIncome(income))

    return expect(store.getActions()).toEqual(expectedActions)
  })

  it('Create income thunk (FAIL CASE)', async () => {
    const income = { _id: '123', name: '123', sum: 123, currency: 'RUB' }

    moxios.stubRequest(
      `${API_URL.V1}/income/create`,
      { response: null, status: 500 },
    )

    const expectedActions = [
      actionCreateIncome(),
      actionCreateIncomeFail(),
    ]

    const store = mockStore({})

    await store.dispatch(thunkCreateIncome(income))

    return expect(store.getActions()).toEqual(expectedActions)
  })


  it('Update income thunk (SUCCESSFUL CASE)', async () => {
    const income = { _id: '123', name: '123', sum: 123, currency: 'RUB' }

    moxios.stubRequest(
      `${API_URL.V1}/income/${income._id}`,
      { response: income },
    )

    const expectedActions = [
      actionUpdateIncome(),
      actionUpdateIncomeSucceed(income),
    ]

    const store = mockStore({})

    await store.dispatch(thunkUpdateIncome(income._id, income))

    return expect(store.getActions()).toEqual(expectedActions)
  })

  it('Update income thunk (FAIL CASE)', async () => {
    const income = { _id: '123', name: '123', sum: 123, currency: 'RUB' }

    moxios.stubRequest(
      `${API_URL.V1}/income/${income._id}`,
      { response: null, status: 500 },
    )

    const expectedActions = [
      actionUpdateIncome(),
      actionUpdateIncomeFail(),
    ]

    const store = mockStore({})

    await store.dispatch(thunkUpdateIncome(income._id, income))

    return expect(store.getActions()).toEqual(expectedActions)
  })

  it('Remove income thunk (SUCCESSFUL CASE)', async () => {
    const income = { _id: '123', name: '123', sum: 123, currency: 'RUB' }

    moxios.stubRequest(
      `${API_URL.V1}/income/${income._id}`,
      { response: income },
    )

    const expectedActions = [
      actionRemoveIncome(),
      actionRemoveIncomeSucceed(income),
    ]

    const store = mockStore({})

    await store.dispatch(thunkRemoveIncome(income._id))

    return expect(store.getActions()).toEqual(expectedActions)
  })

  it('Remove income thunk (FAIL CASE)', async () => {
    const income = { _id: '123', name: '123', sum: 123, currency: 'RUB' }

    moxios.stubRequest(
      `${API_URL.V1}/income/${income._id}`,
      { response: null, status: 500 },
    )

    const expectedActions = [
      actionRemoveIncome(),
      actionRemoveIncomeFail(),
    ]

    const store = mockStore({})

    await store.dispatch(thunkRemoveIncome(income._id))

    return expect(store.getActions()).toEqual(expectedActions)
  })
})
