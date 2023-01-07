import React from "react";
import Loading from "./Loading";
import SnackbarMui from "./SnackbarMui";

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
