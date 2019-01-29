import React, { Component } from 'react'
import { hot } from 'react-hot-loader/root'
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { connect } from 'react-redux'

import {
  selectCostsEntitiesJS,
  selectIsLoadingCosts,
} from 'store/costs/selectors'

import { thunkGetCosts } from 'store/costs/thunks'

import CostPreviewCart from 'components/CostPreviewCart'

import styles from './styles.module.scss'

const mapStateToProps = (state) => ({
  costs: selectCostsEntitiesJS(state),
  isLoadingCosts: selectIsLoadingCosts(state),
})

const mapDispatchToProps = {
  getCosts: thunkGetCosts,
}

class CostsPage extends Component {
  componentDidMount() {
    const { getCosts } = this.props
    getCosts()
  }

  render() {
    const { costs } = this.props

    return (
      <div className={styles.costsList}>
        {costs.map((cost) => (
          <CostPreviewCart
            key={cost.id}
            name={cost.name}
            description={cost.description}
            sum={cost.sum}
            date={cost.date}
          />
        ))}
      </div>
    )
  }
}

const { string, bool, func, arrayOf, shape } = PropTypes

CostsPage.propTypes = {
  costs: arrayOf(
    shape({
      id: string,
      name: string,
      sum: string,
      date: string,
    }),
  ),
  isLoadingCosts: bool,
  getCosts: func,
}

export default compose(
  hot,
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(CostsPage)
