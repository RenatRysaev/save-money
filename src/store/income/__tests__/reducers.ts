import { fromJS } from 'immutable'
import incomeReducer, { initialState } from 'store/income/reducers'
import {
  actionCreateIncome,
  actionCreateIncomeSucceed,
  actionCreateIncomeFail,
  actionGetIncome,
  actionGetIncomeSucceed,
  actionGetIncomeFail,
  actionUpdateIncome,
  actionUpdateIncomeSucceed,
  actionUpdateIncomeFail,
  actionRemoveIncome,
  actionRemoveIncomeSucceed,
  actionRemoveIncomeFail,
} from 'store/income/actions'


describe('income reducer', () => {
  it('Should return the initial state', () => {
    expect(incomeReducer(undefined, { type: 'AnyAction' }))
      .toEqual(initialState)
  })


  it('Should handle actionCreateIncome', () => {
    expect(incomeReducer(
      initialState,
      actionCreateIncome(),
    ))
      .toEqual(initialState.set('isLoading', true))
  })

  it('Should handle actionCreateIncomeSucceed', () => {
    const income = { _id: '123', sum: 123, name: 'Salary', currency: 'RUB' }
    const currentState = initialState.set('isLoading', true)
    const expectedState = currentState
      .set(
        'entities',
        initialState.get('entities').push(fromJS(income))
      )
      .set('isLoading', false)

    expect(incomeReducer(
      currentState,
      actionCreateIncomeSucceed(income),
    ))
      .toEqual(expectedState)
  })

  it('Should handle actionCreateIncomeFail', () => {
    expect(incomeReducer(
      initialState,
      actionCreateIncomeFail(),
    ))
      .toEqual(initialState.set('isLoading', false))
  })


  it('Should handle actionGetIncome', () => {
    expect(incomeReducer(
      initialState,
      actionGetIncome(),
    ))
      .toEqual(initialState.set('isLoading', true))
  })

  it('Should handle actionGetIncomeSucceed', () => {
    const income = { _id: '123', sum: 123, name: 'Salary', currency: 'RUB' }
    const incomeArray = [income]
    const currentState = initialState.set('isLoading', true)
    const expectedState = currentState
      .set('entities', fromJS(incomeArray))
      .set('isLoading', false)

    expect(incomeReducer(
      currentState,
      actionGetIncomeSucceed(incomeArray),
    ))
      .toEqual(expectedState)
  })

  it('Should handle actionGetIncomeFail', () => {
    expect(incomeReducer(
      initialState,
      actionGetIncomeFail(),
    ))
      .toEqual(initialState.set('isLoading', false))
  })


  it('Should handle actionUpdateIncome', () => {
    expect(incomeReducer(
      initialState,
      actionUpdateIncome(),
    ))
      .toEqual(initialState.set('isLoading', true))
  })

  it('Should handle actionUpdateIncomeSucceed', () => {
    const income = { _id: '123', sum: 123, name: 'Salary', currency: 'RUB' }
    const incomeArray = [income]
    const updatedIncome = { ...income, name: 'updated-name' }
    const currentState = initialState
      .set('isLoading', true)
      .set('entities', fromJS(incomeArray))

    const indexForUpdate = currentState
      .get('entities')
      .findIndex((item) => item.get('_id') === updatedIncome._id)

    const expectedState = currentState
      .set('isLoading', false)
      .setIn(['entities', indexForUpdate], fromJS(updatedIncome))

    expect(incomeReducer(
      currentState,
      actionUpdateIncomeSucceed(updatedIncome),
    ))
      .toEqual(expectedState)
  })

  it('Should handle actionUpdateIncomeFail', () => {
    expect(incomeReducer(
      initialState,
      actionUpdateIncomeFail(),
    ))
      .toEqual(initialState.set('isLoading', false))
  })


  it('Should handle actionRemoveIncome', () => {
    expect(incomeReducer(
      initialState,
      actionRemoveIncome(),
    ))
      .toEqual(initialState.set('isLoading', true))
  })

  it('Should handle actionRemoveIncomeSucceed', () => {
    const income = { _id: '123', sum: 123, name: 'Salary', currency: 'RUB' }
    const id = '456'
    const incomeArray = [income, { ...income, _id: id }]
    const currentState = initialState
      .set('isLoading', true)
      .set('entities', fromJS(incomeArray))

    const expectedState = currentState
      .set('isLoading', false)
      .set('entities', fromJS(incomeArray.filter(item => item._id !== id)))

    expect(incomeReducer(
      currentState,
      actionRemoveIncomeSucceed({ id }),
    ))
      .toEqual(expectedState)
  })

  it('Should handle actionCreateIncomeFail', () => {
    expect(incomeReducer(
      initialState,
      actionRemoveIncomeFail(),
    ))
      .toEqual(initialState.set('isLoading', false))
  })
})
