import React from 'react'
import { Link } from 'react-router-dom'
export default function FooterDiv(){

    return(
        <>
            
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <div className="col-md-4 justify-content-center d-flex align-items-center">
                
                <span className="text-muted">© By_Dior 2021 Company, Inc</span>
                </div>

                <ul className="nav col-md-4 justify-content-center list-unstyled d-flex">
                <a href="https://www.instagram.com/by_diorr/"><li className="ms-3"><i className="bi bi-instagram text-danger"></i></li></a>
                <a href="https://www.fb.com/by_diorr/" ><li className="ms-3"><i className="bi bi-facebook text-info"></i></li></a>
                <a href="https://www.t.me/by_dior"><li className="ms-3"><i className="bi bi-telegram text-info"></i></li></a>
                </ul>
            </footer>
           
           
        </>
    )
}