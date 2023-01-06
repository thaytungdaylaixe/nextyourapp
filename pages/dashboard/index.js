import Head from "next/head";
import Link from "next/link";
import React, { useState, useContext, useEffect } from "react";

import Grid from "@mui/material/Unstable_Grid2";
import { Card, CardContent, Avatar, Button } from "@mui/material";

import SnackbarMui from "../components/form/SnackbarMui";

import { Inter } from "@next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Dashboard() {
  const [dataSnackbar, SetDataSnackbar] = useState({
    open: false,
    severity: "info",
    msg: "This is an information message!",
  });

  const handleOpenSnackbar = () => {
    SetDataSnackbar({
      open: true,
      severity: "warning",
      msg: "This is an warning message!",
    });
  };

  const handleCloseSnackbar = (e, reason) => {
    if (reason === "clickaway") {
      return;
    }
    SetDataSnackbar({
      ...dataSnackbar,
      open: false,
      severity: "info",
      msg: "This is an information message!",
    });
  };

  return (
    <>
      <SnackbarMui
        open={dataSnackbar.open}
        severity={dataSnackbar.severity}
        msg={dataSnackbar.msg}
        close={handleCloseSnackbar}
      />
      <main>
        Dashboard
        <Button
          variant="outlined"
          onClick={(e) => {
            SetDataSnackbar({ ...dataSnackbar, open: true });
          }}
        >
          Open success snackbar
        </Button>
        <Button variant="outlined" onClick={handleOpenSnackbar}>
          warning
        </Button>
      </main>
    </>
  );
}
