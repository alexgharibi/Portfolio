import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Circuits from "./components/Tickets/Circuits";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import Info from "./components/Info/Info";

const F1 = () => {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [infoIsShown, setInfoIsShown] = useState(true);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  const hideInfoHandler = () => {
    setInfoIsShown(!infoIsShown);
  };
  return (
    <CartProvider>
      {infoIsShown && <Info onHideInfo={hideInfoHandler} />}
      {cartIsShown && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} onHideInfo={hideInfoHandler} />
      <main>
        <Circuits />
      </main>
    </CartProvider>
  );
};

export default F1;
