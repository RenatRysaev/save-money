import loadable from '@loadable/component'
import PagePreloader from 'components/PagePreloader'

import { ROUTES } from 'constants/routes'

import { IRoute } from 'types/route'

const routes: IRoute[] = [
  {
    path: ROUTES.LOGIN.path,
    component: loadable(() => import('pages/LoginPage'), {
      fallback: PagePreloader,
    }),
    isPrivate: false,
    exact: true,
    withHeader: false,
    includesInTheMenu: false,
    title: '',
  },
  {
    path: ROUTES.REGISTRATION.path,
    component: loadable(() => import('pages/RegPage'), {
      fallback: PagePreloader,
    }),
    isPrivate: false,
    exact: true,
    withHeader: false,
    includesInTheMenu: false,
    title: '',
  },
  {
    path: ROUTES.BUDGET.path,
    component: loadable(() => import('pages/BudgetPage'), {
      fallback: PagePreloader,
    }),
    isPrivate: true,
    exact: true,
    withHeader: true,
    includesInTheMenu: true,
    title: ROUTES.BUDGET.name,
  },
  {
    path: ROUTES.INCOME.path,
    component: loadable(() => import('pages/IncomePage'), {
      fallback: PagePreloader,
    }),
    isPrivate: true,
    exact: true,
    withHeader: true,
    includesInTheMenu: true,
    title: ROUTES.INCOME.name,
  },
  {
    path: ROUTES.COSTS.path,
    component: loadable(() => import('pages/CostsPage'), {
      fallback: PagePreloader,
    }),
    isPrivate: true,
    exact: true,
    withHeader: true,
    includesInTheMenu: true,
    title: ROUTES.COSTS.name,
  },
  {
    path: ROUTES.EXPENSE.path,
    component: loadable(() => import('pages/ExpensePage'), {
      fallback: PagePreloader,
    }),
    isPrivate: true,
    exact: true,
    withHeader: true,
    includesInTheMenu: true,
    title: ROUTES.EXPENSE.name,
  },
  {
    path: ROUTES.NOTFOUND.path,
    component: loadable(() => import('pages/NotFoundPage'), {
      fallback: PagePreloader,
    }),
    isPrivate: false,
    exact: true,
    withHeader: true,
    includesInTheMenu: false,
    title: ROUTES.NOTFOUND.name,
  },
]

export default routes
