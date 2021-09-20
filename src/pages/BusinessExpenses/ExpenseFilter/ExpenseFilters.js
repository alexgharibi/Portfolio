import classes from "./ExpenseFilters.module.css";

const ExpensesFilter = (props) => {
  const filterChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className={classes["expenses-filter"]}>
      <div className={classes["expenses-filter__control"]}>
        <label>Filter by year</label>
        <select onChange={filterChangeHandler} value={props.selectedFilter}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="None">None</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
