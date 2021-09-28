import React, { useState, useEffect, useCallback } from "react";
import IngredientForm from "./IngredientForm";
import Search from "./Search";
import IngredientList from "./IngredientList";

const Ingredients = () => {
  const [ingre, setIngre] = useState([]);

  const filteredIngreHandler = useCallback((filterIngre) => {
    setIngre(filterIngre);
  }, []);

  const addIngreHandler = (ingred) => {
    fetch(
      "https://react-hooks-19787-default-rtdb.firebaseio.com/ingredients.json",
      {
        method: "POST",
        body: JSON.stringify(ingred),
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        setIngre((prevIngred) => [
          ...prevIngred,
          { id: responseData.name, ...ingred },
        ]);
      });
  };

  const removeIngreHandler = (ingreId) => {
    setIngre((prevIngred) =>
      prevIngred.filter((ingre) => ingre.id !== ingreId)
    );
  };
  return (
    <div className="App">
      <IngredientForm onAddIngred={addIngreHandler} />

      <section>
        <Search onLoadingIngre={filteredIngreHandler} />
        <IngredientList ingredients={ingre} onRemoveItem={removeIngreHandler} />
      </section>
    </div>
  );
};

export default Ingredients;
