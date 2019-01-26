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
