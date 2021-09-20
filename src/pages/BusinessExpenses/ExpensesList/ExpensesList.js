import classes from "./ExpensesList.module.css";
import ExpensesItem from "../ExpensesItem/ExpensesItem";
import { motion } from "framer-motion";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return (
      <motion.h2 layout className={classes["expenses-list__fallback"]}>
        No Expenses Found
      </motion.h2>
    );
  }

  return (
    <motion.ul layout className={classes["expenses-list"]}>
      {props.items.map((expense) => (
        <ExpensesItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </motion.ul>
  );
};

export default ExpensesList;
