import React from "react";
import Loading from "./Loading";
import SnackbarMui from "../form/SnackbarMui";

const Layout = ({ children }) => {
  return (
    <>
      <Loading />
      <SnackbarMui />
      {children}
    </>
  );
};

export default Layout;
