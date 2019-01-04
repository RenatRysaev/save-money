import * as React from 'react'
import { Formik } from 'formik'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const styles = require('./styles.scss')

const formInitialValues = {
  name: '',
  password: '',
}

class LoginForm extends React.Component {
  handleSubmit = (values: any) => {
    console.log(values)
  }

  render() {
    return (
      <Formik initialValues={formInitialValues} onSubmit={this.handleSubmit}>
        {({
          values,
          touched,
          errors,
          dirty,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.fieldContainer}>
              <TextField
                className={styles.field}
                name="name"
                type="text"
                onChange={handleChange}
                label="Enter name"
              />
              <TextField
                className={styles.field}
                name="password"
                type="password"
                onChange={handleChange}
                label="Enter password"
              />
            </div>

            <Button color="primary" variant="contained" type="submit">
              Login
            </Button>
          </form>
        )}
      </Formik>
    )
  }
}

export default LoginForm
