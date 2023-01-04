import React, { useState, useContext } from "react";
import { DataContext } from "../../store/GlobalState";

import Link from "next/link";

import TextFieldMui from "../components/form/TextFieldMui";

import styles from "./Register.module.css";

import {
  Card,
  CardContent,
  Avatar,
  Button,
  FormControlLabel,
  Checkbox,
  Typography,
} from "@mui/material";

import Grid from "@mui/material/Unstable_Grid2";

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

  const propertiesTextfield = {
    fullWidth: true,
    size: "small",
    defaultValue: "",
  };

  return (
    <main>
      {}
      <Card sx={{ maxWidth: 600, width: "100%" }}>
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
            ĐĂNG KÝ
          </Typography>
          <Grid
            container
            direction="column"
            spacing={2}
            xs={12}
            justify="center"
          >
            <Grid item>
              <TextFieldMui
                properties={{ ...propertiesTextfield }}
                id="sdt"
                label="Số điện thoại"
                onChange={InputChange}
              />
            </Grid>
            <Grid item>
              <TextFieldMui
                properties={{ ...propertiesTextfield }}
                id="password"
                label="Mat khau"
                onChange={InputChange}
              />
            </Grid>
            <Grid item>
              <FormControlLabel
                control={
                  <Checkbox value="remember" color="primary" size="small" />
                }
                label="Remember me"
              />
            </Grid>
            <Grid item>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                onClick={(e) => {
                  e.preventDefault();
                  console.log(data);
                }}
              >
                Sign In
              </Button>
            </Grid>
            <Grid item>
              <Grid
                container
                direction="row"
                spacing={3}
                xs={{ width: "100%" }}
              >
                <Grid item>
                  <Link href="#">
                    <Typography variant="caption">
                      {" "}
                      {"Quên mật khẩu?"}
                    </Typography>
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/login">
                    <Typography variant="caption">
                      {"Bạn đã có tài khoản? ĐĂNG NHẬP"}
                    </Typography>
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </main>
  );
}
