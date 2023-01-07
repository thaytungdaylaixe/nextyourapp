import React, { useContext } from "react";
import { DataContext } from "../../../store/GlobalState";

import Loading from "./Loading";
import SnackbarMui from "./SnackbarMui";

import AppBarSideBar from "./header";

const Layout = ({ children }) => {
  const [state, dispatch] = useContext(DataContext);

  const { access_token } = state;

  return (
    <>
      <Loading />
      <SnackbarMui />

      {access_token ? <AppBarSideBar /> : ""}

      {children}
    </>
  );
};

export default Layout;
