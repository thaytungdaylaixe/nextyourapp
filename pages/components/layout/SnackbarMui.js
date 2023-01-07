import React, { useContext, forwardRef } from "react";
import { DataContext } from "../../../store/GlobalState";

import { Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={12} ref={ref} variant="filled" {...props} />;
});

export default function SnackbarMui() {
  const [state, dispatch] = useContext(DataContext);
  const { snackbar } = state;
  const { open, severity, msg } = snackbar;

  const close = () => {
    dispatch({
      type: "SnackBar",
      payload: {
        ...snackbar,
        open: false,
      },
    });
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={open}
      autoHideDuration={6000}
      onClose={close}
    >
      <Alert onClose={close} severity={severity} sx={{ width: "100%" }}>
        {msg}
      </Alert>
    </Snackbar>
  );
}
