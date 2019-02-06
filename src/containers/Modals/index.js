import React, { Suspense } from 'react'
import { objectOf, string, func, shape, object } from 'prop-types'
import { compose } from 'redux'
import { connect } from 'react-redux'
import map from 'lodash/map'

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

const Modals = ({ modals, closeModal }) => {
  const closeModalByName = (name) => () => closeModal(name)
  return (
    <Suspense fallback={<PagePreloader />}>
      {map(modals, ({ component: Component, name, title }) => (
        <Modal isOpen key={name} title={title} onClose={closeModalByName(name)}>
          <Component />
        </Modal>
      ))}
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
