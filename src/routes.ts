import Loadable from 'react-loadable'
import PagePreloader from 'components/PagePreloader'

import { ROUTES } from 'constants'

type routesType = {
  path: string
  component: Promise<any>
  isPrivate: boolean
  isExact: boolean
}[]

const routes: routesType = [
  {
    path: ROUTES.LOGIN.path,
    component: Loadable({
      loader: () => import('pages/LoginPage'),
      loading: PagePreloader,
    }),
    isPrivate: false,
    isExact: true,
  },
  {
    path: ROUTES.REGISTRATION.path,
    component: Loadable({
      loader: () => import('pages/RegPage'),
      loading: PagePreloader,
    }),
    isPrivate: false,
    isExact: true,
  },
  {
    path: ROUTES.BUDGET.path,
    component: Loadable({
      loader: () => import('pages/BudgetPage'),
      loading: PagePreloader,
    }),
    isPrivate: true,
    isExact: true,
  },
  {
    path: ROUTES.INCOME.path,
    component: Loadable({
      loader: () => import('pages/IncomePage'),
      loading: PagePreloader,
    }),
    isPrivate: true,
    isExact: true,
  },
  {
    path: ROUTES.COSTS.path,
    component: Loadable({
      loader: () => import('pages/CostsPage'),
      loading: PagePreloader,
    }),
    isPrivate: true,
    isExact: true,
  },
  {
    path: ROUTES.NOTFOUND.path,
    component: Loadable({
      loader: () => import('pages/NotFoundPage'),
      loading: PagePreloader,
    }),
    isPrivate: false,
    isExact: true,
  },
]

export default routes
