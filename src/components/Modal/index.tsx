import * as React from 'react'

import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'

import { IModalProps } from './types'

import styles from './styles.module.scss'

const Modal: React.FC<IModalProps> = ({ children, title, onClose }) => (
  <Dialog open aria-labelledby={title} onClose={onClose}>
    <IconButton
      className={styles.closeButton}
      aria-label="Close"
      onClick={onClose}
    >
      <CloseIcon />
    </IconButton>
    <DialogTitle>{title}</DialogTitle>
    <DialogContent>{children}</DialogContent>
  </Dialog>
)

export default Modal
