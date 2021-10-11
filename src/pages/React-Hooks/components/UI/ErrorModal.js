import React from "react";
import ReactDOM from "react-dom";
import "./ErrorModal.css";

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.onClose} />;
};

const Modaloverlay = (props) => {
  return (
    <div className="error-modal">
      <h2>An Error Occurred!</h2>
      <p>{props.children}</p>
      <div className="error-modal__actions">
        <button type="button" onClick={props.onClose}>
          Okay
        </button>
      </div>
    </div>
  );
};

const ErrorModal = React.memo((props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <Modaloverlay onClose={props.onClose} children={props.children} />,
        document.getElementById("modal-root")
      )}
    </React.Fragment>
  );
});

export default ErrorModal;
