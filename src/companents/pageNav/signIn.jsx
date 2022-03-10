
import React from "react";
import MyInput from "../ui/input";


export default function SignNow(props){

    return (
        <>
             <main className="form-signin  d-flex justify-content-center">
                <form>
                <h1 className="h3 mb-3 fw-normal">Iltimos, ro`yhatdan o`tish uchun  malumotlarni to`ldiring</h1>
                <span>Name</span>
                <div className="form-floating">
                <MyInput 
                type="text"
                className="form-control" 
                placeholder="Your name"
                required
                />
                
                </div>
                <span>SureName</span>
                <div className="form-floating">
                <MyInput 
                type="text"
                className="form-control" 
                placeholder="Sure Name "
                required
                />
                
                </div>
                <span><i>@</i>UserName</span>
                <div className="form-floating">
                <MyInput 
                type="text"
                className="form-control" 
                placeholder="@userName"
                required
                />
                
                </div>
                <span>Password</span>
                <div className="form-floating">
                <MyInput 
                type="password" 
                className="form-control" 
                required
                placeholder="Parol"/>
                
                </div>
                <span>Password confirm</span>
                <div className="form-floating">
                <MyInput 
                type="password" 
                className="form-control" 
                required
                placeholder="Parol"/>
                
                </div>

                <div className="checkbox mb-3">
                <span>
                    <input type="checkbox" value="remember-me"/>By clicking the "Sign up for free" button, you are creating an account, and agree to <strong>Terms of Service and Privacy Policy</strong></span>
                </div>
                <button className="w-100 btn btn-lg btn-primary" type="submit">Register</button>
                <p className="mt-5 mb-3 text-muted">© by_dior 2022</p>
            </form>
        </main>
        </>
    );
}
