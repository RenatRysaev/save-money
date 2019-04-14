import { fromJS } from 'immutable'
import expenseReducer, { initialState } from 'store/expense/reducers'
import {
  actionCreateExpense,
  actionCreateExpenseSucceed,
  actionCreateExpenseFail,
  actionGetExpenses,
  actionGetExpensesSucceed,
  actionGetExpensesFail,
  actionUpdateExpense,
  actionUpdateExpenseSucceed,
  actionUpdateExpenseFail,
  actionRemoveExpense,
  actionRemoveExpenseSucceed,
  actionRemoveExpenseFail,
} from 'store/expense/actions'


describe('expense reducer', () => {
  it('Should return the initial state', () => {
    expect(expenseReducer(undefined, { type: 'AnyAction' }))
      .toEqual(initialState)
  })


  it('Should handle actionCreateExpense', () => {
    expect(expenseReducer(
      initialState,
      actionCreateExpense(),
    ))
      .toEqual(initialState.set('isLoading', true))
  })

  it('Should handle actionCreateExpenseSucceed', () => {
    const expense = { _id: '123', sum: 123, name: 'Salary', currency: 'RUB', kind: 'permanent', type: 'planned' }
    const currentState = initialState.set('isLoading', true)
    const expectedState = currentState
      .set(
        'entities',
        initialState.get('entities').push(fromJS(expense))
      )
      .set('isLoading', false)

    expect(expenseReducer(
      currentState,
      actionCreateExpenseSucceed(expense),
    ))
      .toEqual(expectedState)
  })

  it('Should handle actionCreateExpenseFail', () => {
    expect(expenseReducer(
      initialState,
      actionCreateExpenseFail(),
    ))
      .toEqual(initialState.set('isLoading', false))
  })


  it('Should handle actionGetExpenses', () => {
    expect(expenseReducer(
      initialState,
      actionGetExpenses(),
    ))
      .toEqual(initialState.set('isLoading', true))
  })

  it('Should handle actionGetExpensesSucceed', () => {
    const expense = { _id: '123', sum: 123, name: 'Salary', currency: 'RUB', kind: 'permanent', type: 'planned' }
    const expenseArray = [expense]
    const currentState = initialState.set('isLoading', true)
    const expectedState = currentState
      .set('entities', fromJS(expenseArray))
      .set('isLoading', false)

    expect(expenseReducer(
      currentState,
      actionGetExpensesSucceed(expenseArray),
    ))
      .toEqual(expectedState)
  })

  it('Should handle actionGetExpensesFail', () => {
    expect(expenseReducer(
      initialState,
      actionGetExpensesFail(),
    ))
      .toEqual(initialState.set('isLoading', false))
  })


  it('Should handle actionUpdateExpense', () => {
    expect(expenseReducer(
      initialState,
      actionUpdateExpense(),
    ))
      .toEqual(initialState.set('isLoading', true))
  })

  it('Should handle actionUpdateExpenseSucceed', () => {
    const expense = { _id: '123', sum: 123, name: 'Salary', currency: 'RUB', kind: 'permanent', type: 'planned' }
    const expenseArray = [expense]
    const updatedExpense = { ...expense, name: 'updated-name' }
    const currentState = initialState
      .set('isLoading', true)
      .set('entities', fromJS(expenseArray))

    const indexForUpdate = currentState
      .get('entities')
      .findIndex((item) => item.get('_id') === updatedExpense._id)

    const expectedState = currentState
      .set('isLoading', false)
      .setIn(['entities', indexForUpdate], fromJS(updatedExpense))

    expect(expenseReducer(
      currentState,
      actionUpdateExpenseSucceed(updatedExpense),
    ))
      .toEqual(expectedState)
  })

  it('Should handle actionUpdateExpenseFail', () => {
    expect(expenseReducer(
      initialState,
      actionUpdateExpenseFail(),
    ))
      .toEqual(initialState.set('isLoading', false))
  })


  it('Should handle actionRemoveExpense', () => {
    expect(expenseReducer(
      initialState,
      actionRemoveExpense(),
    ))
      .toEqual(initialState.set('isLoading', true))
  })

  it('Should handle actionRemoveExpenseSucceed', () => {
    const expense = { _id: '123', sum: 123, name: 'Salary', currency: 'RUB', kind: 'permanent', type: 'planned' }
    const id = '456'
    const expenseArray = [expense, { ...expense, _id: id }]
    const currentState = initialState
      .set('isLoading', true)
      .set('entities', fromJS(expenseArray))

    const expectedState = currentState
      .set('isLoading', false)
      .set('entities', fromJS(expenseArray.filter(item => item._id !== id)))

    expect(expenseReducer(
      currentState,
      actionRemoveExpenseSucceed({ id }),
    ))
      .toEqual(expectedState)
  })

  it('Should handle actionRemoveExpenseFail', () => {
    expect(expenseReducer(
      initialState,
      actionRemoveExpenseFail(),
    ))
      .toEqual(initialState.set('isLoading', false))
  })
})
