import React, { useState, useContext } from "react";
import { DataContext } from "../../store/GlobalState";

import Link from "next/link";

import styles from "./Login.module.css";

import {
  Card,
  CardContent,
  Avatar,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Grid,
  Box,
  Typography,
  Container,
} from "@mui/material";

export default function SignIn() {
  //   const [state, dispatch] = useContext(DataContext);
  //   const { data_login } = state;
  const [data_login, SetDataLogin] = useState({});

  const InputChange = (input) => {
    // dispatch({
    //   type: "data_login",
    //   payload: input,
    //   //   payload: true,
    // });
    SetDataLogin(input);
  };

  return (
    <main>
      {}
      <Card>
        <CardContent>
          <div className={styles.login_icon}>
            <Link href="/" sx={{ mt: 1 }}>
              <Avatar src="/daylaixe/512x512.png" />
            </Link>
          </div>

          <Typography
            className={styles.text_title_center}
            component="h1"
            variant="h5"
          >
            ĐĂNG NHẬP
          </Typography>
          <Box sx={{ mt: 1 }}>
            <TextField
              size="small"
              defaultValue={data_login.sdt ? data_login.sdt : ""}
              variant="outlined"
              margin="normal"
              fullWidth
              id="sdt"
              label="Số điện thoại"
              name="sdt"
              autoFocus
              onChange={(e) => {
                e.preventDefault();
                const { value } = e.target;
                InputChange({ ...data_login, ["sdt"]: value });

                // setData({ ...data, [name]: value });
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="Mật khẩu"
              label="Mật khẩu"
              type="password"
              id="Mật khẩu"
              autoComplete="current-password"
              onChange={(e) => {
                e.preventDefault();
                const { value } = e.target;
                InputChange({ ...data_login, ["password"]: value });

                // setData({ ...data, [name]: value });
              }}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={(e) => {
                e.preventDefault();
                console.log(data_login);
              }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Quên mật khẩu?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/register" variant="body2">
                  {"Bạn chưa có tài khoản? ĐĂNG KÝ"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </CardContent>
      </Card>
    </main>
  );
}
