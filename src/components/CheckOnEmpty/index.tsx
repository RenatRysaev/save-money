import { CheckOnEmptyProps } from './types'

const CheckOnEmpty = ({
  children,
  listLength = 0,
  fallbackContent,
}: CheckOnEmptyProps) => (listLength !== 0 ? children : fallbackContent)

export default CheckOnEmpty
