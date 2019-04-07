import * as React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { size } from 'lodash'

import {
  thunkGetIncome,
  thunkUpdateIncome,
  thunkRemoveIncome,
} from 'store/income/thunks'
import { actionOpenModal } from 'store/ui/actions'

import { selectIncomeEntities } from 'store/income/selectors'

import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import Cart from 'components/Cart'

import { IIncomePageProps } from './types'

import { MODALS } from 'constants/modals'

import styles from './styles.module.scss'

const mapStateToProps = (state) => ({
  income: selectIncomeEntities(state),
})

const mapDispatchToProps = {
  getIncome: thunkGetIncome,
  updateIncome: thunkUpdateIncome,
  removeIncome: thunkRemoveIncome,
  openModal: actionOpenModal,
}

const IncomePage: React.FC<IIncomePageProps> = ({
  income,
  getIncome,
  updateIncome,
  removeIncome,
  openModal,
}) => {
  React.useEffect(() => {
    if (!size(income)) {
      getIncome()
    }
  }, [])

  return (
    <div className={styles.wrapper}>
      <Button
        onClick={() => openModal(MODALS.CREATE_INCOME)}
        className={styles.addButton}
        variant="contained"
        color="primary"
      >
        <AddIcon />
      </Button>

      <div className={styles.list}>
        {income.map(({ _id, name, sum, currency }) => (
          <Cart
            key={_id}
            id={_id}
            name={name}
            sum={sum}
            currency={currency}
            onDelete={removeIncome}
            onUpdate={updateIncome}
          />
        ))}
      </div>
    </div>
  )
}

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(IncomePage)
