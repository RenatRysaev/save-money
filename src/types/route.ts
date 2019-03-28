export interface IRoute {
  path: string
  component: any
  isPrivate: boolean
  exact: boolean
  withHeader: boolean
  includesInTheMenu: boolean
  title: string
}
