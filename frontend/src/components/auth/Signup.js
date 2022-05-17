import {
  Container,
  Input,
  Paper,
  Box,
  InputLabel,
  Typography,
  Button,
  ButtonBase,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { signIn, signUp } from "../../actions/user";
import classes from "./SignUp.module.css";

const Signup = () => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    contact: "",
    password: "",
  });

  const [Signin, setSignin] = useState(false);

  const submissionHandler = (e) => {
    e.preventDefault();
    console.log(userData);
    if (Signin) {
      dispatch(signIn({ email: userData.email, password: userData.password }));
    } else {
      dispatch(signUp(userData));
    }
  };

  const onChangeHandler = (e) => {
    setUserData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  if (!Signin) {
    return (
      <Container>
        <Paper variant="outlined">
          <form className={classes.form} action="" onSubmit={submissionHandler}>
            <Box sx={{ width: 0.8, marginBottom: 2 }}>
              <InputLabel htmlFor="name" sx={{ display: "inline" }}>
                <Typography variant="h5" component="span">
                  Name:
                </Typography>
              </InputLabel>
              <Input
                fullWidth
                type="text"
                name="name"
                id="name"
                value={userData.name}
                onChange={onChangeHandler}
              />
            </Box>
            <Box sx={{ width: 0.8, marginBottom: 2 }}>
              <InputLabel htmlFor="contact" sx={{ display: "inline" }}>
                <Typography variant="h5" component="span">
                  Contact:
                </Typography>
              </InputLabel>
              <Input
                fullWidth
                type="number"
                name="contact"
                id="contact"
                value={userData.contact}
                onChange={onChangeHandler}
              />
            </Box>
            <Box sx={{ width: 0.8, marginBottom: 2 }}>
              <InputLabel htmlFor="email" sx={{ display: "inline" }}>
                <Typography variant="h5" component="span">
                  Email:
                </Typography>
              </InputLabel>
              <Input
                fullWidth
                type="email"
                name="email"
                id="email"
                value={userData.email}
                onChange={onChangeHandler}
              />
            </Box>
            <Box sx={{ width: 0.8, marginBottom: 2 }}>
              <InputLabel htmlFor="password">
                <Typography variant="h5" component="span">
                  password:
                </Typography>
              </InputLabel>
              <Input
                fullWidth
                type="password"
                id="password"
                name="password"
                value={userData.password}
                onChange={onChangeHandler}
              />
            </Box>
            <Button variant="contained" type="submit">
              Submit
            </Button>
            <ButtonBase
              variant="contained"
              type="submit"
              sx={{ marginLeft: 2 }}
              onClick={() => {
                setSignin(!Signin);
              }}
            >
              Already have an Account? SignIn!!
            </ButtonBase>
          </form>
        </Paper>
      </Container>
    );
  }
  if (Signin) {
    return (
      <Container>
        <Paper variant="outlined">
          <form className={classes.form} action="" onSubmit={submissionHandler}>
            <Box sx={{ width: 0.8, marginBottom: 2 }}>
              <InputLabel htmlFor="email" sx={{ display: "inline" }}>
                <Typography variant="h5" component="span">
                  Email:
                </Typography>
              </InputLabel>
              <Input
                fullWidth
                type="email"
                name="email"
                id="email"
                value={userData.email}
                onChange={onChangeHandler}
              />
            </Box>
            <Box sx={{ width: 0.8, marginBottom: 2 }}>
              <InputLabel htmlFor="password">
                <Typography variant="h5" component="span">
                  password:
                </Typography>
              </InputLabel>
              <Input
                fullWidth
                type="password"
                id="password"
                name="password"
                value={userData.password}
                onChange={onChangeHandler}
              />
            </Box>
            <Button variant="contained" type="submit">
              Submit
            </Button>
            <ButtonBase
              variant="contained"
              type="submit"
              sx={{ marginLeft: 2 }}
              onClick={() => {
                setSignin(!Signin);
              }}
            >
              Sign up?
            </ButtonBase>
          </form>
        </Paper>
      </Container>
    );
  }
};

export default Signup;
