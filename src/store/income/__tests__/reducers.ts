import { fromJS } from 'immutable'
import incomeReducer, { initialState } from 'store/income/reducers'
import {
  actionCreateIncome,
  actionGetIncome,
  actionUpdateIncome,
  actionRemoveIncome,
  actionCreateIncomeSucceed,
  actionGetIncomeSucceed,
  actionRemoveIncomeSucceed,
  actionUpdateIncomeSucceed,
  actionCreateIncomeFail,
  actionGetIncomeFail,
  actionRemoveIncomeFail,
  actionUpdateIncomeFail,
} from 'store/income/actions'


describe('income reducer', () => {
  it('Should return the initial state', () => {
    expect(incomeReducer(undefined, { type: 'AnyAction' }))
      .toEqual(initialState)
  })

  it('Should handle actionCreateIncomeSucceed', () => {
    const income = { _id: '123', sum: 123, name: 'Salary', currency: 'RUB' }
    const state = initialState.set('isLoading', true)
    const nextState = state
      .set(
        'entities',
        initialState.get('entities').push(fromJS(income))
      )
      .set('isLoading', false)

    expect(incomeReducer(
      state,
      actionCreateIncomeSucceed(income),
    ))
      .toEqual(nextState)
  })

  it('Should handle actionGetIncomeSucceed', () => {
    const income = { _id: '123', sum: 123, name: 'Salary', currency: 'RUB' }
    const incomeArray = [income]
    const state = initialState.set('isLoading', true)
    const nextState = state
      .set('entities', fromJS(incomeArray))
      .set('isLoading', false)

    expect(incomeReducer(
      state,
      actionGetIncomeSucceed(incomeArray),
    ))
      .toEqual(nextState)
  })

  it('Should handle actionRemoveIncomeSucceed', () => {
    const income = { _id: '123', sum: 123, name: 'Salary', currency: 'RUB' }
    const id = '456'
    const incomeArray = [income, { ...income, _id: id }]
    const state = initialState
      .set('isLoading', true)
      .set('entities', fromJS(incomeArray))

    const nextState = state
      .set('isLoading', false)
      .set('entities', fromJS(incomeArray.filter(item => item._id !== id)))

    expect(incomeReducer(
      state,
      actionRemoveIncomeSucceed({ id }),
    ))
      .toEqual(nextState)
  })

  it('Should handle actionUpdateIncomeSucceed', () => {
    const income = { _id: '123', sum: 123, name: 'Salary', currency: 'RUB' }
    const incomeArray = [income]
    const updatedIncome = { ...income, name: 'updated-name' }
    const state = initialState
      .set('isLoading', true)
      .set('entities', fromJS(incomeArray))

    const indexForUpdate = state
      .get('entities')
      .findIndex((item) => item.get('_id') === updatedIncome._id)

    const nextState = state
      .set('isLoading', false)
      .setIn(['entities', indexForUpdate], fromJS(updatedIncome))

    expect(incomeReducer(
      state,
      actionUpdateIncomeSucceed(updatedIncome),
    ))
      .toEqual(nextState)
  })

  it('Should handle actionCreateIncome', () => {
    expect(incomeReducer(
      initialState,
      actionCreateIncome(),
    ))
      .toEqual(initialState.set('isLoading', true))
  })

  it('Should handle actionGetIncome', () => {
    expect(incomeReducer(
      initialState,
      actionGetIncome(),
    ))
      .toEqual(initialState.set('isLoading', true))
  })

  it('Should handle actionUpdateIncome', () => {
    expect(incomeReducer(
      initialState,
      actionUpdateIncome(),
    ))
      .toEqual(initialState.set('isLoading', true))
  })

  it('Should handle actionRemoveIncome', () => {
    expect(incomeReducer(
      initialState,
      actionRemoveIncome(),
    ))
      .toEqual(initialState.set('isLoading', true))
  })

  it('Should handle actionCreateIncomeFail', () => {
    expect(incomeReducer(
      initialState,
      actionRemoveIncomeFail(),
    ))
      .toEqual(initialState.set('isLoading', false))
  })

  it('Should handle actionCreateIncomeFail', () => {
    expect(incomeReducer(
      initialState,
      actionCreateIncomeFail(),
    ))
      .toEqual(initialState.set('isLoading', false))
  })

  it('Should handle actionGetIncomeFail', () => {
    expect(incomeReducer(
      initialState,
      actionGetIncomeFail(),
    ))
      .toEqual(initialState.set('isLoading', false))
  })

  it('Should handle actionUpdateIncomeFail', () => {
    expect(incomeReducer(
      initialState,
      actionUpdateIncomeFail(),
    ))
      .toEqual(initialState.set('isLoading', false))
  })
})
