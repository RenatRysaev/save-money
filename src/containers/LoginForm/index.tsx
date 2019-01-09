import * as React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { Formik } from 'formik'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import { thunkLogin } from 'store/auth/thunks'

const styles = require('./styles.scss')

const mapDispatchToProps = {
  login: thunkLogin,
}

const formInitialValues = {
  name: '',
  password: '',
}

interface LoginFormProps {
  login: (name: string, password: string) => void
}

class LoginForm extends React.Component<LoginFormProps, {}> {
  handleSubmit = (values: any) => {
    const { login } = this.props
    const { name, password } = values

    login(name, password)
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

export default compose(
  connect(
    null,
    mapDispatchToProps,
  ),
)(LoginForm)
