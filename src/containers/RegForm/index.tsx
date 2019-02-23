import React, { Component } from 'react'
import { bool, func } from 'prop-types'

import { compose } from 'redux'
import { connect } from 'react-redux'

import { thunkRegistration } from 'store/auth/thunks'

import { selectIsLoadingAuth } from 'store/auth/selectors'

import AuthForm from 'components/AuthForm/index'

import {
  fields,
  fieldsInitialValues,
  linkData,
  RegFormSchema,
} from './constants'

const mapStateToProps = (state) => ({
  isLoadingAuth: selectIsLoadingAuth(state),
})

const mapDispatchToProps = {
  registration: thunkRegistration,
}

interface RegFormProps {
  isLoadingAuth: boolean
  registration: (name: string, password: string) => void
}

class RegForm extends Component<RegFormProps> {
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

// RegForm.propTypes = {
//   isLoadingAuth: bool,
//   registration: func,
// }

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(RegForm)
