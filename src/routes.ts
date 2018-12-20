import Auth from './pages/Auth'
import Budget from './pages/Budget'
import Costs from './pages/Costs'
import CostsRecords from './pages/CostsRecords'
import CostsRecordsDetail from './pages/CostsRecordsDetail'
import Income from './pages/Income'
import Me from './pages/Me'
import Registration from './pages/Registration'
import Statistics from './pages/Statistics'
import Targets from './pages/Targets'
import NotFound from './pages/NotFound'

type Routes = {
  path: string
  component: any
  isPrivate: boolean
  isExact: boolean
}[]

const routes: Routes = [
  {
    path: '/',
    component: Auth,
    isPrivate: false,
    isExact: true,
  },
  {
    path: '/registration',
    component: Registration,
    isPrivate: false,
    isExact: true,
  },
  {
    path: '/me',
    component: Me,
    isPrivate: true,
    isExact: true,
  },
  {
    path: '/budget',
    component: Budget,
    isPrivate: true,
    isExact: true,
  },
  {
    path: '/budget/income',
    component: Income,
    isPrivate: true,
    isExact: true,
  },
  {
    path: 'budget/costs',
    component: Costs,
    isPrivate: true,
    isExact: true,
  },
  {
    path: '/costs-records',
    component: CostsRecords,
    isPrivate: true,
    isExact: true,
  },
  {
    path: '/costs-records/:id',
    component: CostsRecordsDetail,
    isPrivate: true,
    isExact: true,
  },
  {
    path: '/targets',
    component: Targets,
    isPrivate: true,
    isExact: true,
  },
  {
    path: '/statistics',
    component: Statistics,
    isPrivate: true,
    isExact: true,
  },
  {
    path: '',
    component: NotFound,
    isPrivate: false,
    isExact: true,
  },
]

export default routes
