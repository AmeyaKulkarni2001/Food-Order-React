import { Fragment } from 'react';
import ReactDom from 'react-dom';

import classes from './Modal.module.css';
import Backdrop from './Backdrop';
import ModalOverlay from './ModalOverlay';

const portalElement = document.getElementById("overlay");

const Modal = (props) => {
    return (
      <Fragment>
        {ReactDom.createPortal(<Backdrop onClose = {props.onClose}/>, portalElement)}
        {ReactDom.createPortal(
          <ModalOverlay>{props.children}</ModalOverlay>,
          portalElement
        )}
      </Fragment>
    );
  };

export default Modal;