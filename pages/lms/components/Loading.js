import React, { useState, useContext, useEffect } from "react";
import { DataContext } from "../../../store/GlobalState";

import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

export default function Loading() {
  const [state, dispatch] = useContext(DataContext);
  const { loading } = state;

  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={loading}
      // onClick={handleClose}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}
