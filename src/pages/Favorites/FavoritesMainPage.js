import React from "react";
import { Route } from "react-router-dom";
import ProductsProvider from "./context/products-context";
import Navigation from "./components/Nav/Navigation";
import ProductsPage from "./containers/Products";
import FavoritesPage from "./containers/Favorites";

const FavoritesMainPage = (props) => {
  return (
    <React.Fragment>
      <ProductsProvider>
        <Navigation />
        <main>
          <Route path="/" component={ProductsPage} exact />
          <Route path="/favorites" component={FavoritesPage} />
        </main>
      </ProductsProvider>
    </React.Fragment>
  );
};

export default FavoritesMainPage;
