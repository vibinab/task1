import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  import { SiginIn } from "./pages/SiginIn";
  import { SignUp } from "./pages/SignUp";
  import { Home } from "./component/Home";
  import App from "./App";

  export const router= createBrowserRouter([ 
    {
        path:"/",
        element:<SignUp />
    }, 
    {
        path:"/Signin",
        element:<SiginIn />
    }, 
    {
        path:"/home",
        element:<App />
    }
  ])