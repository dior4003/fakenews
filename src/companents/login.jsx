import React from "react"
import { useContext } from "react";
import { useState } from "react";
import { AdminContext, AuthContext } from "./hooks/context/myContext";
import MyInput from "./ui/input";


export default function Login(props){
    const {isLogin , setIsLogin}=useContext(AuthContext)
    const {admin , setAdmin}=useContext(AdminContext)
    const [dior , setDior]=useState(
        {email:"" , passvord:""})

    const Login= (e)=>{
        e.preventDefault()
        setIsLogin(true)
        console.log( dior)
        if(dior.email==="dior@mail.ru" && dior.passvord==="dior"){
            console.log('true')
        }else{ console.log('false')}
        localStorage.setItem('auth','true')
    }
    return(
        <main className="form-signin  d-flex justify-content-center">
            <form onSubmit={Login}>
                <h1 className="h3 mb-3 fw-normal">Iltimos, tizimga kiring</h1>

                <div className="form-floating">
                <MyInput 
                type="email"
                value={dior.email}
                onChange={e=>setDior({...dior , email: e.target.value})} 
                className="form-control" 
                placeholder="name@example.com"
                />
                
                </div>
                <div className="form-floating">
                <MyInput 
                type="password" 
                className="form-control" 
                value={dior.passvord} 
                onChange={e=>setDior({...dior , passvord: e.target.value})} 
                placeholder="Parol"/>
                </div>

                <div className="checkbox mb-3">
                <span>
                    <input type="checkbox" value="remember-me"/>Meni eslaysizmi</span>
                </div>
                <button className="w-100 btn btn-lg btn-primary" type="submit">tizimga kirish</button>
                <p className="mt-5 mb-3 text-muted">© by_dior 2022</p>
            </form>
        </main>
    )
}