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
      loader: () => import('pages/Login'),
      loading: Loading,
    }),
    isPrivate: false,
    isExact: true,
  },
  {
    path: '/reg',
    component: Loadable({
      loader: () => import('pages/Reg'),
      loading: Loading,
    }),
    isPrivate: false,
    isExact: true,
  },
  {
    path: '/budget',
    component: Loadable({
      loader: () => import('pages/Budget'),
      loading: Loading,
    }),
    isPrivate: true,
    isExact: true,
  },
  {
    path: '/budget/income',
    component: Loadable({
      loader: () => import('pages/Income'),
      loading: Loading,
    }),
    isPrivate: true,
    isExact: true,
  },
  {
    path: 'budget/costs',
    component: Loadable({
      loader: () => import('pages/Costs'),
      loading: Loading,
    }),
    isPrivate: true,
    isExact: true,
  },
  {
    path: '',
    component: Loadable({
      loader: () => import('pages/NotFound'),
      loading: Loading,
    }),
    isPrivate: false,
    isExact: true,
  },
]

export default routes
