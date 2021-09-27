import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./IngredientForm.module.css";

const IngredientForm = React.memo((props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");

  const updateInput = (event) => {
    setEnteredTitle(event.target.value);
  };

  const updateAmount = (event) => {
    setEnteredAmount(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onAddIngred({ title: enteredTitle, amount: enteredAmount });
  };

  return (
    <section className={classes["ingredient-form"]}>
      <Card>
        <form onSubmit={submitHandler}>
          <div className={classes["form-control"]}>
            <label htmlFor="title">Name</label>
            <input
              type="text"
              id="title"
              value={enteredTitle}
              onChange={updateInput}
            />
          </div>
          <div className={classes["form-control"]}>
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              id="amount"
              value={enteredAmount}
              onChange={updateAmount}
            />
          </div>
          <div className={classes["ingredient-form__actions"]}>
            <button className={classes.button} type="submit">
              Add Ingredient
            </button>
          </div>
        </form>
      </Card>
    </section>
  );
});

export default IngredientForm;
