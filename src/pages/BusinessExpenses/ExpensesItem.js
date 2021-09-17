import ExpensesDate from "./ExpensesDate";
import classes from "./ExpensesItem.module.css";
import { useState } from "react";

const ExpensesItem = (props) => {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("Updated");
  };

  return (
    <div className={classes["expense-item"]}>
      <ExpensesDate date={props.date} />
      <div className={classes["expense-item__description"]}>
        <h2>{title}</h2>
        <div className={classes["expense-item__price"]}>${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </div>
  );
};

export default ExpensesItem;
