import React from "react";
import { Link } from "react-router-dom";


export default function Navigatsiya(){

    return(
        <header>
        <div className="px-3 py-2 bg-dark text-white">
        <div className="container">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <Link to="/" className="align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
                <h1><i className="bi bi-safe2-fill "></i></h1><h3>SKT</h3>
            </Link>

            <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                <li>
                <Link to="/" className="nav-link text-secondary">
                    Home
                </Link>
                </li>
                <li>
                <Link to="/news" className="nav-link text-white">
                    News
                </Link>
                </li>
                <li>
                <Link to="/about" className="nav-link text-white">
                    About
                </Link>
                </li>
                
            </ul>
            </div>
        </div>
        </div>
        <div className="px-3 py-2 border-bottom mb-3">
            <div className="container d-flex flex-wrap justify-content-center">
                <form className="col-12 col-lg-auto mb-2 mb-lg-0 me-lg-auto">
                <input type="search" className="form-control" placeholder="Search..." aria-label="Search"></input>
                </form>

                <div className="text-end">
                    <Link to="/login"><button type="button" className="btn btn-light text-dark me-2">Login</button></Link>
                    <Link to="/sign"><button className="btn btn-outline-primary">Sign-up</button></Link>
                </div>
            </div>
        </div>
        </header>
    )
}