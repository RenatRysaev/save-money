import { any, number } from 'prop-types'

const CheckOnEmpty = ({ children, listLength = 0, fallbackContent }) =>
  listLength !== 0 ? children : fallbackContent

CheckOnEmpty.propTypes = {
  children: any,
  listLength: number.isRequired,
  fallbackContent: any.isRequired,
}

export default CheckOnEmpty
