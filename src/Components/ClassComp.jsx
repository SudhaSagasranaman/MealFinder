import React,{Component} from "react";
import "../Stylings/style.css";
import moduleSty from "../Stylings/compMdl.module.css"
class ClassComp extends Component{

    constructor() {
      super()
    }
    render() {
        const styles = {
            color: "blue",
             backgroundColor:"yellow"
        }
        console.log(this.props)
        const {course,duration} = this.props
        
        return (
        <>
        <h2 style = {{color:"red", backgroundColor: "orange"}}>Class Component</h2>
        <h4 style = {styles}>{course}</h4>
        <h6 className = "courseEle">{duration}</h6>
        <h4 className = {moduleSty.hello}>hello all</h4>
        </>
        )
    }

}
export default ClassComp
