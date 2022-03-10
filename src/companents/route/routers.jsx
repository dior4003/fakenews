import React from "react";
import { Route, Routes } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../hooks/context/myContext";
import { PrivateRoutes, PublicRoutes } from "../hooks/myRouter";
import Dashboard from "../adminPage/dashboard";


export default function RouterApp(props){
    const {isLogin ,setIsLogin}=useContext(AuthContext)
    return(

            
            isLogin
                 ?
                 <Routes> 
                     {PrivateRoutes.map(item=>(
                        
                        <Route 
                            key={item}
                            path={item.path} 
                            element={item.element} 
                            exact={item.exact}
                        ></Route>
                    
                    ))}
                    <Route path="*" element={<Dashboard/>}/>
                </Routes>
                :
                <Routes> 
                    {PublicRoutes.map(item=>(
                    
                        <Route 
                            key={item}
                            path={item.path} 
                            element={item.element} 
                            exact={item.exact}
                        ></Route>
                    
                    ))}
                </Routes>
               
                
            
                    
                        
                    
                
               
        
    )
}