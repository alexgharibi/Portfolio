import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./IngredientForm.module.css";

const IngredientForm = React.memo((props) => {
  const [inputState, setInputState] = useState({ title: "", amount: "" });

  const updateInput = (event) => {
    const newTitle = event.target.value;
    setInputState((prevState) => ({
      title: newTitle,
      amount: prevState.amount,
    }));
  };

  const updateAmount = (event) => {
    const newAmount = event.target.value;
    setInputState((prevState) => ({
      amount: newAmount,
      title: prevState.title,
    }));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    // ...
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
              value={inputState.title}
              onChange={updateInput}
            />
          </div>
          <div className={classes["form-control"]}>
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              id="amount"
              value={inputState.amount}
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
