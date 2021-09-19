import ExpensesDate from "./ExpensesDate";
import classes from "./ExpensesItem.module.css";
import { useState } from "react";

const ExpensesItem = (props) => {
  return (
    <div className={classes["expense-item"]}>
      <ExpensesDate date={props.date} />
      <div className={classes["expense-item__description"]}>
        <h2>{props.title}</h2>
        <div className={classes["expense-item__price"]}>${props.amount}</div>
      </div>
    </div>
  );
};

export default ExpensesItem;
