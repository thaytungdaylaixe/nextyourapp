import { createContext, useReducer, useEffect } from "react";
import Cookie from "js-cookie";

import reducers from "./Reducers";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const initialState = {
    data_login: {},
    data_register: {},
    data_hocvien: [],
    errors_form: {},
  };

  const [state, dispatch] = useReducer(reducers, initialState);

  return (
    <DataContext.Provider value={[state, dispatch]}>
      {children}
    </DataContext.Provider>
  );
};
