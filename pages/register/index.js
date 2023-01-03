import React, { useState, useContext } from "react";
import { DataContext } from "../../store/GlobalState";

import Link from "next/link";

import TextFieldMui from "../components/form/TextFieldMui";

import styles from "./Register.module.css";

import {
  TextField,
  Card,
  CardContent,
  Avatar,
  Button,
  FormControlLabel,
  Checkbox,
  Grid,
  Box,
  Typography,
  Container,
} from "@mui/material";

export default function SignUp() {
  //   const [state, dispatch] = useContext(DataContext);
  //   const { data_login } = state;
  const [data, SetData] = useState({});

  const InputChange = (inputData) => {
    // dispatch({
    //   type: "data_login",
    //   payload: input,
    //   //   payload: true,
    // });

    // const dtInput = { inputData };
    console.log(inputData);

    SetData({ ...data, ...inputData });
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
            <TextFieldMui
              size="small"
              defaultValue=""
              id="sdt"
              label="so dt"
              onChange={InputChange}
            />
            <TextFieldMui
              size="small"
              defaultValue=""
              id="password"
              label="Mat khau"
              onChange={InputChange}
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
                console.log(data);
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
                <Link href="/login" variant="body2">
                  {"Bạn đã có tài khoản? ĐĂNG NHẬP"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </CardContent>
      </Card>
    </main>
  );
}
