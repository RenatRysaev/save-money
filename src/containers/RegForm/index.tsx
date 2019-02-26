import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'

import { thunkRegistration } from 'store/auth/thunks'

import { selectIsLoadingAuth } from 'store/auth/selectors'

import AuthForm from 'components/AuthForm'

import {
  fields,
  fieldsInitialValues,
  linkData,
  RegFormSchema,
} from './constants'

import { IRegFormProps } from './types'

const mapStateToProps = (state) => ({
  isLoadingAuth: selectIsLoadingAuth(state),
})

const mapDispatchToProps = {
  registration: thunkRegistration,
}

class RegForm extends Component<IRegFormProps> {
  handleSubmit = (values) => {
    const { registration } = this.props
    const { name, password } = values

    registration(name, password)
  }

  render() {
    const { isLoadingAuth } = this.props
    return (
      <AuthForm
        fields={fields}
        fieldsInitialValues={fieldsInitialValues}
        link={linkData}
        onSubmit={this.handleSubmit}
        submitButtonText="Registration"
        validationSchema={RegFormSchema}
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
)(RegForm)
