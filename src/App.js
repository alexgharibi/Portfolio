import React, { useContext } from "react";
import MainPage from "./pages/MainPage/MainPage";
import AuthContextProvider, {
  AuthContext,
} from "./pages/React-Hooks/context/auth-context";
import { Route, Redirect, Switch } from "react-router-dom";
import About from "./pages/About/About";
import F1 from "./pages/F1/F1";
import Ingredients from "./pages/React-Hooks/components/Ingredients/Ingredients";
import AuthPage from "./pages/React-Hooks/pages/AuthPage";
import UserProfile from "./pages/React-Hooks/components/Profile/UserProfile";
import Layout from "./pages/React-Hooks/components/Layout/Layout";

const App = () => {
  const authCtx = useContext(AuthContext);

  console.log(authCtx.isLoggedIn);

  return (
    <React.Fragment>
      <main>
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/about" exact component={About} />
          <Route path="/f1" exact component={F1} />
          <Layout>
            {authCtx.isLoggedIn && (
              <Route path="/homepage" component={Ingredients} />
            )}
            {!authCtx.isLoggedIn && <Route path="/auth" component={AuthPage} />}
            {authCtx.isLoggedIn && (
              <Route path="/profile" component={UserProfile} />
            )}
          </Layout>
          <Redirect to="/" />
        </Switch>
      </main>
    </React.Fragment>
  );
};

export default App;
