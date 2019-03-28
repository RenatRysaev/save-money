import React, { Suspense, lazy } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import map from 'lodash/map'

import { MODALS } from 'constants/modals'

import { selectModals } from 'store/ui/selectors'

import { actionCloseModal } from 'store/ui/actions'

import Modal from 'components/Modal'
import PagePreloader from 'components/PagePreloader'

import { IModalsProps } from './types'

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
}

const Modals: React.FC<IModalsProps> = ({ modals, closeModal }) => {
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

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(Modals)
