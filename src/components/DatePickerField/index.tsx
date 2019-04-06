import * as React from 'react'
import MomentUtils from '@date-io/moment'
import { DatePicker, MuiPickersUtilsProvider } from 'material-ui-pickers'

const DatePickerField = ({ field, form, ...other }) => {
  const currentError = form.errors[field.name]
  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <DatePicker
        keyboard
        clearable
        disablePast
        name={field.name}
        value={field.value}
        format="DD/MM/YYYY"
        helperText={currentError}
        error={Boolean(currentError)}
        onError={(_, error) => form.setFieldError(field.name, error)}
        onChange={(date) => form.setFieldValue(field.name, date, true)}
        mask={(value) =>
          value
            ? [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]
            : []
        }
        {...other}
      />
    </MuiPickersUtilsProvider>
  )
}

export default DatePickerField
