import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { size } from 'lodash'

import { useGetIncome } from 'hooks/useGetIncome'
import { useGetExpense } from 'hooks/useGetExpense'

import { ExpenseType } from 'types/expense'

import {
  selectIncomeEntities,
  selectIncomeTotalSum,
  selectIncomeCurrency,
} from 'store/income/selectors'
import {
  selectExpenseEntities,
  selectExpenseTotalSumByType,
  selectExpenseCurrency,
} from 'store/expense/selectors'

import { thunkGetIncome } from 'store/income/thunks'
import { thunkGetExpenses } from 'store/expense/thunks'

import { IBudgetPageProps } from './types'

import styles from './styles.module.scss'

const mapStateToProps = (state) => {
  const totalSumOfPlannedExpense = selectExpenseTotalSumByType(
    ExpenseType.PLANNED,
  )(state)
  const totalSumOfActualExpense = selectExpenseTotalSumByType(
    ExpenseType.ACTUAL,
  )(state)

  return {
    totalSumOfPlannedExpense,
    totalSumOfActualExpense,
    totalSumOfIncome: selectIncomeTotalSum(state),
    isEmptyIncomeList: size(selectIncomeEntities(state)) === 0,
    isEmptyExpenseList: size(selectExpenseEntities(state)) === 0,
    incomeCurrency: selectIncomeCurrency(state),
    expenseCurrency: selectExpenseCurrency(state),
  }
}

const mapDispatchToProps = {
  getIncome: thunkGetIncome,
  getExpense: thunkGetExpenses,
}

const BudgetPage: React.FC<IBudgetPageProps> = ({
  getIncome,
  getExpense,
  isEmptyExpenseList,
  isEmptyIncomeList,
  totalSumOfActualExpense,
  totalSumOfIncome,
  totalSumOfPlannedExpense,
  expenseCurrency,
  incomeCurrency,
}) => {
  useGetIncome(isEmptyIncomeList, getIncome)
  useGetExpense(isEmptyExpenseList, getExpense)

  return (
    <div className={styles.wrapper}>
      <div className={styles.pair}>
        <span className={styles.key}>Total sum of income: </span>
        <div>
          <span className={styles.value}>{totalSumOfIncome}</span>
          <span>{incomeCurrency}</span>
        </div>
      </div>
      <div className={styles.pair}>
        <span className={styles.key}>Total sum of planned expense: </span>
        <div>
          <span className={styles.value}>{totalSumOfPlannedExpense}</span>
          <span>{expenseCurrency}</span>
        </div>
      </div>
      <div className={styles.pair}>
        <span className={styles.key}>Total sum of actual expense: </span>
        <div>
          <span className={styles.value}>{totalSumOfActualExpense}</span>
          <span>{expenseCurrency}</span>
        </div>
      </div>
    </div>
  )
}

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(BudgetPage)
