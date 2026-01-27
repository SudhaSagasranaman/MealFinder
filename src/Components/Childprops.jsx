import React from "react";
const ChildProps = ({children, name})=>{
   // console.log(props)
   console.log(children)
   console.log(name)
    return(
        <div>ChildProps
        {children}
        {name[0]}
        {name[1]}</div>

        )
 }
export default ChildProps