import React, {useState} from 'react'
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { FormControl, FormLabel,Button,Typography } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import "./SignIn.css"
import Alert from '@mui/material/Alert';

import { auth,provider } from '../config/firebase';
import { Link,useNavigate} from "react-router-dom";
import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
  } from "firebase/auth";


export const SiginIn = () => {
    const navigate = useNavigate();
    const [email,setEmail]=useState("");
    const [password, setPassword]=useState("")
    const [errstatus, seterrStatus]=useState(false)
    const [errMsg, seterrMsg]= useState("")


    function emailHandler(e){
        setEmail(e.target.value)

    }

    function passwordHandler(e){
        setPassword(e.target.value)
    }

    const signinHandler=async(e)=>{

        e.preventDefault() 
        const data= {
            email:email,
            password:password
        }
        console.log(data)
        try {
            const res=await signInWithEmailAndPassword(auth, email, password)
            console.log(res)
            navigate("/home")

        }
        catch(err){
            console.log(err)
            seterrStatus(true)
        }

    }

    function googleHandler(){
        signInWithPopup(auth, provider).then((data)=> {
            console.log(data.user.email)
             navigate("/home")
        })
        .catch((err)=> {
            console.log(err)
        })


    }
  return (
    <>
     <Grid container 
    justifyContent="center" 
    alignItems="center" 
    sx={{height:"100vh",width:"100vw"}}>

        
        <FormControl style={{borderRadius:"2%", padding:"2rem",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
            <form onSubmit={signinHandler}>
            <Grid item>
                <Typography align="center" variant="h5" color="blue">Sign In</Typography>

</Grid>
<Grid item >
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
    variant='standard'
    onChange={passwordHandler}
    />

</Grid>

  <Grid item  sx={{textAlign:"center", marginTop:"1rem"}}>
  <Button
   variant="contained" 
   type="submit"
    size="small" >Sign In</Button>
  </Grid>

  
  


            </form>
            <Grid item sx={{textAlign:"center", marginTop:"1rem"}}>
  
    <button onClick={googleHandler}
    style={{alignItems:"center", backgroundColor: "green",color:"white",border:"None",borderRadius:"5px",padding:"0.3rem",width:"100%"}}>  
    <div style={{display:"flex",justifyContent:"center"}}>
        <div>
        <GoogleIcon />
        </div>
        <div style={{alignSelf:"center",marginLeft:"0.7rem"}}>
            <span>Sign in with Google</span>
        </div>
    </div>
    
    </button>

    
    </Grid>
    <Grid item sx={{marginTop:"0.6rem",textAlign:"center"}}>
    <p>Create account <Link to="/"  className='navlink'>Sign Up</Link> </p>
  </Grid>
  <Grid item>
    {errstatus && <Alert>Something went wrong</Alert>}
  </Grid>
        
        </FormControl>
        
  </Grid>


       
    
    </>
  )
}
