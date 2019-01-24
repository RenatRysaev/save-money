import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Formik } from 'formik'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import { thunkRegistration } from 'store/auth/thunks'

import styles from './styles.scss'

const mapDispatchToProps = {
  registration: thunkRegistration,
}

const formInitialValues = {
  name: '',
  password: '',
}

class RegForm extends Component {
  handleSubmit = values => {
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
  connect(
    null,
    mapDispatchToProps,
  ),
)(RegForm)
