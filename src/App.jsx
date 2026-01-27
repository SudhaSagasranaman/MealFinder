import './App.css'
import { Assignment1, StatusButton } from './Components/Assignment1'
import ChildProps from './Components/Childprops'
import ClassComp from './Components/ClassComp'
import Counter from './Components/Counter'
import FunComp from './Components/FunComp'

function App() {
  const course1 = { course: "React", duration: "3 months" }
  const names = ["Jack", "Sudha"]
  return (

    <>
      <h1>welcome to Js</h1>
      {/* <FunComp course = "ReactJs"  duration = "3 months"/> */}
      {/* <FunComp courseDetails = {course1}/>
      <ClassComp course = "NextJs" duration = "15 days"/>
      <ChildProps name = {names}>Peter</ChildProps>
      <Counter/> */}
      <Assignment1 />
      <StatusButton status="success" />
      <StatusButton status="error" />

    </>
  )
}
export default App
