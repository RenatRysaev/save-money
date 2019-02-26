import { ICheckOnEmptyProps } from './types'

const CheckOnEmpty = ({
  children,
  listLength = 0,
  fallbackContent,
}: ICheckOnEmptyProps) => (listLength !== 0 ? children : fallbackContent)

export default CheckOnEmpty
