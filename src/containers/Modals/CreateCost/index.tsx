import * as React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'

import { selectIsLoadingCosts } from 'store/costs/selectors'

import { thunkCreateCost } from 'store/costs/thunks'

import { Formik } from 'formik'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Error from 'components/Error'

import { CartSchema } from 'components/PreviewCart/constants'

import { ICreateCostProps } from './types'

import styles from './styles.module.scss'

const mapStateToProps = (state) => ({
  isLoading: selectIsLoadingCosts(state),
})

const mapDispatchToProps = {
  createCost: thunkCreateCost,
}

const initialValues = {
  name: '',
  description: '',
  sum: '',
}

const CreateCost: React.FC<ICreateCostProps> = ({ isLoading, createCost }) => (
  <Formik
    initialValues={initialValues}
    onSubmit={createCost}
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
            name="description"
            value={values.description}
            onChange={handleChange}
            label="Enter a description"
          />
          {errors.description && touched.description && (
            <Error message={errors.description} />
          )}
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

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(CreateCost)
