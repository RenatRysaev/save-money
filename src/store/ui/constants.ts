import { lazy } from 'react'

export const MODALS = {
  CREATE_COST: {
    name: 'CREATE_COST',
    title: 'Create cost',
    component: lazy(() => import('containers/Modals/CreateCost')),
  },
  CREATE_INCOME: {
    name: 'CREATE_INCOME',
    title: 'Create income',
    component: lazy(() => import('containers/Modals/CreateIncome')),
  },
}
