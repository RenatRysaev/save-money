import * as React from 'react'
import { connect } from 'react-redux'
import { map } from 'lodash'

import { MODALS } from 'constants/modals'

import { selectModals } from 'store/ui/selectors'

const mapStateToProps = (state) => ({
  modals: selectModals(state),
})

const modalComponents = {
  [MODALS.CREATE_EXPENSE.name]: React.lazy(() =>
    import('containers/Modals/CreateExpense'),
  ),
}

const Modals = ({ modals }) => (
  <React.Suspense fallback={<div>Loading...</div>}>
    {map(modals, ({ name }) => {
      const ModalComponent = modalComponents[name]
      return ModalComponent && <ModalComponent key={name} />
    })}
  </React.Suspense>
)

export default connect(mapStateToProps)(Modals)
