import React, { createContext, useReducer, useContext } from "react";

const CreatedContext = createContext();

export const StateProvider = ({ initialState, reducer, children }) => {
  console.log(children);
  return (
    <CreatedContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </CreatedContext.Provider>
  );
};

export const useStateValue = () => {
  return useContext(CreatedContext);
};
