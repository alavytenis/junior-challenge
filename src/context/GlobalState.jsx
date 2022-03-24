import React, { createContext, useReducer } from "react";

import appReducer from "./AppReducer";

const initialState = {
  assignments: [
    {
      id: 0,
      label: "Pataisykite galimybę rodyti visas užduotis.",
      checked: true,
    },
    {
      id: 1,
      label:
        "Pataisykite išdėstymą, žymimieji laukeliai turėtų būti išvardyti stulpelyje",
      checked: false,
    },
    {
      id: 2,
      label: "Pataisykite galimybę pridėti naują užduotį",
      checked: true,
    },
    {
      id: 3,
      label: "Pataisykite galimybę perjungti (toggle) užduotį",
      checked: true,
    },
    {
      id: 4,
      label: "Pataisykite galimybę ištrinti užduotį",
      checked: true,
    },
    {
      id: 5,
      label: "Ištaisykite gebėjimą skaičiuoti atliktas užduotis",
      checked: true,
    },
  ],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  function addAssignment(assignment) {
    dispatch({
      type: "ADD_ASSIGNMENT",
      payload: assignment,
    });
  }

  function editAssignment(assignment) {
    dispatch({
      type: "UPDATE_ASSIGNMENT",
      payload: assignment,
    });
  }

  function removeAssignment(id) {
    dispatch({
      type: "REMOVE_ASSIGNMENT",
      payload: id,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        assignments: state.assignments,
        addAssignment,
        editAssignment,
        removeAssignment,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
