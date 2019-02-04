import React, { Component, Fragment } from 'react'
import { string, func } from 'prop-types'
import size from 'lodash/size'

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

  render() {
    const { name, description, sum, date } = this.props
    const { isEditMode } = this.state

    return (
      <Formik
        initialValues={{ name, description, sum, date }}
        onSubmit={isEditMode ? this.handleSave : this.handleEdit}
        validationSchema={CartSchema}
      >
        {({ values, errors, touched, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Paper className={styles.cart} elevation={1}>
              <TextOrField
                autoFocus
                isEditMode={isEditMode}
                name="name"
                onChange={handleChange}
                value={values.name}
                text={name}
                textClassName={styles.title}
              />
              {errors.name && touched.name && <Error message={errors.name} />}

              {description && (
                <Fragment>
                  <TextOrField
                    isEditMode={isEditMode}
                    name="description"
                    onChange={handleChange}
                    value={values.description}
                    text={description}
                    textClassName={styles.description}
                  />

                  {errors.description && touched.description && (
                    <Error message={errors.description} />
                  )}
                </Fragment>
              )}

              <div className={styles.pair}>
                <h3 className={styles.key}>Sum</h3>
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

              <div className={styles.pair}>
                <h3 className={styles.key}>Date</h3>
                <TextOrField
                  isEditMode={isEditMode}
                  name="date"
                  onChange={handleChange}
                  value={values.date}
                  text={date}
                  textClassName={styles.value}
                />
                {errors.date && touched.date && <Error message={errors.date} />}
              </div>

              <div>
                <Button
                  disabled={!!size(errors)}
                  type="submit"
                  className={styles.editButton}
                  variant="outlined"
                >
                  {isEditMode ? 'Save' : 'Edit'}
                </Button>
                <Button
                  type="button"
                  onClick={this.handleDelete}
                  variant="outlined"
                >
                  Delete
                </Button>
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
  date: string.isRequired,
  id: string.isRequired,
  onEdit: func.isRequired,
  onDelete: func.isRequired,
}

export default CostPreviewCart
