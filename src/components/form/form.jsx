import React, { useState, useContext } from "react";
import "./form.scss";
import { GlobalContext } from "../../context/GlobalState";

export const Form = () => {
  const [assignmentLabel, setAssignmentLabel] = useState("");
  const { addAssignment, assignments } = useContext(GlobalContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAssignment = {
      id: assignments.length + 1,
      label: assignmentLabel,
      checked: false,
    };
    addAssignment(newAssignment);
  };

  const handleKeyUp = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  return (
    <form className="form">
      <input
        type="text"
        placeholder="Pridėti užduotį"
        value={assignmentLabel}
        onChange={(e) => setAssignmentLabel(e.target.value)}
        onKeyUp={handleKeyUp}
      />
      <button type="button" onClick={handleSubmit}>
        Pridėti
      </button>
    </form>
  );
};
