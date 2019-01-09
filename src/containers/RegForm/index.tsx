import * as React from 'react'
import { hot } from 'react-hot-loader/root'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Formik } from 'formik'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import { thunkRegistration } from 'store/auth/thunks'

const styles = require('./styles.scss')

const mapDispatchToProps = {
  registration: thunkRegistration,
}

const formInitialValues = {
  name: '',
  password: '',
}

interface RegFormProps {
  registration: (name: string, password: string) => void
}

class RegForm extends React.Component<RegFormProps, {}> {
  handleSubmit = (values: any) => {
    const { registration } = this.props
    const { name, password } = values

    registration(name, password)
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

            <div className={styles.buttonContainer}>
              <Button color="primary" variant="contained" type="submit">
                Registration
              </Button>
            </div>

            <Link to="/">Go to the login page</Link>
          </form>
        )}
      </Formik>
    )
  }
}

export default compose(
  hot,
  connect(
    null,
    mapDispatchToProps,
  ),
)(RegForm)
