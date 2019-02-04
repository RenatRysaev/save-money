import React, { Fragment } from 'react'
import { bool, string, func } from 'prop-types'
import classNames from 'classnames'
import TextField from '@material-ui/core/TextField'

import styles from './styles.module.scss'

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
}) => (
  <Fragment>
    {isEditMode ? (
      <TextField
        className={fieldClassName}
        name={name}
        onChange={onChange}
        value={value}
        type={type}
        autoFocus={autoFocus}
      />
    ) : (
      <p className={classNames(styles.text, textClassName)}>{text}</p>
    )}
  </Fragment>
)

TextOrField.defaultProps = {
  type: 'text',
  autoFocus: false,
}

TextOrField.propTypes = {
  isEditMode: bool.isRequired,
  name: string.isRequired,
  type: string,
  onChange: func.isRequired,
  value: string.isRequired,
  text: string.isRequired,
  textClassName: string,
  fieldClassName: string,
  autoFocus: bool,
}

export default TextOrField