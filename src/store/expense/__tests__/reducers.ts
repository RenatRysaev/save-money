import { fromJS } from 'immutable'
import expenseReducer, { initialState } from 'store/expense/reducers'
import {
  actionCreateExpense,
  actionCreateExpenseFail,
  actionCreateExpenseSucceed,
  actionGetExpenses,
  actionGetExpensesFail,
  actionGetExpensesSucceed,
  actionRemoveExpense,
  actionRemoveExpenseFail,
  actionRemoveExpenseSucceed,
  actionUpdateExpense,
  actionUpdateExpenseFail,
  actionUpdateExpenseSucceed,
} from 'store/expense/actions'


describe('expense reducer', () => {
  it('Should return the initial state', () => {
    expect(expenseReducer(undefined, { type: 'AnyAction' }))
      .toEqual(initialState)
  })

  it('Should handle actionCreateExpenseSucceed', () => {
    const expense = { _id: '123', sum: 123, name: 'Salary', currency: 'RUB', kind: 'permanent', type: 'planned' }
    const state = initialState.set('isLoading', true)
    const nextState = state
      .set(
        'entities',
        initialState.get('entities').push(fromJS(expense))
      )
      .set('isLoading', false)

    expect(expenseReducer(
      state,
      actionCreateExpenseSucceed(expense),
    ))
      .toEqual(nextState)
  })

  it('Should handle actionGetExpensesSucceed', () => {
    const expense = { _id: '123', sum: 123, name: 'Salary', currency: 'RUB', kind: 'permanent', type: 'planned' }
    const expenseArray = [expense]
    const state = initialState.set('isLoading', true)
    const nextState = state
      .set('entities', fromJS(expenseArray))
      .set('isLoading', false)

    expect(expenseReducer(
      state,
      actionGetExpensesSucceed(expenseArray),
    ))
      .toEqual(nextState)
  })

  it('Should handle actionRemoveExpenseSucceed', () => {
    const expense = { _id: '123', sum: 123, name: 'Salary', currency: 'RUB', kind: 'permanent', type: 'planned' }
    const id = '456'
    const expenseArray = [expense, { ...expense, _id: id }]
    const state = initialState
      .set('isLoading', true)
      .set('entities', fromJS(expenseArray))

    const nextState = state
      .set('isLoading', false)
      .set('entities', fromJS(expenseArray.filter(item => item._id !== id)))

    expect(expenseReducer(
      state,
      actionRemoveExpenseSucceed({ id }),
    ))
      .toEqual(nextState)
  })

  it('Should handle actionUpdateExpenseSucceed', () => {
    const expense = { _id: '123', sum: 123, name: 'Salary', currency: 'RUB', kind: 'permanent', type: 'planned' }
    const expenseArray = [expense]
    const updatedExpense = { ...expense, name: 'updated-name' }
    const state = initialState
      .set('isLoading', true)
      .set('entities', fromJS(expenseArray))

    const indexForUpdate = state
      .get('entities')
      .findIndex((item) => item.get('_id') === updatedExpense._id)

    const nextState = state
      .set('isLoading', false)
      .setIn(['entities', indexForUpdate], fromJS(updatedExpense))

    expect(expenseReducer(
      state,
      actionUpdateExpenseSucceed(updatedExpense),
    ))
      .toEqual(nextState)
  })

  it('Should handle actionCreateExpense', () => {
    expect(expenseReducer(
      initialState,
      actionCreateExpense(),
    ))
      .toEqual(initialState.set('isLoading', true))
  })

  it('Should handle actionGetExpenses', () => {
    expect(expenseReducer(
      initialState,
      actionGetExpenses(),
    ))
      .toEqual(initialState.set('isLoading', true))
  })

  it('Should handle actionUpdateExpense', () => {
    expect(expenseReducer(
      initialState,
      actionUpdateExpense(),
    ))
      .toEqual(initialState.set('isLoading', true))
  })

  it('Should handle actionRemoveExpense', () => {
    expect(expenseReducer(
      initialState,
      actionRemoveExpense(),
    ))
      .toEqual(initialState.set('isLoading', true))
  })

  it('Should handle actionRemoveExpenseFail', () => {
    expect(expenseReducer(
      initialState,
      actionRemoveExpenseFail(),
    ))
      .toEqual(initialState.set('isLoading', false))
  })

  it('Should handle actionCreateExpenseFail', () => {
    expect(expenseReducer(
      initialState,
      actionCreateExpenseFail(),
    ))
      .toEqual(initialState.set('isLoading', false))
  })

  it('Should handle actionGetExpensesFail', () => {
    expect(expenseReducer(
      initialState,
      actionGetExpensesFail(),
    ))
      .toEqual(initialState.set('isLoading', false))
  })

  it('Should handle actionUpdateExpenseFail', () => {
    expect(expenseReducer(
      initialState,
      actionUpdateExpenseFail(),
    ))
      .toEqual(initialState.set('isLoading', false))
  })
})
