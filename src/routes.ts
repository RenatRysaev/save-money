import loadable from '@loadable/component'
import PagePreloader from 'components/PagePreloader'

import { ROUTES } from 'constants'

interface IRouteType {
  path: string
  component: any
  isPrivate: boolean
  isExact: boolean
}

const routes: IRouteType[] = [
  {
    path: ROUTES.LOGIN.path,
    component: loadable(() => import('pages/LoginPage'), {
      fallback: PagePreloader,
    }),
    isPrivate: false,
    isExact: true,
  },
  {
    path: ROUTES.REGISTRATION.path,
    component: loadable(() => import('pages/RegPage'), {
      fallback: PagePreloader,
    }),
    isPrivate: false,
    isExact: true,
  },
  {
    path: ROUTES.BUDGET.path,
    component: loadable(() => import('pages/BudgetPage'), {
      fallback: PagePreloader,
    }),
    isPrivate: true,
    isExact: true,
  },
  {
    path: ROUTES.INCOME.path,
    component: loadable(() => import('pages/IncomePage'), {
      fallback: PagePreloader,
    }),
    isPrivate: true,
    isExact: true,
  },
  {
    path: ROUTES.COSTS.path,
    component: loadable(() => import('pages/CostsPage'), {
      fallback: PagePreloader,
    }),
    isPrivate: true,
    isExact: true,
  },
  {
    path: ROUTES.NOTFOUND.path,
    component: loadable(() => import('pages/NotFoundPage'), {
      fallback: PagePreloader,
    }),
    isPrivate: false,
    isExact: true,
  },
]

export default routes
