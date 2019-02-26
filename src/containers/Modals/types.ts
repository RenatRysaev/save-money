import { IModalType } from 'types/modal'

export interface IModalsProps {
  modals: IModalType[]
  closeModal: (name: string) => void
}
