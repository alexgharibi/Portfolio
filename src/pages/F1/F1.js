import React from "react";
import Header from "./components/Layout/Header";
import Circuits from "./components/Tickets/Circuits";

const F1 = () => {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Circuits />
      </main>
    </React.Fragment>
  );
};

export default F1;
