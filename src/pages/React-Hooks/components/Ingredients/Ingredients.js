import React, { useReducer, useCallback } from "react";
import IngredientForm from "./IngredientForm";
import Search from "./Search";
import IngredientList from "./IngredientList";
import ErrorModal from "../UI/ErrorModal";

const ingredReducer = (currIngred, action) => {
  switch (action.type) {
    case "SET":
      return action.ingrediants;
    case "ADD":
      return [...currIngred, action.ingrediant];
    case "DELETE":
      return currIngred.filter((ing) => ing.id !== action.id);
    default:
      throw new Error("Should Not get here!");
  }
};

const httpReducer = (curHttpState, action) => {
  switch (action.type) {
    case "SEND":
      return { loading: true, error: null };
    case "RESPONSE":
      return { ...curHttpState, loading: false };
    case "ERROR":
      return { loading: false, error: action.errorData };
    case "CLEAR":
      return { ...curHttpState, error: null };
    default:
      throw new Error("Should Not get here!");
  }
};

const Ingredients = () => {
  const [ingre, dispatch] = useReducer(ingredReducer, []);
  const [httpState, dispatchHttp] = useReducer(httpReducer, {
    loading: false,
    error: null,
  });
  // const [ingre, setIngre] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState();

  const filteredIngreHandler = useCallback((filterIngre) => {
    // setIngre(filterIngre);
    dispatch({ type: "SET", ingrediants: filterIngre });
  }, []);

  const addIngreHandler = (ingred) => {
    dispatchHttp({ type: "SEND" });
    fetch(
      "https://react-hooks-19787-default-rtdb.firebaseio.com/ingredients.json",
      {
        method: "POST",
        body: JSON.stringify(ingred),
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((response) => {
        dispatchHttp({ type: "RESPONSE" });
        return response.json();
      })
      .then((responseData) => {
        // setIngre((prevIngred) => [
        //   ...prevIngred,
        //   { id: responseData.name, ...ingred },
        // ]);
        dispatch({
          type: "ADD",
          ingrediant: { id: responseData.name, ...ingred },
        });
      });
  };

  const removeIngreHandler = (ingreId) => {
    dispatchHttp({ type: "SEND" });
    fetch(
      `https://react-hooks-19787-default-rtdb.firebaseio.com/ingredients/${ingreId}.json`,
      {
        method: "DELETE",
      }
    )
      .then((response) => {
        dispatchHttp({ type: "RESPONSE" });
        // setIngre((prevIngred) =>
        //   prevIngred.filter((ingre) => ingre.id !== ingreId)
        // );
        dispatch({ type: "DELETE", id: ingreId });
      })
      .catch((error) => {
        dispatchHttp({ type: "ERROR", errorData: error.message });
      });
  };

  const closeModalHandler = () => {
    dispatchHttp({ type: "CLEAR" });
  };

  return (
    <div className="App">
      {httpState.error && (
        <ErrorModal onClose={closeModalHandler}>{httpState.error}</ErrorModal>
      )}
      <IngredientForm
        onAddIngred={addIngreHandler}
        loading={httpState.loading}
      />

      <section>
        <Search onLoadingIngre={filteredIngreHandler} />
        <IngredientList ingredients={ingre} onRemoveItem={removeIngreHandler} />
      </section>
    </div>
  );
};

export default Ingredients;
