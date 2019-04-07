import * as React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { size } from 'lodash'

import { useGetExpense } from 'hooks/useGetExpense'

import { thunkGetExpenses } from 'store/expense/thunks'
import { actionOpenModal } from 'store/ui/actions'

import { selectExpenseByType } from 'store/expense/selectors'

import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import Tabs from 'components/Tabs'
import ExpenseTabContainer from 'containers/ExpenseTabContainer'

import { ExpenseType } from 'types/expense'
import { IExpensePageProps } from './types'

import { MODALS } from 'constants/modals'
import { TABS } from './constants'

import styles from './styles.module.scss'

const mapStateToProps = (state) => {
  const plannedExpense = selectExpenseByType(ExpenseType.PLANNED)(state)
  const actualExpense = selectExpenseByType(ExpenseType.ACTUAL)(state)
  return {
    plannedExpense,
    actualExpense,
    isEmptyExpense: !size(plannedExpense) || !size(actualExpense),
  }
}

const mapDispatchToProps = {
  getExpenses: thunkGetExpenses,
  openModal: actionOpenModal,
}

const ExpensePage: React.FC<IExpensePageProps> = ({
  getExpenses,
  isEmptyExpense,
  plannedExpense,
  actualExpense,
  openModal,
}) => {
  useGetExpense(isEmptyExpense, getExpenses)

  return (
    <div className={styles.wrapper}>
      <Button
        onClick={() => openModal(MODALS.CREATE_EXPENSE)}
        className={styles.addButton}
        variant="contained"
        color="primary"
      >
        <AddIcon />
      </Button>

      <Tabs className={styles.tabs} items={TABS}>
        {(tabValue) => (
          <React.Fragment>
            {tabValue === 0 && <ExpenseTabContainer expense={plannedExpense} />}
            {tabValue === 1 && <ExpenseTabContainer expense={actualExpense} />}
          </React.Fragment>
        )}
      </Tabs>
    </div>
  )
}

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(ExpensePage)
