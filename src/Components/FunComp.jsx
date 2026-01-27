import React from "react";
import App from "../App";
// component name and file name shd be same
// function FunComp(props){
//     // const {course, duration} = props for class component 
//      console.log(props)
//      console.log(props.courseDetails.course)
//     return (
//         <>
//         {/* <h4>course :{course}</h4>
//         <h4>course : {duration}</h4> */}
//         <h2>Function Component</h2>
//         <h6>Hello</h6>
//          <h3>{props.courseDetails.course}</h3>
//         <h3>{props.courseDetails.duration}</h3> 
//         </>
//         )
        function FunComp({courseDetails:{course,duration}}){
    // const {course, duration} = props for class component 
     
    return (
        <>
        {/* <h4>course :{course}</h4>
        <h4>course : {duration}</h4> */}
        <h2>Function Component</h2>
        <h6>Hello</h6>
         <h4>{course}</h4>
         <h5>{duration}</h5>
        </>
        )
   
   }
export default FunComp