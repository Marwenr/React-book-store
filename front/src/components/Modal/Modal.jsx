import React, { Fragment } from "react";
import PortalReactDOM from "react-dom";
import styles from "./styles.module.css";

const Backdrop = ({ show, close }) => {
  return (
    <div
      className={`${styles.backDrop} ${show ? styles.show : ""}`}
      onClick={close}
    ></div>
  );
};

const Overlay = ({ children, show }) => {
  return (
    <div className={`${styles.overlay} ${show ? styles.showOvr : ""}`}>
      {children}
    </div>
  );
};

const modal = ({ children, show, close }) => {
  return (
    <Fragment>
      {PortalReactDOM.createPortal(
        <Fragment>
          <Backdrop close={close} show={show} />
          <Overlay show={show}>
            {children}
          </Overlay>
        </Fragment>,
        document.getElementById("modal")
      )}
    </Fragment>
  );
};

export default modal;
