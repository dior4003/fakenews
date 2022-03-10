import React from "react"
import Game from "../pageNav/game"
import SignNow from "../pageNav/signIn"
import ErrPage from "../pageNav/errorPage"
import MainPage from "../main"
import MyHome from "../home"
import Login from "../login"
import About from "../about"

export const PublicRoutes =[
    {path:"/" , element:<MyHome/> , exact:true},
    {path:"*" , element:<ErrPage/> , exact:true},
    {path:"/about" , element:<About/> , exact:true},
    {path:"news" , element:<MainPage/> , exact:true},
    {path:"/login" , element:<Login/> , exact:true},
    {path:"/sign" , element:<SignNow/> , exact:true}


];
export const PrivateRoutes=[
    {path:"/posts" , element:<MainPage/> , exact:true},
    {path:"/about" , element:<About/> , exact:true},
    {path:"*" , element:<MyHome/> , exact:true},
    {path:"/" , element:<MyHome/> , exact:true},
    // {path:"/dashboard" , element:<Dashboard/> , exact:true},

];