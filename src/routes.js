import Loadable from 'react-loadable'
import Loading from 'components/Loading'

import { ROUTES } from 'constants'

const routes = [
  {
    path: ROUTES.LOGIN.path,
    component: Loadable({
      loader: () => import('pages/LoginPage'),
      loading: Loading,
    }),
    isPrivate: false,
    isExact: true,
  },
  {
    path: ROUTES.REGISTRATION.path,
    component: Loadable({
      loader: () => import('pages/RegPage'),
      loading: Loading,
    }),
    isPrivate: false,
    isExact: true,
  },
  {
    path: ROUTES.BUDGET.path,
    component: Loadable({
      loader: () => import('pages/BudgetPage'),
      loading: Loading,
    }),
    isPrivate: true,
    isExact: true,
  },
  {
    path: ROUTES.INCOME.path,
    component: Loadable({
      loader: () => import('pages/IncomePage'),
      loading: Loading,
    }),
    isPrivate: true,
    isExact: true,
  },
  {
    path: ROUTES.COSTS.path,
    component: Loadable({
      loader: () => import('pages/CostsPage'),
      loading: Loading,
    }),
    isPrivate: true,
    isExact: true,
  },
  {
    path: ROUTES.NOTFOUND.path,
    component: Loadable({
      loader: () => import('pages/NotFoundPage'),
      loading: Loading,
    }),
    isPrivate: false,
    isExact: true,
  },
]

export default routes
