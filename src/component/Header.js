import React from 'react'
import {  Button } from "@mui/material";
import "./Header.css"
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
import { useNavigate } from 'react-router-dom';


export const Header = () => {
    const Navigate=useNavigate()
    const logouthandler=()=> {
        signOut(auth)
        Navigate("/")

    }
  return (
    <>
    <div className='mainnavbar'>
        <div>
            <ul className='navcontent'>
                <li>Home </li>
                <li>About </li>
                <li>Contact</li>
            </ul>
        </div>
        <div className='subnavbar'>
            <Button variant="contained" size="small" onClick={logouthandler}>Logout</Button>

        </div>


    </div>
    
    </>
  )
}
