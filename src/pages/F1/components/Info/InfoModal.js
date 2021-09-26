import React from "react";
import ReactDOM from "react-dom";
import classes from "./InfoModal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onHideInfo}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes["modal-main"]}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const PortalElement = document.getElementById("overlays");

const InfoModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onHideInfo={props.onHideInfo} />,
        PortalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        PortalElement
      )}
    </React.Fragment>
  );
};

export default InfoModal;
