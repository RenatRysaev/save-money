import * as React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'

import { thunkLogin } from 'store/auth/thunks'

import { selectIsLoadingAuth } from 'store/auth/selectors'

import AuthForm from 'components/AuthForm'

import {
  fields,
  fieldsInitialValues,
  linkData,
  LoginFormSchema,
} from './constants'

import { ILoginPageProps } from './types'

import styles from './styles.module.scss'

const mapStateToProps = (state) => ({
  isLoadingAuth: selectIsLoadingAuth(state),
})

const mapDispatchToProps = {
  login: thunkLogin,
}

const LoginPage: React.FC<ILoginPageProps> = ({ login, isLoading }) => {
  return (
    <div className={styles.pageContainer}>
      <AuthForm
        fields={fields}
        fieldsInitialValues={fieldsInitialValues}
        link={linkData}
        onSubmit={login}
        submitButtonText="Login"
        validationSchema={LoginFormSchema}
        isLoading={isLoading}
      />
    </div>
  )
}

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(LoginPage)
