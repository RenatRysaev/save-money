import * as React from 'react'

import TextField from '@material-ui/core/TextField/TextField'
import { Field } from 'formik'
import DatePickerField from 'components/DatePickerField'

import styles from './styles.module.scss'

const Edit = ({ name, sum, currency, date, values, errors, handleChange }) => (
  <React.Fragment>
    <TextField
      className={styles.field}
      value={values.name}
      name="name"
      onChange={handleChange}
    />
    <TextField
      className={styles.field}
      value={values.sum}
      name="sum"
      onChange={handleChange}
    />
    {date && (
      <Field className={styles.field} name="date" component={DatePickerField} />
    )}
  </React.Fragment>
)

export default Edit
