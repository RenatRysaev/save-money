import * as React from 'react'
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

import Pair from './Pair'

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
      <div className={styles.pairWrapper}>
        <Pair
          keyName="Total sum of income"
          value={totalSumOfIncome}
          currency={incomeCurrency}
        />
        <Pair
          keyName="Total sum of planned expense"
          value={totalSumOfPlannedExpense}
          currency={expenseCurrency}
        />
        <Pair
          keyName="Total sum of actual expense"
          value={totalSumOfActualExpense}
          currency={expenseCurrency}
        />
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
