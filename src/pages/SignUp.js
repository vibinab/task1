import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { FormControl, FormLabel, Button, Typography } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import { auth,provider } from "../config/firebase";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import { Outlet, Link } from "react-router-dom";
import "./SignUp.css";
import Alert from '@mui/material/Alert';

export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorStatus, seterrorStatus]=useState(false)
  const [errorMsg,seterrorMsg]= useState("")
  const [successStatus, setsuccessStatus]=useState(false)

  function emailHandler(e) {
    setEmail(e.target.value);
  }

  function passwordHandler(e) {
    setPassword(e.target.value);
  }

  const  submitHandler=async(e)=> {
    e.preventDefault();
    const data = {
      email: email,
      password: password,
    };
    console.log(data);
    try {
        const res= await createUserWithEmailAndPassword(auth,email,password)
        console.log(res)
        seterrorStatus(false)
        setsuccessStatus(true)
    }
    catch(err){
        console.log(err.code)
        // const {error}= err.response.data
        seterrorStatus(true)
        // seterrorMsg(error.message)
        // console.log(error.message)
    }
  }
  return (
    <>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{ height: "100vh", width: "100vw" }}
      >
        <FormControl
          style={{
            borderRadius: "2%",
            padding: "2rem",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          }}
        >
          <form onSubmit={submitHandler}>
            <Grid item>
                <Typography align="center" variant="h5" color="blue">Sign Up</Typography>
            </Grid>
            <Grid item>
              <TextField
                type="email"
                id="standard-email"
                label="Email"
                variant="standard"
                onChange={emailHandler}
              />
            </Grid>
            <Grid item>
              <TextField
                id="standard-password"
                label="Password"
                type="password"
                variant="standard"
                onChange={passwordHandler}
              />
            </Grid>

            <Grid item sx={{ textAlign: "center", marginTop: "1rem" }}>
              <Button variant="contained" type="submit" size="small">
                Sign Up
              </Button>
            </Grid>

            <Grid item sx={{marginTop:"1rem"}}>
                Already have account? <Link to="/signin" className="navlink">Login </Link>
            </Grid>

            <Grid item>
                { errorStatus && <Alert> Invalid Username or password</Alert>}
                { successStatus && <Alert>Account successfully created</Alert>}
            </Grid>
          </form>
        </FormControl>
      </Grid>
    </>
  );
};
