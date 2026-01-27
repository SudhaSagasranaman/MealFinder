import React, { Component } from "react";

class Assignment1 extends Component {
     constructor() { super() }
     state = {
          backgroundColor: "red"

     }
     changeColor = () => {

          if (this.state.backgroundColor === "red")
               this.setState({ backgroundColor: 'blue' });
          else
               this.setState({ backgroundColor: "red" });
     }

render(){
     return (
          <>
               <button style={{ backgroundColor: this.state.backgroundColor
                     , width : "100px" ,height :"35px"}} onClick={this.changeColor}></button>

          </>

     )
}
    
}



/* Question 2 */
class StatusButton extends Component {
  render() {
    let color;

    if (this.props.status === "success") color = "green";
    else if (this.props.status === "error") color = "red";
    else if (this.props.status === "warning") color = "orange";

    return (
      <button className = "btn mt-5 me-2 "style={{ backgroundColor: color }}>
        {this.props.status}
      </button>
    );
  }
}

export { Assignment1, StatusButton };
