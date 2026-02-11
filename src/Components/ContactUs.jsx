import React, { Component } from "react";

class ContactUs extends Component {
  constructor() {
    super();
  }

  state = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    firstNameErr: "",
    lastNameErr: "",
    emailErr: "",
    phoneNumberErr: "",
    isSubmitted: false
  };

  changeHandler = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  submitHandler = (event) => {
    event.preventDefault();

    let firstNameErr = "";
    let lastNameErr = "";
    let emailErr = "";
    let phoneNumberErr = "";

    const nameRegex = /^[A-Za-z]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (!nameRegex.test(this.state.firstName) || this.state.firstName.length < 3) {
      firstNameErr = "First name should have at least 3 letters";
    }

    if (!nameRegex.test(this.state.lastName)) {
      lastNameErr = "Last name should contain only letters";
    }

    if (!emailRegex.test(this.state.email)) {
      emailErr = "Enter a valid email";
    }

    if (!phoneRegex.test(this.state.phoneNumber)) {
      phoneNumberErr = "Phone number must be 10 digits";
    }

    this.setState({
      firstNameErr,
      lastNameErr,
      emailErr,
      phoneNumberErr,
      isSubmitted: true
    });
  };

  render() {
    return (
      <>
        <div className="container">
          <h2>Contact us</h2>

          <div className="row">
            <div className="col-lg-4"></div>

            <div className="col-lg-4">
              <form onSubmit={this.submitHandler}>
                <input
                  type="text"
                  className={`form-control mb-1 ${
                    this.state.isSubmitted && !this.state.firstNameErr ? "is-valid" : ""
                  }`}
                  name="firstName"
                  placeholder="Enter the First name"
                  value={this.state.firstName}
                  onChange={this.changeHandler}
                />
                {this.state.firstNameErr && <h6>{this.state.firstNameErr}</h6>}

                <input
                  type="text"
                  className={`form-control mb-1 ${
                    this.state.isSubmitted && !this.state.lastNameErr ? "is-valid" : ""
                  }`}
                  name="lastName"
                  placeholder="Enter the Last name"
                  value={this.state.lastName}
                  onChange={this.changeHandler}
                />
                {this.state.lastNameErr && <h6>{this.state.lastNameErr}</h6>}

                <input
                  type="email" 
                  className={`form-control mb-1 ${
                    this.state.isSubmitted && !this.state.emailErr ? "is-valid" : ""
                  }`}
                  name="email"
                  placeholder="Enter the email"
                  value={this.state.email}
                  onChange={this.changeHandler}
                />
                {this.state.emailErr && <h6>{this.state.emailErr}</h6>}

                <input
                  type="number"
                  className={`form-control mb-1 ${
                    this.state.isSubmitted && !this.state.phoneNumberErr ? "is-valid" : ""
                  }`}
                  name="phoneNumber"
                  placeholder="Enter the contact number"
                  value={this.state.phoneNumber}
                  onChange={this.changeHandler}
                />
                {this.state.phoneNumberErr && <h6>{this.state.phoneNumberErr}</h6>}

                <button className="btn btn-primary">Submit</button>

                {this.state.isSubmitted &&
                  !this.state.firstNameErr &&
                  !this.state.lastNameErr &&
                  !this.state.emailErr &&
                  !this.state.phoneNumberErr && (
                    <div className="alert alert-success mt-2">
                      Form submitted successfully
                    </div>
                  )}
              </form>
            </div>

            <div className="col-lg-4"></div>
          </div>
        </div>
      </>
    );
  }
}

export default ContactUs;
