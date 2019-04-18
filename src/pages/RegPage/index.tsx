import * as React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'

import { actionRegistrationRequest } from 'store/auth/actions'

import { selectIsLoadingAuth } from 'store/auth/selectors'

import AuthForm from 'components/AuthForm'

import {
  fields,
  fieldsInitialValues,
  linkData,
  RegFormSchema,
} from 'pages/RegPage/constants'

import { IRegPageProps } from './types'

import styles from './styles.module.scss'

const mapStateToProps = (state) => ({
  isLoadingAuth: selectIsLoadingAuth(state),
})

const mapDispatchToProps = {
  registration: actionRegistrationRequest,
}

const RegPage: React.FC<IRegPageProps> = ({ registration, isLoading }) => {
  return (
    <div className={styles.pageContainer}>
      <AuthForm
        fields={fields}
        fieldsInitialValues={fieldsInitialValues}
        link={linkData}
        onSubmit={registration}
        submitButtonText="Registration"
        validationSchema={RegFormSchema}
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
)(RegPage)
