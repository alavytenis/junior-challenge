import React, { useContext } from "react";
import { Checkbox } from "../checkbox";
import "./list.scss";
import { GlobalContext } from "../../context/GlobalState";

export const List = () => {
  const { assignments, editAssignment, removeAssignment } =
    useContext(GlobalContext);
  const selectedAssignment = {
    id: null,
    label: "",
    checked: false,
  };

  const handleDelete = (id) => {
    removeAssignment(id);
  };

  const toggleCheck = (id, isChecked, label) => {
    selectedAssignment.id = id;
    selectedAssignment.checked = !isChecked;
    selectedAssignment.label = label;
    editAssignment(selectedAssignment);
  };

  return (
    <div className="list">
      <span className="list-title">Testinės užduoties taskai:</span>
      {assignments.length ? (
        <div className="list-content">
          {assignments.map((assignmentItem) => (
            <div className="list-content-item">
              <Checkbox
                key={assignmentItem.id}
                label={assignmentItem.label}
                checked={assignmentItem.checked}
                onClick={() =>
                  toggleCheck(
                    assignmentItem.id,
                    assignmentItem.checked,
                    assignmentItem.label
                  )
                }
                onDelete={() => handleDelete(assignmentItem.id)}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="no-assignments">Užduočių nėra!</div>
      )}
    </div>
  );
};
