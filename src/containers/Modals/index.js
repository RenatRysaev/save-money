import React, { Suspense, lazy } from 'react'
import { objectOf, string, func, shape, object } from 'prop-types'
import { compose } from 'redux'
import { connect } from 'react-redux'
import map from 'lodash/map'

import { MODALS } from 'constants'

import { selectModals } from 'store/ui/selectors'

import { actionCloseModal } from 'store/ui/actions'

import Modal from 'components/Modal'
import PagePreloader from 'components/PagePreloader'

const mapStateToProps = (state) => ({
  modals: selectModals(state),
})

const mapDispatchToProps = {
  closeModal: actionCloseModal,
}

const MODAL_COMPONENTS = {
  [MODALS.CREATE_INCOME.name]: lazy(() =>
    import('containers/Modals/CreateIncome'),
  ),
  [MODALS.CREATE_COST.name]: lazy(() => import('containers/Modals/CreateCost')),
}

const Modals = ({ modals, closeModal }) => {
  const closeModalByName = (name) => () => closeModal(name)
  return (
    <Suspense fallback={<PagePreloader />}>
      {map(modals, ({ name, title }) => {
        const ModalComponent = MODAL_COMPONENTS[name]
        return (
          <Modal
            isOpen
            key={name}
            title={title}
            onClose={closeModalByName(name)}
          >
            <ModalComponent />
          </Modal>
        )
      })}
    </Suspense>
  )
}

Modals.propTypes = {
  modals: objectOf(
    shape({
      name: string,
      title: string,
      component: object,
    }),
  ),
  closeModal: func,
}

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(Modals)
