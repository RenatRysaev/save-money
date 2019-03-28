import { lazy } from 'react'

export const MODALS = {
  CREATE_INCOME: {
    name: 'CREATE_INCOME',
    title: 'Create income',
    component: lazy(() => import('containers/Modals/CreateIncome')),
  },
}
