export type ModalsProps = {
  modals: { name: string; title: string; component: any }[]
  closeModal: (name: string) => void
}
