import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import moxios from 'moxios'

import { API_URL } from 'constants/api'
import api from 'api'

import {
  actionGetExpenses,
  actionGetExpensesSucceed,
  actionGetExpensesFail,
  actionCreateExpense,
  actionCreateExpenseSucceed,
  actionCreateExpenseFail,
  actionUpdateExpense,
  actionUpdateExpenseSucceed,
  actionUpdateExpenseFail,
  actionRemoveExpense,
  actionRemoveExpenseSucceed,
  actionRemoveExpenseFail,
} from 'store/expense/actions'

import {
  thunkGetExpenses,
  thunkCreateExpense,
  thunkUpdateExpense,
  thunkRemoveExpense,
} from 'store/expense/thunks'

import { ExpenseKind, ExpenseType, IExpense } from 'types/expense'


const middlewares = [thunk.withExtraArgument(api)]
const mockStore = configureMockStore(middlewares)


describe('Expense thunks', () => {
  beforeEach(() => moxios.install())
  afterEach(() => moxios.uninstall())

  it('Get expenses thunk (SUCCESSFUL CASE)', async () => {
    const expense = { id: '123', name: '123', sum: 123, date: '20.05.1016', type: ExpenseType.ACTUAL, kind: ExpenseKind.PERMANENT, currency: 'RUB' }

    moxios.stubRequest(
      `${API_URL.V1}/expenses?`,
      { response: expense },
    )

    const expectedActions = [
      actionGetExpenses(),
      actionGetExpensesSucceed(expense),
    ]

    const store = mockStore({})

    await store.dispatch(thunkGetExpenses())

    return expect(store.getActions()).toEqual(expectedActions)
  })

  it('Get expenses thunk (FAIL CASE)', async () => {
    moxios.stubRequest(
      `${API_URL.V1}/expenses?`,
      { response: null, status: 500 },
    )

    const expectedActions = [
      actionGetExpenses(),
      actionGetExpensesFail(),
    ]

    const store = mockStore({})

    await store.dispatch(thunkGetExpenses())

    return expect(store.getActions()).toEqual(expectedActions)
  })

  it('Create expense thunk (SUCCESSFUL CASE)', async () => {
    const expense = { id: '123', name: '123', sum: 123, date: '20.05.1016', type: ExpenseType.ACTUAL, kind: ExpenseKind.PERMANENT, currency: 'RUB' }

    moxios.stubRequest(
      `${API_URL.V1}/expenses/create`,
      { response: expense },
    )

    const expectedActions = [
      actionCreateExpense(),
      actionCreateExpenseSucceed(expense),
    ]

    const store = mockStore({})

    await store.dispatch(thunkCreateExpense(expense))

    return expect(store.getActions()).toEqual(expectedActions)
  })

  it('Create expense thunk (FAIL CASE)', async () => {
    const expense = { id: '123', name: '123', sum: 123, date: '20.05.1016', type: ExpenseType.ACTUAL, kind: ExpenseKind.PERMANENT, currency: 'RUB' }

    moxios.stubRequest(
      `${API_URL.V1}/expenses/create`,
      { response: null, status: 500 },
    )

    const expectedActions = [
      actionCreateExpense(),
      actionCreateExpenseFail(),
    ]

    const store = mockStore({})

    await store.dispatch(thunkCreateExpense(expense))

    return expect(store.getActions()).toEqual(expectedActions)
  })

  it('Update expense thunk (SUCCESSFUL CASE)', async () => {
    const expense = { id: '123', name: '123', sum: 123, date: '20.05.1016', type: ExpenseType.ACTUAL, kind: ExpenseKind.PERMANENT, currency: 'RUB' }

    moxios.stubRequest(
      `${API_URL.V1}/expenses/${expense.id}`,
      { response: expense },
    )

    const expectedActions = [
      actionUpdateExpense(),
      actionUpdateExpenseSucceed(expense),
    ]

    const store = mockStore({})

    await store.dispatch(thunkUpdateExpense(expense.id, expense))

    return expect(store.getActions()).toEqual(expectedActions)
  })

  it('Update expense thunk (FAIL CASE)', async () => {
    const expense = { id: '123', name: '123', sum: 123, date: '20.05.1016', type: ExpenseType.ACTUAL, kind: ExpenseKind.PERMANENT, currency: 'RUB' }

    moxios.stubRequest(
      `${API_URL.V1}/expenses/${expense.id}`,
      { response: null, status: 500 },
    )

    const expectedActions = [
      actionUpdateExpense(),
      actionUpdateExpenseFail(),
    ]

    const store = mockStore({})

    await store.dispatch(thunkUpdateExpense(expense.id, expense))

    return expect(store.getActions()).toEqual(expectedActions)
  })

  it('Remove expense thunk (SUCCESSFUL CASE)', async () => {
    const expense = { id: '123', name: '123', sum: 123, date: '20.05.1016', type: ExpenseType.ACTUAL, kind: ExpenseKind.PERMANENT, currency: 'RUB' }

    moxios.stubRequest(
      `${API_URL.V1}/expenses/${expense.id}`,
      { response: expense },
    )

    const expectedActions = [
      actionRemoveExpense(),
      actionRemoveExpenseSucceed(expense),
    ]

    const store = mockStore({})

    await store.dispatch(thunkRemoveExpense(expense.id))

    return expect(store.getActions()).toEqual(expectedActions)
  })

  it('Remove expense thunk (FAIL CASE)', async () => {
    const expense = { id: '123', name: '123', sum: 123, date: '20.05.1016', type: ExpenseType.ACTUAL, kind: ExpenseKind.PERMANENT, currency: 'RUB' }

    moxios.stubRequest(
      `${API_URL.V1}/expenses/${expense.id}`,
      { response: null, status: 500 },
    )

    const expectedActions = [
      actionRemoveExpense(),
      actionRemoveExpenseFail(),
    ]

    const store = mockStore({})

    await store.dispatch(thunkRemoveExpense(expense.id))

    return expect(store.getActions()).toEqual(expectedActions)
  })
})
