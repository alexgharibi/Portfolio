import { useState, useRef, useContext } from "react";
import { AuthContext } from "../../context/auth-context";
import ErrorModal from "../UI/ErrorModal";
import LoadingIndicator from "../UI/LoadingIndicator";
import classes from "./AuthForm.module.css";
import useAuthHttp from "./../../hooks/use-AuthHttp";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  const authCtx = useContext(AuthContext);

  const { error, isLoading, fetchHandler, clear } = useAuthHttp();

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    // validation

    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAAnLh44OupXHGShLbagyteUaQI1Jz-13A";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAAnLh44OupXHGShLbagyteUaQI1Jz-13A";
    }

    fetchHandler(
      url,
      "POST",
      {
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      },
      {
        "Content-Type": "application/json",
      }
    );

    // fetch(url, {
    //   method: "POST",
    //   body: JSON.stringify({
    //     email: enteredEmail,
    //     password: enteredPassword,
    //     returnSecureToken: true,
    //   }),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then((response) => {
    //     setIsLoading(false);
    //     if (response.ok) {
    //       return response.json();
    //     } else {
    //       return response.json().then((data) => {
    //         let errorMessage = "Authentication failed!";
    //         throw new Error(errorMessage);
    //       });
    //     }
    //   })
    //   .then((data) => {
    //     console.log(data);
    //     authCtx.login(data.idToken);
    //   })
    //   .catch((err) => {
    //     setError(err.message || "Authentication Failed");
    //   });
  };

  return (
    <section className={classes.auth}>
      {error && <ErrorModal onClose={clear}>{error}</ErrorModal>}
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.actions}>
          {!isLoading && (
            <button>{isLogin ? "Login" : "Create Account"}</button>
          )}
          {isLoading && <LoadingIndicator />}
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
