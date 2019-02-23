import React, { Fragment } from 'react'
import { string, shape, arrayOf, func, object, any, bool } from 'prop-types'
import { Formik } from 'formik'
import noop from 'lodash/noop'
import get from 'lodash/get'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Loader from 'components/Loader/index'

import { Link } from 'react-router-dom'

import styles from './styles.module.scss'

const AuthForm = ({
  fields,
  fieldsInitialValues,
  submitButtonText,
  link,
  validationSchema,
  isLoading,
  onSubmit,
}) => (
  <Formik
    initialValues={fieldsInitialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit}
  >
    {({ touched, errors, handleSubmit, handleChange }) => (
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.fieldContainer}>
          {fields.map(({ name, type, label }) => (
            <Fragment key={name}>
              <TextField
                className={styles.field}
                name={name}
                type={type}
                onChange={handleChange}
                label={label}
                error={!!get(errors, name) && !!get(touched, name)}
              />

              {get(errors, name) && get(touched, name) && (
                <div className={styles.errorMessage}>{get(errors, name)}</div>
              )}
            </Fragment>
          ))}
        </div>

        <div className={styles.buttonContainer}>
          <Button
            disabled={isLoading}
            color="primary"
            variant="contained"
            type="submit"
          >
            {submitButtonText}
          </Button>
        </div>

        {link && <Link to={link.path}>{link.text}</Link>}

        {isLoading && (
          <div className={styles.loaderWrapper}>
            <Loader isLoading={isLoading} />
          </div>
        )}
      </form>
    )}
  </Formik>
)

AuthForm.defaultProps = {
  onSubmit: noop,
  submitButtonText: 'Submit',
  fields: [],
}

AuthForm.propTypes = {
  fields: arrayOf(
    shape({
      name: string,
      type: string,
      label: string,
    }),
  ),
  submitButtonText: string,
  onSubmit: func,
  fieldsInitialValues: object,
  link: shape({
    path: string,
    text: string,
  }),
  validationSchema: any,
  isLoading: bool,
}

export default AuthForm
