import React, { useState, useContext, useEffect } from "react";
import { DataContext } from "../../store/GlobalState";

import { useRouter } from "next/router";
import Link from "next/link";

import { postData } from "../api/utils/fetchData";
import { ValidInputForm, ValidData } from "../api/utils/valid";

import styles from "./Login.module.css";

import {
  Card,
  CardContent,
  Avatar,
  Button,
  FormControlLabel,
  Checkbox,
  Typography,
  TextField,
} from "@mui/material";

import Grid from "@mui/material/Unstable_Grid2";

export default function Login() {
  const router = useRouter();
  const InputRenderForm = [
    { id: "sdt", label: "Số điện thoại", type: "number" },
    { id: "password", label: "Mật khẩu", type: "password" },
  ];

  const [state, dispatch] = useContext(DataContext);
  const { snackbar } = state;

  const initDataForm = {
    sdt: "",
    password: "",
  };

  const [data, SetData] = useState(initDataForm);
  const [errors, setErrors] = useState({});

  const InputChange = (key, val) => {
    const errorMsg = ValidInputForm(key, val, data.password);

    SetData({ ...data, [key]: val });

    if (errorMsg === null) {
      delete errors[key];
      setErrors({ ...errors });
      return;
    }

    setErrors({ ...errors, [key]: errorMsg });
  };

  const Submit = async () => {
    await dispatch({
      type: "Loading",
      payload: true,
    });

    if (
      data.sdt !== "" &&
      data.password !== "" &&
      Object.keys(errors).length === 0
    ) {
      const res = await postData("auth/login", data);

      console.log(res);

      if (res.errors) {
        await dispatch({
          type: "Loading",
          payload: false,
        });
        return setErrors(res.errors);
      }

      SetData(initDataForm);
      setErrors({});

      await dispatch({
        type: "Loading",
        payload: false,
      });

      await dispatch({
        type: "SnackBar",
        payload: {
          ...snackbar,
          open: true,
          severity: "success",
          msg: res.success,
        },
      });

      await dispatch({
        type: "AddUser",
        payload: res.user,
      });

      return router.push("/dashboard");
    }

    console.log(ValidData(data));

    return await dispatch({
      type: "Loading",
      payload: false,
    });
  };

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <main>
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
            ĐĂNG NHẬP
          </Typography>

          <Grid
            container
            direction="column"
            spacing={2}
            xs={12}
            justify="center"
          >
            {InputRenderForm.map((ip, i) => (
              <Grid item key={"ip" + i}>
                <TextField
                  fullWidth
                  size="small"
                  type={ip.type}
                  error={errors && errors[ip.id] && !!errors[ip.id]}
                  helperText={errors && errors[ip.id] && errors[ip.id]}
                  id={ip.id}
                  name={ip.id}
                  label={ip.label}
                  value={data[ip.id]}
                  onChange={(e) => {
                    e.preventDefault();
                    const newVal = e.target.value;
                    InputChange(ip.id, newVal);
                  }}
                />
              </Grid>
            ))}

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
                  Submit();
                }}
              >
                ĐĂNG NHẬP
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
                  <Link href="/register">
                    <Typography variant="caption">
                      {"Bạn đã có tài khoản? ĐĂNG KÝ"}
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
