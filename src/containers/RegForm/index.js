import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'

import { thunkRegistration } from 'store/auth/thunks'

import AuthForm from 'components/AuthForm'

import { fields, fieldsInitialValues, linkData } from './constants'
import PropTypes from 'prop-types'

const mapDispatchToProps = {
  registration: thunkRegistration,
}

class RegForm extends Component {
  handleSubmit = (values) => {
    const { registration } = this.props
    const { name, password } = values

    registration(name, password)
  }

  render() {
    return (
      <AuthForm
        fields={fields}
        fieldsInitialValues={fieldsInitialValues}
        link={linkData}
        onSubmit={this.handleSubmit}
        submitButtonText="Registration"
      />
    )
  }
}

RegForm.propTypes = {
  registration: PropTypes.func,
}

export default compose(
  connect(
    null,
    mapDispatchToProps,
  ),
)(RegForm)
