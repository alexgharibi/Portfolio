import ExpenseForm from "./ExpenseForm";
import classes from "./NewExpense.module.css";

const NewExpense = (props) => {
  const onSavedExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.floor(Math.random() * 100).toString(),
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className={classes["new-expense"]}>
      <ExpenseForm onSavedExpenseData={onSavedExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
