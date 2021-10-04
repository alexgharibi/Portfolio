import InfoModal from "../../F1/components/Info/InfoModal";
import classes from "./AuthInfo.module.css";

const AuthInfo = (props) => {
  const githubClickHandler = () => {
    window.open(
      "https://github.com/alexgharibi/Portfolio/tree/main/src/pages/React-Hooks"
    );
  };

  return (
    <InfoModal onHideInfo={props.onHideInfo}>
      <div className={classes.body}>
        <div>
          <h3>Welcome</h3>
          <p>
            This micro application is about authentication, fetching data from
            our servrer and using different React hooks such as useReducer,
            useState and useContext. I also used diffrenet custom hooks for
            diffrenet types of fetching.
          </p>
          <p>
            In this page, first you need to create an account or you can use my
            test email and password to access home page which is a ingredient
            list handler which will save your list in our server. You can check
            out the code on my GitHub.
          </p>
          <p>Email: test@test.com </p>
          <p>Password: alexgharibi</p>
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

export default AuthInfo;
