import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import { useContext, useEffect, useState } from "react";
import CartContext from "./../../store/cart-context";

const HeaderCartButton = (props) => {
  const [btnHighlight, setBtnHighlight] = useState(false);

  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  const numberOfCarItem = items.reduce((curr, item) => {
    return curr + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${btnHighlight ? classes.bump : ""}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnHighlight(true);

    const timer = setTimeout(() => {
      setBtnHighlight(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.showCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCarItem}</span>
    </button>
  );
};

export default HeaderCartButton;
