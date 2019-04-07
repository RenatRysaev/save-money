import * as React from 'react'
import { connect } from 'react-redux'

import { MODALS } from 'constants/modals'
import { CURRENCY } from 'constants/currency'
import { adaptedCurrencyItems } from '../constants'

import { selectModalByName } from 'store/ui/selectors'
import { actionCloseModal } from 'store/ui/actions'
import { thunkCreateIncome } from 'store/income/thunks'

import { Formik } from 'formik'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Select from 'components/Select'
import Modal from 'components/Modal'

import { ICreateIncomeProps } from './types'

import styles from './styles.module.scss'

const mapStateToProps = (state) => ({
  modal: selectModalByName(state, MODALS.CREATE_INCOME.name),
})

const mapDispatchToProps = {
  closeModal: actionCloseModal,
  createIncome: thunkCreateIncome,
}

const CreateExpense: React.FC<ICreateIncomeProps> = ({
  modal,
  closeModal,
  createIncome,
}) => (
  <Modal
    title={modal.title}
    onClose={() => closeModal(MODALS.CREATE_INCOME.name)}
  >
    <Formik
      onSubmit={createIncome}
      initialValues={{
        name: '',
        sum: '',
        currency: CURRENCY.RUB,
      }}
    >
      {({ handleChange, handleSubmit, values }) => (
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.fieldWrapper}>
            <TextField
              className={styles.textField}
              name="name"
              value={values.name}
              label="Name"
              onChange={handleChange}
            />
            <div className={styles.moneyGroup}>
              <TextField
                className={styles.textField}
                name="sum"
                value={values.sum}
                label="Sum"
                onChange={handleChange}
                type="number"
              />
              <Select
                items={adaptedCurrencyItems}
                onChange={handleChange}
                name="currency"
                value={values.currency}
              />
            </div>
          </div>
          <Button
            className={styles.submitButton}
            type="submit"
            color="primary"
            variant="contained"
          >
            Create
          </Button>
        </form>
      )}
    </Formik>
  </Modal>
)

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateExpense)
