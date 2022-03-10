import { useState } from 'react'


export default function countdiv(){
    const [count, setCount] = useState(0)
    function incr(){
        setCount(count + 1)
    }
    function decr(){
        setCount(count - 1)
    }
    return(
        <>
            <h4>count: {count}</h4>
            <button onClick={incr} className="btn btn-success">incr</button>
            <button onClick={decr} className="btn btn-danger">decr</button>
        </>
    )
}