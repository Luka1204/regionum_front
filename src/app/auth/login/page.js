"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import FilledInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Navbar from "../../navbar";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import loginStyles from "../../../css/login.module.css";
import Button from "@mui/material/Button";

/* import styles from "./page.module.css"; */
export default function Login() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: (theme.vars ?? theme).palette.text.secondary,
    ...theme.applyStyles("dark", {
      backgroundColor: "#1A2027",
    }),
  }));

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <Navbar isAdmin={false} />
      <section className={loginStyles.login_sct}>
        <Box
          sx={{
            margin: "0px auto",
            mt: 5,
            borderRadius: "10px",
            backgroundColor: "rgb(47, 147, 241)",
            width: "max-content",
            padding: "10px",
          }}
        >
          <Stack spacing={2}>
            <h4 className={loginStyles.title_login}>Login</h4>
          </Stack>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              m: 2,
              width: "max-content",
              padding: "10px",
            }}
          >
            <Stack spacing={2}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <FormControl sx={{ m: 1, width: "40ch" }} variant="filled">
                  <InputLabel htmlFor="filled-username">Username</InputLabel>
                  <FilledInput
                    sx={{ backgroundColor: "white" }}
                    id="filled-username"
                    type="text"
                    label="Username"
                    endAdornment={
                      <AccountCircle sx={{ color: "gray", ml: 1 }} />
                    }
                  />
                </FormControl>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <FormControl sx={{ m: 1, width: "40ch" }} variant="filled">
                  <InputLabel htmlFor="outlined-adornment-password">
                    Password
                  </InputLabel>
                  <FilledInput
                    sx={{ backgroundColor: "white" }}
                    id="filled-adornment-password"
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label={
                            showPassword
                              ? "hide the password"
                              : "display the password"
                          }
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          onMouseUp={handleMouseUpPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                </FormControl>
              </Box>

              <Box sx={{display:'flex',justifyContent:'center'}}>
                <Button
                  variant="outlined"
                  sx={{
                    color: "#fff",
                    borderColor: "#fff",
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                      borderColor: "#fff",
                    },
                  }}
                >
                  Login
                </Button>
              </Box>
            </Stack>
          </Box>
        </Box>
      </section>
    </>
  );
}
