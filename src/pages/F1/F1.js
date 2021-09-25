import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Circuits from "./components/Tickets/Circuits";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

const F1 = () => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <CartProvider>
      {cartIsShown && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Circuits />
      </main>
    </CartProvider>
  );
};

export default F1;
