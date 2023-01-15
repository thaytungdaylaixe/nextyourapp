import { createContext, useReducer, useEffect } from "react";
import Cookie from "js-cookie";

import reducers from "./Reducers";

import { getData } from "../pages/api/utils/fetchData";

import lmsData from "./lmsData.json";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const initialState = {
    lmsData,
    user: {},
    snackbar: {
      open: false,
      severity: "info",
      msg: "Hi!",
    },
    loading: false,
    access_token: "null",

    data_login: {},
    data_hocvien: [],
    errors_form: {},
  };

  const [state, dispatch] = useReducer(reducers, initialState);

  useEffect(() => {
    async function fetchDataGlobal() {
      const firstLogin = await localStorage.getItem("firstLogin");

      // if (firstLogin) {
      //   dispatch({
      //     type: "Loading",
      //     payload: true,
      //   });

      //   await getData("auth/accessToken").then(async (res) => {
      //     if (res.infor === "error") {
      //       dispatch({
      //         type: "Loading",
      //         payload: false,
      //       });

      //       return localStorage.removeItem("firstLogin");
      //     }

      //     await dispatch({
      //       type: "Auth",
      //       payload: {
      //         token: res.access_token,
      //         giaovien: res.giaovien,
      //       },
      //     });

      //     Cookie.set("refreshtoken", res.refresh_token, {
      //       path: "api/auth/accessToken",
      //       expires: 365,
      //     });

      //     localStorage.setItem("firstLogin", true);

      //     await getData("select/getAll").then(async (res) => {
      //       if (res.infor === "error") {
      //         return dispatch({
      //           type: "Loading",
      //           payload: false,
      //         });
      //       }
      //       await dispatch({
      //         type: "hocvienAllData",
      //         payload: res.allData,
      //       });
      //     });
      //   });

      //   dispatch({
      //     type: "Loading",
      //     payload: false,
      //   });
      // }
    }

    fetchDataGlobal();
  }, []);

  return (
    <DataContext.Provider value={[state, dispatch]}>
      {children}
    </DataContext.Provider>
  );
};
