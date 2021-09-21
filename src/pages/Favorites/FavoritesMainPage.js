import React from "react";
import { Route } from "react-router-dom";
import configureStore from "./hooks-store/product-store";
import Navigation from "./components/Nav/Navigation";
import ProductsPage from "./containers/Products";
import FavoritesPage from "./containers/Favorites";

configureStore();

const FavoritesMainPage = (props) => {
  return (
    <React.Fragment>
      <Navigation />
      <main>
        <Route path="/" component={ProductsPage} exact />
        <Route path="/favorites" component={FavoritesPage} />
      </main>
    </React.Fragment>
  );
};

export default FavoritesMainPage;
