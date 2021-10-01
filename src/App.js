import React from "react";
import MainPage from "./pages/MainPage/MainPage";
import { Route, Redirect, Switch } from "react-router-dom";
import About from "./pages/About/About";
import F1 from "./pages/F1/F1";
import ReactHooks from "./pages/React-Hooks/ReactHooks";

const App = () => {
  return (
    <React.Fragment>
      <main>
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/about" exact component={About} />
          <Route path="/f1" exact component={F1} />
          <Route path="/ingrediants" exact component={ReactHooks} />
          <Redirect to="/" />
        </Switch>
      </main>
    </React.Fragment>
  );
};

export default App;
