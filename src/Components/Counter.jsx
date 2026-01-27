
    import React, { Component } from "react";


    class Counter extends Component {
        constructor() {
            super()
            // this.state = {
            //     count:0
            // }
        }
        state = {
            count: 0,
            count1: 0,
        }
        incrementHandler = () => {
            console.log("Hello")
            this.setState({ count: this.state.count + 1 })//single time only and only access current value ... use arrow fn in setstate to access current value and update multiple times
            // only arrow fns for user defined methods ... predefined we can use normal fns
            // this.setState = ((preState) => ({ count: preState.count +1}))
        }
        decrementHandler = () => {
            this.setState({ count: this.state.count - 1 })
        }
        reset = () => {
            this.setState({ count: 0 })
        }
        render() {
            return (
                <>
                    <h2>Counter</h2>
                    <h4>{this.state.count}</h4>
                    <button className="btn btn-primary me-2" onClick={this.incrementHandler}>increment</button>
                    <button className="btn btn-danger me-2" onClick={this.decrementHandler}>decrement</button>
                    <button className="btn btn-secondary" onClick={this.reset}>Reset</button>
                </>
            )
        }
    }
    export default Counter