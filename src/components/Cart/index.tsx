import React from 'react'
import { isEqual } from 'lodash'

import { compactCollection } from 'utils/index'

import { Formik } from 'formik'
import Paper from '@material-ui/core/Paper'
import IconButton from '@material-ui/core/IconButton'
import EditIcon from '@material-ui/icons/Edit'
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'

import View from './View'
import Edit from './Edit'

import { ICartProps } from './types'

import styles from './styles.module.scss'

const Cart: React.FC<ICartProps> = ({
  id,
  name,
  sum,
  currency,
  date,
  onUpdate,
  onDelete,
}) => {
  const [isEditMode, setIsEditMode] = React.useState(false)

  const cartProps = { name, sum, currency, date }

  const toggleMode = () => setIsEditMode(!isEditMode)

  const handleSubmit = (values) => {
    const hasChanges = !isEqual(values, cartProps)

    toggleMode()

    if (isEditMode && hasChanges) {
      onUpdate(id, values)
    }
  }

  return (
    <Paper className={styles.cartWrapper}>
      <Formik
        initialValues={compactCollection({ name, sum, currency, date })}
        onSubmit={handleSubmit}
      >
        {(formikProps) => (
          <form onSubmit={formikProps.handleSubmit}>
            <div className={styles.actionButtons}>
              <IconButton type="submit" aria-label="Update">
                {isEditMode ? (
                  <SaveIcon fontSize="small" />
                ) : (
                  <EditIcon fontSize="small" />
                )}
              </IconButton>

              <IconButton
                onClick={() => onDelete(id)}
                aria-label="Delete"
                disabled={isEditMode}
              >
                <DeleteIcon />
              </IconButton>
            </div>

            {isEditMode ? (
              <Edit {...cartProps} {...formikProps} />
            ) : (
              <View {...cartProps} />
            )}
          </form>
        )}
      </Formik>
    </Paper>
  )
}

export default Cart
