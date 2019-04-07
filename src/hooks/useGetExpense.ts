import * as React from 'react'

type UseGetExpense = (isEmptyExpense: boolean, getExpenses: () => void) => void

export const useGetExpense: UseGetExpense = (isEmptyExpense, getExpenses) => {
  React.useEffect(() => {
    if (isEmptyExpense) {
      getExpenses()
    }
  }, [])
}
