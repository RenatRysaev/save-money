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
      loader: () => import('pages/Auth'),
      loading: Loading,
    }),
    isPrivate: false,
    isExact: true,
  },
  {
    path: '/registration',
    component: Loadable({
      loader: () => import('pages/Registration'),
      loading: Loading,
    }),
    isPrivate: false,
    isExact: true,
  },
  {
    path: '/me',
    component: Loadable({
      loader: () => import('pages/Me'),
      loading: Loading,
    }),
    isPrivate: true,
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
    path: '/costs-records',
    component: Loadable({
      loader: () => import('pages/CostsRecords'),
      loading: Loading,
    }),
    isPrivate: true,
    isExact: true,
  },
  {
    path: '/costs-records/:id',
    component: Loadable({
      loader: () => import('pages/CostsRecordsDetail'),
      loading: Loading,
    }),
    isPrivate: true,
    isExact: true,
  },
  {
    path: '/targets',
    component: Loadable({
      loader: () => import('pages/Targets'),
      loading: Loading,
    }),
    isPrivate: true,
    isExact: true,
  },
  {
    path: '/statistics',
    component: Loadable({
      loader: () => import('pages/Statistics'),
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
