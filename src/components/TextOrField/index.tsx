import React, { Fragment } from 'react'
import { bool, string, number, func, oneOfType } from 'prop-types'
import classNames from 'classnames'
import TextField from '@material-ui/core/TextField'

import styles from './styles.module.scss'

type TextOrFieldTypes = {
  isEditMode: boolean
  name: string
  value: string | number
  type: string
  onChange: (event: any) => void
  text: string
  textClassName?: string | any
  fieldClassName?: string
  autoFocus?: boolean
  label: string
  error?: boolean
}

const TextOrField = ({
  isEditMode,
  name,
  value,
  type,
  onChange,
  text,
  textClassName,
  fieldClassName,
  autoFocus,
  label,
  error,
}: TextOrFieldTypes) => (
  <Fragment>
    <TextField
      className={classNames({
        [styles.hidden]: !isEditMode,
      })}
      name={name}
      onChange={onChange}
      value={value}
      type={type}
      autoFocus={autoFocus}
      label={label}
      classes={{ root: fieldClassName }}
      error={error}
    />
    <p
      className={classNames({
        [styles.text]: true,
        [textClassName]: textClassName,
        [styles.hidden]: isEditMode,
      })}
    >
      {text}
    </p>
  </Fragment>
)

TextOrField.defaultProps = {
  type: 'text',
  autoFocus: false,
  label: '',
}

// TextOrField.propTypes = {
//   isEditMode: bool.isRequired,
//   name: string.isRequired,
//   type: string,
//   onChange: func.isRequired,
//   value: oneOfType([string, number]).isRequired,
//   text: string.isRequired,
//   textClassName: string,
//   fieldClassName: string,
//   autoFocus: bool,
//   label: string,
//   error: bool,
// }

export default TextOrField
