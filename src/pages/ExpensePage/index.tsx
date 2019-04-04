import * as React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { size } from 'lodash'

import { thunkGetExpenses } from 'store/expense/thunks'

import { selectExpenseByType } from 'store/expense/selectors'

import PlannedExpense from 'containers/PlannedExpense'
import ActualExpense from 'containers/ActualExpense'

import Tabs from 'components/Tabs'

import { ExpenseType } from 'types/expense'
import { IExpensePageProps } from './types'

import { TABS } from './constants'

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
}

const ExpensePage: React.FC<IExpensePageProps> = ({
  getExpenses,
  isEmptyExpense,
  plannedExpense,
  actualExpense,
}) => {
  const [firstRender, setFirstRender] = React.useState(true)

  React.useEffect(() => {
    if (isEmptyExpense && firstRender) {
      getExpenses()
      setFirstRender(false)
    }
  }, [])

  return (
    <div>
      <Tabs items={TABS}>
        {(tabValue) => (
          <React.Fragment>
            {tabValue === 0 && <PlannedExpense expense={plannedExpense} />}
            {tabValue === 1 && <ActualExpense expense={actualExpense} />}
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
