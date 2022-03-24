import React, { useContext } from "react";
import "./results.scss";
import { GlobalContext } from "../../context/GlobalState";

export const Results = () => {
  const { assignments } = useContext(GlobalContext);
  let count = 0;
  const totalChecked = (value) => {
    value.forEach((a) => {
      if (a.checked) {
        count += 1;
      }
    });
    return count;
  };
  return (
    <div className="results">
      Atlikta:
      {totalChecked(assignments)}
    </div>
  );
};
