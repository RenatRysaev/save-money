import React, { Component } from 'react'
import { string, bool, func, shape, objectOf } from 'prop-types'
import { compose } from 'redux'
import { connect } from 'react-redux'
import size from 'lodash/size'
import map from 'lodash/map'

import { MODALS } from 'src/constants'

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

import Loader from 'components/Loader/index'
import PageTitle from 'components/PageTitle/index'
import CheckOnEmpty from 'components/CheckOnEmpty/index'
import PreviewCart from 'components/PreviewCart/index'
import Button from '@material-ui/core/Button'

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

interface IncomePageProps {
  income: object
  getIncome: () => void
  openModal: (modalData: object) => void
  isLoadingIncome: boolean
  editIncome: (incomeData) => void
  deleteIncome: (id) => void
}

type incomeType = {
  id: string
  name: string
  sum: string
  description?: string
}

class IncomePage extends Component<IncomePageProps> {
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
        <PageTitle>Income</PageTitle>

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
            {map(income, (incomeItem: incomeType, key) => (
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
//
// IncomePage.propTypes = {
//   income: objectOf(
//     shape({
//       id: string,
//       name: string,
//       sum: string,
//     }),
//   ),
//   isLoadingIncome: bool,
//   getIncome: func,
//   editIncome: func,
//   deleteIncome: func,
//   openModal: func,
// }

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(IncomePage)
