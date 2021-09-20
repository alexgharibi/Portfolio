import ExpensesFilter from "./ExpenseFilter/ExpenseFilters";
import classes from "./ExpensesMainPage.module.css";
import NewExpense from "./NewExpense/NewExpense";
import { useState } from "react";
import ExpensesList from "./ExpensesList/ExpensesList";
import ExpensesChart from "./Chart/ExpensesChart";

const expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
const ExpensesMainPage = () => {
  const [filteredYear, setFilteredYear] = useState("None");
  const [businessExpenses, setBusinessExpenses] = useState(expenses);

  const addExpenseHandler = (expenseData) => {
    setBusinessExpenses((prevExpenses) => {
      return [expenseData, ...prevExpenses];
    });
  };

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = businessExpenses.filter((expense) => {
    if (filteredYear === "None") {
      return businessExpenses;
    } else return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <div className={classes.expenses}>
        <ExpensesFilter
          onChangeFilter={filterChangeHandler}
          selectedFilter={filteredYear}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </div>
    </div>
  );
};

export default ExpensesMainPage;
