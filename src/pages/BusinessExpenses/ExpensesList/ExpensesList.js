import classes from "./ExpensesList.module.css";
import ExpensesItem from "../ExpensesItem/ExpensesItem";
import { AnimatePresence, motion, useIsPresent } from "framer-motion";

const ExpensesList = (props) => {
  const isPresent = useIsPresent();
  const animation = {
    style: { position: isPresent ? "static" : "absolute" },
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0, opacity: 0 },
    transition: { type: "spring", stiffness: 500, damping: 50 },
  };
  if (props.items.length === 0) {
    return (
      <AnimatePresence>
        <motion.h2
          layout
          {...animation}
          className={classes["expenses-list__fallback"]}
        >
          No Expenses Found
        </motion.h2>
      </AnimatePresence>
    );
  }

  return (
    <AnimatePresence>
      <motion.ul layout {...animation} className={classes["expenses-list"]}>
        {props.items.map((expense) => (
          <ExpensesItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </motion.ul>
    </AnimatePresence>
  );
};

export default ExpensesList;
