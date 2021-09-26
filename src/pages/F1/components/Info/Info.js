import InfoModal from "./InfoModal";
import classes from "./Info.module.css";

const Info = (props) => {
  const githubClickHandler = () => {
    window.open(
      "https://github.com/alexgharibi/Portfolio/tree/main/src/pages/F1"
    );
  };

  return (
    <InfoModal onHideInfo={props.onHideInfo}>
      <div className={classes.body}>
        <div>
          <h3>Welcome</h3>
          <p>
            This micro application is about using different React hooks such as
            useReducer, useState, useContext and many others. Hooks is one of
            the greatest features ever added to the React library since its
            creation and present enormous new opportunities.
          </p>
          <p>
            In this page, I mainly focused on UX and different functionalities
            to handle different states, especially for the cart module. You can
            check the code on my GitHub.
          </p>
        </div>
        <div className={classes.actions}>
          <button className={classes.button} onClick={githubClickHandler}>
            GitHub
          </button>
          <button className={classes.button} onClick={props.onHideInfo}>
            Close
          </button>
        </div>
      </div>
    </InfoModal>
  );
};

export default Info;
