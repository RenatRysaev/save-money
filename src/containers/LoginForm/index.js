import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import PropTypes from 'prop-types'

import { thunkLogin } from 'store/auth/thunks'

import AuthForm from 'components/AuthForm'

import { fields, fieldsInitialValues, linkData } from './constants'

const mapDispatchToProps = {
  login: thunkLogin,
}

class LoginForm extends Component {
  handleSubmit = (values) => {
    const { login } = this.props
    const { name, password } = values

    login(name, password)
  }

  render() {
    return (
      <AuthForm
        fields={fields}
        fieldsInitialValues={fieldsInitialValues}
        link={linkData}
        onSubmit={this.handleSubmit}
        submitButtonText="Login"
      />
    )
  }
}

LoginForm.propTypes = {
  login: PropTypes.func,
}

export default compose(
  connect(
    null,
    mapDispatchToProps,
  ),
)(LoginForm)
