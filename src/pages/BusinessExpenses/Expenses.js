import classes from "./Expenses.module.css";

const Expenses = () => {
  return (
    <div className={classes["expense-item"]}>
      <div>Date</div>
      <div className={classes["expense-item__description"]}>
        <h2>Title</h2>
        <div className={classes["expense-item__price"]}>Amount</div>
      </div>
    </div>
  );
};

export default Expenses;
