import * as React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
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

class RegForm extends React.Component {
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

            <Button color="primary" variant="contained" type="submit">
              Registration
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
)(RegForm)
