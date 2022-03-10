import React from "react";
import {BrowserRouter} from "react-router-dom";
import { useState } from "react";
import FooterDiv from "./companents/footer";
import { AdminContext, AuthContext } from "./companents/hooks/context/myContext";
import RouterApp from "./companents/route/routers";
import { useEffect } from "react";
import NavbarProfile from "./companents/userNav";
import Navigatsiya from "./companents/myNavbar"
import { useContext } from "react";

export default function App(){
    const [isLogin , setIsLogin] =useState(false)
    const {admin , setAdmin}=useContext(AdminContext)
    useEffect(function () {
        // if (localStorage.getItem('auth')) {
          setIsLogin(false);
        
      },[])
      
    return(
      <AuthContext.Provider value={{isLogin , setIsLogin}}>
        <BrowserRouter>
        {isLogin
          ? 
            admin 
            ? null
            :<NavbarProfile/>
          :<Navigatsiya/>
        }
          
          <RouterApp/>
          <FooterDiv/>
        </BrowserRouter>
  
    </AuthContext.Provider>
  )
      
}