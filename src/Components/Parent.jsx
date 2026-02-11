import React, { Component } from "react";
import Theme from "./Theme";

class Parent extends Component {
  state = {
    isDark: false
  };

  toggleTheme = () => {
    this.setState(prevState => ({
      isDark: !prevState.isDark
    }));
  };

  render() {
    return (
      <div className="container mt-4">
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            checked={this.state.isDark}
            onChange={this.toggleTheme}
          />
          <label className="form-check-label">
            {this.state.isDark ? "Dark Mode" : "Light Mode"}
          </label>
        </div>

        <Theme isDark={this.state.isDark} />
      </div>
    );
  }
}

export default Parent;
