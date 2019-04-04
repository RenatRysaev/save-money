export interface ITab {
  id: number
  name: string
}

export interface ITabs {
  items: ITab[]
  children: (tabValue) => void
}
