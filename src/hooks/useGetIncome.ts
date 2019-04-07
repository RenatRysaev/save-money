import * as React from 'react'

type UseGetIncome = (isEmptyIncome: boolean, getIncome: () => void) => void

export const useGetIncome: UseGetIncome = (isEmptyIncome, getIncome) => {
  React.useEffect(() => {
    if (isEmptyIncome) {
      getIncome()
    }
  }, [])
}
