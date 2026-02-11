import React, { Component } from "react";

class ConditionalComponent extends Component {


    render() {
        const money = 160
        if (money> 100)
        return <h2> go to mlm</h2>


        return (
            <>
               
               <h2>Conditional Component</h2>

              { money >= 100? <h2>go to movie </h2>:<h2> go to  tea shop</h2>}
            </>
        )
    }

}
export default ConditionalComponent

