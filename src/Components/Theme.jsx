import React, { Component } from "react";

class Theme extends Component {
  render() {
    const style = {
      backgroundColor: this.props.isDark ? "#212529" : "#f8f9fa",
      color: this.props.isDark ? "white" : "black",
      height: "150px",
      marginTop: "20px",
      padding: "20px"
    };

    return (
      <div style={style}>
        {this.props.isDark ? "Dark Mode " : "Light Mode "}
      </div>
    );
  }
}

export default Theme;
