import AuthForm from "../components/Auth/AuthForm";
import AuthInfo from "../Info/AuthInfo";
import { useState, Fragment } from "react";
import React from "react";

const AuthPage = () => {
  const [infoIsShown, setInfoIsShown] = useState(true);

  const hideInfoHandler = () => {
    setInfoIsShown(!infoIsShown);
  };

  return (
    <React.Fragment>
      {infoIsShown && <AuthInfo onHideInfo={hideInfoHandler} />}
      <AuthForm />
    </React.Fragment>
  );
};

export default AuthPage;
