import React from "react";
import MainPage from "./pages/MainPage/MainPage";
import { Route, Redirect, Switch } from "react-router-dom";
import About from "./pages/About/About";
import F1 from "./pages/F1/F1";
import HomePage from "./pages/React-Hooks/pages/HomePage";
import AuthPage from "./pages/React-Hooks/pages/AuthPage";
import ReactHooks from "./pages/React-Hooks/ReactHooks";
import UserProfile from "./pages/React-Hooks/components/Profile/UserProfile";
import Layout from "./pages/React-Hooks/components/Layout/Layout";

const App = () => {
  return (
    <React.Fragment>
      <main>
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/about" exact component={About} />
          <Route path="/f1" exact component={F1} />
          <Layout>
            <Route path="/ingrediants" exact component={ReactHooks} />
            <Route path="/homepage" component={HomePage} />
            <Route path="/auth" component={AuthPage} />
            <Route path="/profile" component={UserProfile} />
          </Layout>
          <Redirect to="/" />
        </Switch>
      </main>
    </React.Fragment>
  );
};

export default App;
