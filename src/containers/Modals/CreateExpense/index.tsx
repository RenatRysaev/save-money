import * as React from 'react'
import moment from 'moment'
import { connect } from 'react-redux'

import { MODALS } from 'constants/modals'
import { CURRENCY } from 'constants/currency'
import { currency, expenseKinds, expenseTypes } from './constants'

import { selectModalByName } from 'store/ui/selectors'
import { actionCloseModal } from 'store/ui/actions'
import { thunkCreateExpense } from 'store/expense/thunks'

import { Field, Formik } from 'formik'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import DatePickerField from 'components/DatePickerField'
import Select from 'components/Select'
import Modal from 'components/Modal'

import { ExpenseType, ExpenseKind } from 'types/expense'
import { ICreateExpenseProps } from './types'

import styles from './styles.module.scss'

const mapStateToProps = (state) => ({
  modal: selectModalByName(state, MODALS.CREATE_EXPENSE.name),
})

const mapDispatchToProps = {
  closeModal: actionCloseModal,
  createExpense: thunkCreateExpense,
}

const CreateExpense: React.FC<ICreateExpenseProps> = ({
  modal,
  closeModal,
  createExpense,
}) => (
  <Modal
    title={modal.title}
    onClose={() => closeModal(MODALS.CREATE_EXPENSE.name)}
  >
    <Formik
      onSubmit={createExpense}
      initialValues={{
        name: '',
        sum: '',
        currency: CURRENCY.RUB,
        date: moment(),
        type: ExpenseType.ACTUAL,
        kind: ExpenseKind.ONE_TIME,
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
                items={currency}
                onChange={handleChange}
                name="currency"
                value={values.currency}
              />
            </div>
            <Field
              className={styles.dateField}
              name="date"
              component={DatePickerField}
              label="Date"
            />
            <Select
              className={styles.typeField}
              items={expenseTypes}
              onChange={handleChange}
              name="type"
              value={values.type}
            />
            <Select
              className={styles.kindField}
              items={expenseKinds}
              onChange={handleChange}
              name="kind"
              value={values.kind}
            />
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
