import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import size from 'lodash/size'
import map from 'lodash/map'

import { MODALS } from 'constants/modals'

import {
  selectIncomeEntities,
  selectIsLoadingIncome,
} from 'store/income/selectors'

import {
  thunkGetIncome,
  thunkUpdateIncome,
  thunkRemoveIncome,
} from 'store/income/thunks'
import { actionOpenModal } from 'store/ui/actions'

import Loader from 'components/Loader'
import Button from '@material-ui/core/Button'

import { IIncomePageProps, IIncomeType } from './types'

import styles from './styles.module.scss'

const mapStateToProps = (state) => ({
  income: selectIncomeEntities(state),
  isLoadingIncome: selectIsLoadingIncome(state),
})

const mapDispatchToProps = {
  getIncome: thunkGetIncome,
  updateIncome: thunkUpdateIncome,
  removeIncome: thunkRemoveIncome,
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
    const { income, isLoadingIncome, updateIncome, removeIncome } = this.props

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
          {map(income, (incomeItem: IIncomeType, key) => (
            <div>temp</div>
          ))}
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
