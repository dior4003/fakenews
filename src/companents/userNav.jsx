import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import MyInput from './ui/input'
import "../companents/css/style.css"
import { useContext } from "react";
import { AuthContext } from "./hooks/context/myContext";


export default function NavbarProfile(){
    const [sub , setSub]=useState(false)
    const {isLogin , setIsLogin}=useContext(AuthContext)
    return(
       
        <header className="p-3 mb-3 border-bottom ">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <Link to="/" className="align-items-center text-white my-2 my-lg-0 me-lg-auto  text-decoration-none">
                        <h1><i className="bi bi-safe2-fill  "></i></h1><h3 className="">SKT</h3>
                    </Link>

                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                    <li>
                        <Link to="/" className="nav-link text-secondary text-xxl text-secondary">
                            <span className="btn">Home</span>
                        </Link>
                        </li>
                        <li>
                        <Link to="/posts" className="nav-link text-secondary text-xxl text-dark">
                           <span className="btn">New edit</span>
                        </Link>
                        </li>
                        <li>
                        <Link to="/about" className="nav-link text-secondary text-xxl text-dark">
                           <span className="btn">About</span>
                        </Link>
                        </li>
                        <li>
                        <Link to="/err" className="nav-link text-secondary text-xxl text-white">
                            <span className="btn">My post</span>
                        </Link>
                        </li>
                        
                    </ul>

                    <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                    <MyInput type="search" className="form-control" placeholder="Qidirmoq..." />
                    </form>

                    <div className="dropdown text-end">
                        <a onClick={()=> setSub(!sub)} className="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false" >
                            <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle"/>
                        </a>
                        {sub 
                        ?<ul className="drop text-small" aria-labelledby="dropdownUser1" >
                            <li className="list-group-item"><Link className="dropdown-item" to="#">Yangi loyiha...</Link></li>
                            <li className="list-group-item"><Link className="dropdown-item" to="#">Sozlamalar</Link></li>
                            <li className="list-group-item"><Link className="dropdown-item" to="#">Profil</Link></li>
                            <li className="list-group-item dropdown-divider"></li>
                            <li className="list-group-item"><Link 
                            onClick={()=>setIsLogin(false)} 
                            className="dropdown-item" to="#">Chiqish</Link></li>
                        </ul>
                        :null}
                        
                    </div>
                </div>
            </div>
        </header>
    )
}