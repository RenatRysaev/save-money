import { lazy } from 'react'

export const API_URL = {
  V1: 'http://localhost:8080/api/v1',
}

export const ROUTES = {
  LOGIN: {
    path: '/',
    name: 'Login',
  },
  REGISTRATION: {
    path: '/reg',
    name: 'Registration',
  },
  BUDGET: {
    path: '/budget',
    name: 'Budget',
  },
  INCOME: {
    path: '/budget/income',
    name: 'Income',
  },
  COSTS: {
    path: '/budget/costs',
    name: 'Costs',
  },
  NOTFOUND: {
    path: '',
    name: '404 not found',
  },
}

export const TOP_MENU = [ROUTES.BUDGET, ROUTES.COSTS, ROUTES.INCOME]

export const ROUTES_WITHOUT_HEADER = {
  [ROUTES.LOGIN.path]: true,
  [ROUTES.REGISTRATION.path]: true,
}

export const MODALS = {
  CREATE_COST: {
    name: 'CREATE_COST',
    title: 'Create cost',
    component: lazy(() => import('containers/Modals/CreateCost')),
  },
}
