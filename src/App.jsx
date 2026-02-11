import './App.css'
import { Assignment1, StatusButton } from './Components/Assignment1'
import Assignment2 from './Components/Assignment2'
import ChildProps from './Components/Childprops'
import ClassComp from './Components/ClassComp'
import ConditionalComponent from './Components/ConditionalComponent'
import ContactUs from './Components/ContactUs'
import Counter from './Components/Counter'
import FunComp from './Components/FunComp'
import ListAndKeys from './Components/ListAndkeys'
import Parent from './Components/Parent'
import Users from './Components/Users'

function App() {
  const course1 = { course: "React", duration: "3 months" }
  const names = ["Jack", "Sudha"]
  return (

    <>
      <h1>Welcome to ReactJs</h1>
      {/* <FunComp course = "ReactJs"  duration = "3 months"/> */}
      {/* <FunComp courseDetails = {course1}/>
      <ClassComp course = "NextJs" duration = "15 days"/>
      <ChildProps name = {names}>Peter</ChildProps>
      <Counter/> */}
      {/* <Assignment1 />
      <StatusButton status="success" />
      <StatusButton status="error" /> */}
      {/* <ListAndKeys/> */}
      {/* <ConditionalComponent/> */}
       {/* <Users/> */}
        {/* <ContactUs/>  */}
       
        <Assignment2/>  
       {/* <Parent/> */}
    </>
  )
}
export default App
