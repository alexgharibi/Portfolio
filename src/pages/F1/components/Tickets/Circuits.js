import React from "react";
import AvailableCircuits from "./AvailableCircuits";
import CircuitsSummery from "./CircuitsSummery";

const Circuits = () => {
  return (
    <React.Fragment>
      <CircuitsSummery />
      <AvailableCircuits />
    </React.Fragment>
  );
};

export default Circuits;
