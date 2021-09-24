import React from "react";
import ExpensesMainPage from "./pages/BusinessExpenses/ExpensesMainPage";
import MainAnimationPage from "./pages/Animations/MainAnimationPage";
import FavoritesMainPage from "./pages/Favorites/FavoritesMainPage";
import MainPage from "./pages/MainPage/MainPage";
import { Route, Redirect, Switch } from "react-router-dom";
import About from "./pages/About/About";
import TopPage from "./pages/MainPage/TopPage";
import F1 from "./pages/F1/F1";

const App = () => {
  return (
    <React.Fragment>
      <main>
        <Switch>
          <Route path="/" exact>
            <MainPage />
          </Route>
          <Route path="/about" exact component={About} />
          <Route path="/f1" exact component={F1} />
          <Redirect to="/" />
        </Switch>
      </main>
    </React.Fragment>
  );
};

export default App;
