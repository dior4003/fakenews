import React from 'react'

const MyInput = React.forwardRef((props, ref)=>{


    return(
        <input {...props} ref={ref} />
    )
})
export default MyInput