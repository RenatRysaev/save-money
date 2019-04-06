import React from 'react'
import { isEqual } from 'lodash'

import { Formik } from 'formik'
import Paper from '@material-ui/core/Paper'
import IconButton from '@material-ui/core/IconButton'
import EditIcon from '@material-ui/icons/Edit'
import SaveIcon from '@material-ui/icons/Save'

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
        initialValues={{ name, sum, currency, date }}
        onSubmit={handleSubmit}
      >
        {(formikProps) => (
          <form onSubmit={formikProps.handleSubmit}>
            <IconButton
              type="submit"
              color="primary"
              aria-label="Update"
              className={styles.fab}
            >
              {isEditMode ? (
                <SaveIcon fontSize="small" />
              ) : (
                <EditIcon fontSize="small" />
              )}
            </IconButton>

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
