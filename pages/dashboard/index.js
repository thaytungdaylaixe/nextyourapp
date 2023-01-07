import Head from "next/head";
import Link from "next/link";
import React, { useState, useContext, useEffect } from "react";
import { DataContext } from "../../store/GlobalState";

import Grid from "@mui/material/Unstable_Grid2";
import { Card, CardContent, Avatar, Button } from "@mui/material";

import SnackbarMui from "../components/form/SnackbarMui";

import { Inter } from "@next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Dashboard() {
  const [state, dispatch] = useContext(DataContext);

  const [dataSnackbar, SetDataSnackbar] = useState({
    open: false,
  });

  const openSnackbar = () => {
    SetDataSnackbar({
      ...dataSnackbar,
      open: true,
      severity: "warning",
      msg: "This is an warning message!",
    });
  };

  const closeSnackbar = (e, reason) => {
    if (reason === "clickaway") {
      return;
    }
    SetDataSnackbar({ ...dataSnackbar, open: false });
  };

  useEffect(() => {
    console.log(state);
  }, []);

  return (
    <>
      <SnackbarMui
        open={dataSnackbar.open}
        severity={dataSnackbar.severity}
        msg={dataSnackbar.msg}
        close={closeSnackbar}
      />
      <main>
        Dashboard
        <Button
          variant="outlined"
          onClick={(e) => {
            SetDataSnackbar({
              open: true,
              severity: "info",
              msg: "This is an information message!",
            });
          }}
        >
          Open success snackbar
        </Button>
        <Button variant="outlined" onClick={openSnackbar}>
          warning
        </Button>
      </main>
    </>
  );
}
