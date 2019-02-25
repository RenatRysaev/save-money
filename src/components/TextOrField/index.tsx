import React, { Fragment } from 'react'
import classNames from 'classnames'
import TextField from '@material-ui/core/TextField'

import { TextOrFieldProps } from './types'

import styles from './styles.module.scss'

const TextOrField: React.FC<TextOrFieldProps> = ({
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
}) => (
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

export default TextOrField
