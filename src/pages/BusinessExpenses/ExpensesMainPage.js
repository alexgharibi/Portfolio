import ExpensesFilter from "./ExpenseFilter/ExpenseFilters";
import ExpensesItem from "./ExpensesItem";
import classes from "./ExpensesMainPage.module.css";
import NewExpense from "./NewExpense/NewExpense";
import { useState } from "react";

const ExpensesMainPage = () => {
  const [filteredYear, setFilteredYear] = useState("2020");
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

  const addExpenseHandler = (expense) => {};

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <div className={classes.expenses}>
        <ExpensesFilter
          onChangeFilter={filterChangeHandler}
          selectedFilter={filteredYear}
        />
        <ExpensesItem
          title={expenses[0].title}
          amount={expenses[0].amount}
          date={expenses[0].date}
        ></ExpensesItem>
      </div>
    </div>
  );
};

export default ExpensesMainPage;
