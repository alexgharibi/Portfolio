import ExpensesDate from "./ExpensesDate";
import classes from "./ExpensesItem.module.css";

const ExpensesItem = (props) => {
  return (
    <li>
      <div className={classes["expense-item"]}>
        <ExpensesDate date={props.date} />
        <div className={classes["expense-item__description"]}>
          <h2>{props.title}</h2>
          <div className={classes["expense-item__price"]}>${props.amount}</div>
        </div>
      </div>
    </li>
  );
};

export default ExpensesItem;
