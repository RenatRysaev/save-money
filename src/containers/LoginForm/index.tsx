import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'

import { thunkLogin } from 'store/auth/thunks'

import { selectIsLoadingAuth } from 'store/auth/selectors'

import AuthForm from 'components/AuthForm'

import {
  fields,
  fieldsInitialValues,
  linkData,
  LoginFormSchema,
} from './constants'

import { ILoginFormProps } from './types'

const mapStateToProps = (state) => ({
  isLoadingAuth: selectIsLoadingAuth(state),
})

const mapDispatchToProps = {
  login: thunkLogin,
}

class LoginForm extends Component<ILoginFormProps> {
  handleSubmit = (values) => {
    const { login } = this.props
    const { name, password } = values

    login(name, password)
  }

  render() {
    const { isLoadingAuth } = this.props
    return (
      <AuthForm
        fields={fields}
        fieldsInitialValues={fieldsInitialValues}
        link={linkData}
        onSubmit={this.handleSubmit}
        submitButtonText="Login"
        validationSchema={LoginFormSchema}
        isLoading={isLoadingAuth}
      />
    )
  }
}

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(LoginForm)
