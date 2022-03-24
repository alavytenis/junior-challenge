export default function appReducer(state, action) {
  switch (action.type) {
    case "ADD_ASSIGNMENT": {
      return {
        ...state,
        assignments: [...state.assignments, action.payload],
      };
    }
    case "UPDATE_ASSIGNMENT": {
      const updatedAssignment = action.payload;

      const updatedAssignments = state.assignments.map((assignment) => {
        if (assignment.id === updatedAssignment.id) {
          return updatedAssignment;
        }
        return assignment;
      });

      return {
        ...state,
        assignments: updatedAssignments,
      };
    }
    case "REMOVE_ASSIGNMENT": {
      return {
        ...state,
        assignments: state.assignments.filter(
          (assignment) => assignment.id !== action.payload
        ),
      };
    }
    default:
      return state;
  }
}
