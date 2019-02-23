import * as React from 'react'
import { func, bool } from 'prop-types'
import { compose } from 'redux'
import { connect } from 'react-redux'

import { selectIsLoadingIncome } from 'store/income/selectors'

import { thunkCreateIncome } from 'store/income/thunks'

import { Formik } from 'formik'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Error from 'components/Error/index'

import { CartSchema } from 'components/PreviewCart/constants'

import styles from './styles.module.scss'

const mapStateToProps = (state) => ({
  isLoading: selectIsLoadingIncome(state),
})

const mapDispatchToProps = {
  createIncome: thunkCreateIncome,
}

const initialValues = {
  name: '',
  sum: '',
}

const CreateIncome = ({ isLoading, createIncome }) => (
  <Formik
    initialValues={initialValues}
    onSubmit={createIncome}
    validationSchema={CartSchema}
  >
    {({ values, errors, touched, handleChange, handleSubmit }) => (
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.fields}>
          <TextField
            className={styles.field}
            autoFocus
            name="name"
            value={values.name}
            onChange={handleChange}
            label="Enter a name"
          />
          {errors.name && touched.name && <Error message={errors.name} />}
          <TextField
            className={styles.field}
            name="sum"
            value={values.sum}
            onChange={handleChange}
            label="Enter a sum"
          />
          {errors.sum && touched.sum && <Error message={errors.sum} />}
        </div>
        <div className={styles.buttons}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={isLoading}
          >
            Create
          </Button>
        </div>
      </form>
    )}
  </Formik>
)

CreateIncome.propTypes = {
  isLoading: bool,
  createIncome: func,
}

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(CreateIncome)
