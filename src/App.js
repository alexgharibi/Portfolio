import React from "react";
import ExpensesMainPage from "./pages/BusinessExpenses/ExpensesMainPage";
import MainAnimationPage from "./pages/Animations/MainAnimationPage";
import FavoritesMainPage from "./pages/Favorites/FavoritesMainPage";
import MainPage from "./pages/MainPage/MainPage";
import { Route, Redirect, Switch } from "react-router-dom";
import About from "./pages/About/About";
import Navbar from "./pages/NavBar/NavBar";
import TopPage from "./pages/MainPage/TopPage";

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <main>
        <Switch>
          <Route path="/" exact>
            <MainPage />
          </Route>
          <Route path="/about" exact component={About} />
          <Redirect to="/" />
        </Switch>
      </main>
    </React.Fragment>
  );
};

export default App;
