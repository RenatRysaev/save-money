import * as React from 'react'
import { node, bool, string, func } from 'prop-types'

import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'

import styles from './styles.module.scss'

const Modal = ({ children, isOpen, title, onClose }) => (
  <Dialog open={isOpen} aria-labelledby={title} onClose={onClose}>
    <IconButton
      aria-label="Close"
      className={styles.closeButton}
      onClick={onClose}
    >
      <CloseIcon />
    </IconButton>
    <DialogTitle id={title}>{title}</DialogTitle>
    <DialogContent>{children}</DialogContent>
  </Dialog>
)

Modal.propTypes = {
  children: node.isRequired,
  isOpen: bool.isRequired,
  title: string,
  onClose: func.isRequired,
}

export default Modal
