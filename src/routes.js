import Loadable from 'react-loadable'
import Loading from 'components/Loading'

const routes = [
  {
    path: '/',
    component: Loadable({
      loader: () => import('pages/LoginPage/index'),
      loading: Loading,
    }),
    isPrivate: false,
    isExact: true,
  },
  {
    path: '/reg',
    component: Loadable({
      loader: () => import('pages/RegPage/index'),
      loading: Loading,
    }),
    isPrivate: false,
    isExact: true,
  },
  {
    path: '/budget',
    component: Loadable({
      loader: () => import('pages/BudgetPage/index'),
      loading: Loading,
    }),
    isPrivate: true,
    isExact: true,
  },
  {
    path: '/budget/income',
    component: Loadable({
      loader: () => import('pages/IncomePage/index'),
      loading: Loading,
    }),
    isPrivate: true,
    isExact: true,
  },
  {
    path: 'budget/costs',
    component: Loadable({
      loader: () => import('pages/CostsPage/index'),
      loading: Loading,
    }),
    isPrivate: true,
    isExact: true,
  },
  {
    path: '',
    component: Loadable({
      loader: () => import('pages/NotFoundPage/index'),
      loading: Loading,
    }),
    isPrivate: false,
    isExact: true,
  },
]

export default routes
