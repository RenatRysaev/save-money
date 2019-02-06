import React, { Component, Fragment } from 'react'
import { string, func } from 'prop-types'
import onClickOutside from 'react-onclickoutside'
import size from 'lodash/size'
import memoize from 'lodash/memoize'
import cond from 'lodash/cond'

import { Formik } from 'formik'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import Error from 'components/Error'
import TextOrField from 'components/TextOrField'

import { CartSchema } from './constants'

import styles from './styles.module.scss'

class CostPreviewCart extends Component {
  state = {
    isEditMode: false,
  }

  toggleMode = () =>
    this.setState(({ isEditMode }) => ({ isEditMode: !isEditMode }))

  handleSave = (values) => {
    const { onEdit, id } = this.props
    onEdit({ ...values, id })
    this.toggleMode()
  }

  handleEdit = () => {
    this.toggleMode()
  }

  handleDelete = () => {
    const { id, onDelete } = this.props
    onDelete(id)
  }

  handleSubmit = (values) => {
    const { isEditMode } = this.state
    cond([
      [(isEdit) => isEdit, () => this.handleSave(values)],
      [(isEdit) => !isEdit, () => this.handleEdit(values)],
    ])(isEditMode)
  }

  handleClickOutside = () => {
    const { isEditMode } = this.state

    if (isEditMode) {
      this.toggleMode()
    }
  }

  getFormiksInitialValues = memoize((name, description, sum) => ({
    name,
    description,
    sum,
  }))

  render() {
    const { name, description, sum } = this.props
    const { isEditMode } = this.state

    return (
      <Formik
        initialValues={this.getFormiksInitialValues(name, description, sum)}
        onSubmit={this.handleSubmit}
        validationSchema={CartSchema}
      >
        {({ values, errors, touched, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Paper className={styles.cart} elevation={1}>
              <TextOrField
                autoFocus
                label="Name"
                isEditMode={isEditMode}
                name="name"
                onChange={handleChange}
                value={values.name}
                text={name}
                textClassName={styles.title}
                fieldClassName={styles.titleField}
                error={errors.name && touched.name}
              />
              {errors.name && touched.name && <Error message={errors.name} />}

              {description && (
                <Fragment>
                  <TextOrField
                    label="Description"
                    isEditMode={isEditMode}
                    name="description"
                    onChange={handleChange}
                    value={values.description}
                    text={description}
                    textClassName={styles.description}
                    error={errors.description && touched.description}
                  />
                  {errors.description && touched.description && (
                    <Error message={errors.description} />
                  )}
                </Fragment>
              )}

              <div className={styles.pair}>
                <p className={styles.key}>Sum: </p>
                <TextOrField
                  isEditMode={isEditMode}
                  name="sum"
                  onChange={handleChange}
                  value={values.sum}
                  text={sum}
                  textClassName={styles.value}
                />
                {errors.sum && touched.sum && <Error message={errors.sum} />}
              </div>

              <div className={styles.buttons}>
                <Button
                  disabled={!!size(errors)}
                  type="submit"
                  className={styles.editButton}
                  variant="outlined"
                >
                  {isEditMode ? 'Save' : 'Edit'}
                </Button>

                {!isEditMode && (
                  <Button
                    type="button"
                    onClick={this.handleDelete}
                    variant="outlined"
                  >
                    Delete
                  </Button>
                )}

                {isEditMode && (
                  <Button
                    type="button"
                    onClick={this.toggleMode}
                    variant="outlined"
                  >
                    Cancel
                  </Button>
                )}
              </div>
            </Paper>
          </form>
        )}
      </Formik>
    )
  }
}

CostPreviewCart.propTypes = {
  name: string.isRequired,
  description: string,
  sum: string.isRequired,
  id: string.isRequired,
  onEdit: func.isRequired,
  onDelete: func.isRequired,
}

export default onClickOutside(CostPreviewCart)
