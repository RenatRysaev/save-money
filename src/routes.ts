import Loadable from 'react-loadable'
import PagePreloader from 'components/PagePreloader/index'

import { ROUTES } from 'src/constants'

const routes = [
  {
    path: ROUTES.LOGIN.path,
    component: Loadable({
      loader: () => import('pages/LoginPage/index'),
      loading: PagePreloader,
    }),
    isPrivate: false,
    isExact: true,
  },
  {
    path: ROUTES.REGISTRATION.path,
    component: Loadable({
      loader: () => import('pages/RegPage/index'),
      loading: PagePreloader,
    }),
    isPrivate: false,
    isExact: true,
  },
  {
    path: ROUTES.BUDGET.path,
    component: Loadable({
      loader: () => import('pages/BudgetPage/index'),
      loading: PagePreloader,
    }),
    isPrivate: true,
    isExact: true,
  },
  {
    path: ROUTES.INCOME.path,
    component: Loadable({
      loader: () => import('pages/IncomePage/index'),
      loading: PagePreloader,
    }),
    isPrivate: true,
    isExact: true,
  },
  {
    path: ROUTES.COSTS.path,
    component: Loadable({
      loader: () => import('pages/CostsPage/index'),
      loading: PagePreloader,
    }),
    isPrivate: true,
    isExact: true,
  },
  {
    path: ROUTES.NOTFOUND.path,
    component: Loadable({
      loader: () => import('pages/NotFoundPage/index'),
      loading: PagePreloader,
    }),
    isPrivate: false,
    isExact: true,
  },
]

export default routes
