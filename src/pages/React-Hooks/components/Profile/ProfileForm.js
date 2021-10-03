import classes from "./ProfileForm.module.css";
import { useRef, useContext } from "react";
import { AuthContext } from "../../context/auth-context";
import useAuthHttp from "../../hooks/use-AuthHttp";
import ErrorModal from "../UI/ErrorModal";

const ProfileForm = () => {
  const newInputPasswordRef = useRef();
  const authCtx = useContext(AuthContext);
  const { fetchHandler, clear, error } = useAuthHttp();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredNewPassword = newInputPasswordRef.current.value;

    // add validation
    const url =
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAAnLh44OupXHGShLbagyteUaQI1Jz-13A";

    fetchHandler(
      url,
      "POST",
      {
        idToken: authCtx.token,
        password: enteredNewPassword,
        returnSecureToken: false,
      },
      {
        "Content-Type": "application/json",
      }
    );

    // fetch(
    //   "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAAnLh44OupXHGShLbagyteUaQI1Jz-13A",
    //   {
    //     method: "POST",
    //     body: JSON.stringify({
    //       idToken: authCtx.token,
    //       password: enteredNewPassword,
    //       returnSecureToken: false,
    //     }),
    //     headrs: {
    //       "Content-Type": "application/json",
    //     },
    //   }
    // ).then((response) => {
    //   //add error
    // });
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      {error && <ErrorModal onClose={clear}>{error}</ErrorModal>}
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input
          type="password"
          id="new-password"
          minLength="7"
          ref={newInputPasswordRef}
        />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
