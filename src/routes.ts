import Loadable from 'react-loadable'
import Loading from 'components/Loading'

type Routes = {
  path: string
  component: any
  isPrivate: boolean
  isExact: boolean
}[]

const routes: Routes = [
  {
    path: '/',
    component: Loadable({
      loader: () => import('pages/LoginPage'),
      loading: Loading,
    }),
    isPrivate: false,
    isExact: true,
  },
  {
    path: '/reg',
    component: Loadable({
      loader: () => import('pages/RegPage'),
      loading: Loading,
    }),
    isPrivate: false,
    isExact: true,
  },
  {
    path: '/budget',
    component: Loadable({
      loader: () => import('pages/BudgetPage'),
      loading: Loading,
    }),
    isPrivate: true,
    isExact: true,
  },
  {
    path: '/budget/income',
    component: Loadable({
      loader: () => import('pages/IncomePage'),
      loading: Loading,
    }),
    isPrivate: true,
    isExact: true,
  },
  {
    path: 'budget/costs',
    component: Loadable({
      loader: () => import('pages/CostsPage'),
      loading: Loading,
    }),
    isPrivate: true,
    isExact: true,
  },
  {
    path: '',
    component: Loadable({
      loader: () => import('pages/NotFoundPage'),
      loading: Loading,
    }),
    isPrivate: false,
    isExact: true,
  },
]

export default routes
