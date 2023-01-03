import * as React from "react";
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

// import Link from "@mui/material/Link";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <main>
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
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
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
                <Link href="#" variant="body2">
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
