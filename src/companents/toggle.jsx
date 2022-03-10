import { useState } from "react"


export default function toggle(){
    const [toggle , setToggle]=useState(false)
    return (
        <>
            <button onClick={()=>{setToggle(!toggle)}} className="btn btn-dark">Toggle btn</button>
            {toggle 
      ? <p>Lorem ipsum dolor sit amet.</p>
    :null
    }
        </>
    )
}