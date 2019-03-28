import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import size from 'lodash/size'
import map from 'lodash/map'

import { MODALS } from 'constants/modals'

import {
  selectIncomeEntitiesJS,
  selectIsLoadingIncome,
} from 'store/income/selectors'

import {
  thunkGetIncome,
  thunkEditIncome,
  thunkDeleteIncome,
} from 'store/income/thunks'
import { actionOpenModal } from 'store/ui/actions'

import Loader from 'components/Loader'
import CheckOnEmpty from 'components/CheckOnEmpty'
import PreviewCart from 'components/PreviewCart'
import Button from '@material-ui/core/Button'

import { IIncomePageProps, IIncomeType } from './types'

import styles from './styles.module.scss'

const mapStateToProps = (state) => ({
  income: selectIncomeEntitiesJS(state),
  isLoadingIncome: selectIsLoadingIncome(state),
})

const mapDispatchToProps = {
  getIncome: thunkGetIncome,
  editIncome: thunkEditIncome,
  deleteIncome: thunkDeleteIncome,
  openModal: actionOpenModal,
}

class IncomePage extends Component<IIncomePageProps> {
  componentDidMount() {
    const { income, getIncome } = this.props

    if (!size(income)) {
      getIncome()
    }
  }

  handleOpenModal = () => {
    const { openModal } = this.props
    openModal(MODALS.CREATE_INCOME)
  }

  render() {
    const { income, isLoadingIncome, editIncome, deleteIncome } = this.props

    return (
      <div className={styles.incomeList}>
        <div className={styles.createButtonContainer}>
          <Button
            onClick={this.handleOpenModal}
            variant="contained"
            color="primary"
          >
            Create income
          </Button>
        </div>

        <Loader isLoading={isLoadingIncome}>
          <CheckOnEmpty
            listLength={size(income)}
            fallbackContent={<p>Income list is empty</p>}
          >
            {map(income, (incomeItem: IIncomeType, key) => (
              <PreviewCart
                key={key}
                id={key}
                name={incomeItem.name}
                description={incomeItem.description}
                sum={incomeItem.sum}
                onEdit={editIncome}
                onDelete={deleteIncome}
              />
            ))}
          </CheckOnEmpty>
        </Loader>
      </div>
    )
  }
}

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(IncomePage)
