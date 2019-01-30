import React, { Component } from 'react'
import PropTypes from 'prop-types'
import size from 'lodash/size'

import { Formik } from 'formik'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Error from 'components/Error'

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
          <form className="costCartForm" onSubmit={handleSubmit}>
            <Paper className={styles.cart} elevation={1}>
              {isEditMode ? (
                <TextField
                  name="name"
                  onChange={handleChange}
                  value={values.name}
                />
              ) : (
                <h2 className={styles.title}>{name}</h2>
              )}

              {errors.name && touched.name && <Error message={errors.name} />}

              {description &&
                (isEditMode ? (
                  <TextField
                    name="description"
                    onChange={handleChange}
                    value={values.description}
                  />
                ) : (
                  <p className={styles.description}>{description}</p>
                ))}

              {errors.description && touched.description && (
                <Error message={errors.description} />
              )}

              <div className={styles.pair}>
                <h3 className={styles.key}>Sum</h3>
                {isEditMode ? (
                  <TextField
                    name="sum"
                    onChange={handleChange}
                    value={values.sum}
                  />
                ) : (
                  <p className={styles.value}>{sum}</p>
                )}
              </div>

              {errors.sum && touched.sum && <Error message={errors.sum} />}

              <div className={styles.pair}>
                <h3 className={styles.key}>Date</h3>
                {isEditMode ? (
                  <TextField
                    name="date"
                    onChange={handleChange}
                    value={values.date}
                  />
                ) : (
                  <p className={styles.value}>{date}</p>
                )}
              </div>

              {errors.date && touched.date && <Error message={errors.date} />}

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

const { string, func } = PropTypes

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
