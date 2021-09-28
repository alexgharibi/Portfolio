import React, { useState, useEffect, useRef } from "react";

import Card from "../UI/Card";
import "./Search.css";

const Search = React.memo((props) => {
  const { onLoadingIngre } = props;
  const [enteredFiltered, setEnteredFiltered] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (enteredFiltered === inputRef.current.value) {
        const query =
          enteredFiltered.length === 0
            ? ""
            : `?orderBy="title"&equalTo="${enteredFiltered}"`;
        fetch(
          "https://react-hooks-19787-default-rtdb.firebaseio.com/ingredients.json" +
            query
        )
          .then((response) => response.json())
          .then((responseData) => {
            const loadedIngre = [];
            for (const key in responseData) {
              loadedIngre.push({
                id: key,
                title: responseData[key].title,
                amount: responseData[key].amount,
              });
            }
            onLoadingIngre(loadedIngre);
          });
      }
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [enteredFiltered, onLoadingIngre, inputRef]);

  const enteredHandler = (event) => {
    setEnteredFiltered(event.target.value);
  };
  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          <input
            ref={inputRef}
            type="text"
            value={enteredFiltered}
            onChange={enteredHandler}
          />
        </div>
      </Card>
    </section>
  );
});

export default Search;
