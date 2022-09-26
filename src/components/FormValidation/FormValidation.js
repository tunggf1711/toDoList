import React, { Component } from "react";
import Swal from "sweetalert2";

export default class FormValidation extends Component {
  state = {
    value: {
      firstName: "",
      lastName: "",
      fullName: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
    error: {
      firstName: "",
      lastName: "",
      fullName: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
  };

  resetState = () => {
    this.setState({
      value: {
        firstName: "",
        lastName: "",
        fullName: "",
        email: "",
        password: "",
        passwordConfirm: "",
      },
      error: {
        firstName: "",
        lastName: "",
        fullName: "",
        email: "",
        password: "",
        passwordConfirm: "",
      },
    });
  };

  handleChane = (e) => {
    let { name, value, type } = e.target;
    let objValue = { ...this.state.value, [name]: value };
    let objError = { ...this.state.error };
    if (objValue[name].trim() === "") {
      objError[name] = name + " is required";
    } else {
      objError[name] = "";
    }

    if (type === "email") {
      if (objValue.email !== "") {
        let regExEmail =
          /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        console.log(regExEmail.test(objValue[name]));
        if (!regExEmail.test(objValue[name])) {
          objError[name] = name + " is invalid";
        } else {
          objError[name] = "";
        }
      }
    }

    if (name === "passwordConfirm") {
      if (objValue.passwordConfirm !== "") {
        if (objValue.password.trim() !== objValue.passwordConfirm.trim()) {
          objError.passwordConfirm = name + " doesn't match password";
        } else {
          objError.passwordConfirm = "";
        }
      }
    }

    this.setState({
      value: objValue,
      error: objError,
    });
  };

  handleSubmit = (e) => {
    let successText = "";
    let errorText = "";
    e.preventDefault();
    let { value, error } = this.state;
    let valid = true;
    for (let key in value) {
      if (value[key] === "") {
        valid = false;
      }
    }
    for (let key in error) {
      if (error[key] !== "") {
        valid = false;
      }
    }

    if (valid) {
      for (let key in value) {
        if (key === "password" || key === "passwordConfirm") {
          continue;
        }
        successText += `<div class="mb-1"><span>${key} : </span><span class="text-success">${value[key]}</span></div>`;
      }
      Swal.fire({
        title: "Đăng Ký Thành Công",
        html: successText,
        icon: "success",
        confirmButtonText: "Đồng Ý",
      });
      this.resetState();
    } else {
      for (let key in error) {
        if (error[key] !== "") {
          errorText += `<div class="mb-1"><span>${key}</span><span class="text-danger">${error[key]}</span></div>`;
        }
      }
      Swal.fire({
        title: "Thất Bại",
        html: errorText,
        icon: "error",
        confirmButtonText: "Đồng Ý",
      });
    }
  };

  render() {
    return (
      <form
        onSubmit={(event) => {
          this.handleSubmit(event);
        }}
        className="w-50 mt-5 mx-auto p-4"
      >
        <h2 className="text text-center">Form Validation</h2>
        <div className="row">
          <div className="col-6">
            <div className="mb-3">
              <label htmlFor="firstName" className="form-label">
                firstName
              </label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                name="firstName"
                onChange={(event) => this.handleChane(event)}
                onBlur={(event) => this.handleChane(event)}
                value={this.state.value.firstName}
              />
              <span className="text text-danger">
                {this.state.error.firstName}
              </span>
            </div>
          </div>
          <div className="col-6">
            <div className="mb-3">
              <label htmlFor="lastName" className="form-label">
                lastName
              </label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                name="lastName"
                onChange={(event) => this.handleChane(event)}
                onBlur={(event) => this.handleChane(event)}
                value={this.state.value.lastName}
              />
              <span className="text text-danger">
                {this.state.error.lastName}
              </span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="mb-3">
              <label htmlFor="fullName" className="form-label">
                fullName
              </label>
              <input
                type="text"
                className="form-control"
                id="fullName"
                name="fullName"
                onChange={(event) => this.handleChane(event)}
                onBlur={(event) => this.handleChane(event)}
                value={this.state.value.fullName}
              />
              <span className="text text-danger">
                {this.state.error.fullName}
              </span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                onChange={(event) => this.handleChane(event)}
                onBlur={(event) => this.handleChane(event)}
                value={this.state.value.email}
              />
              <span className="text text-danger">{this.state.error.email}</span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                onChange={(event) => this.handleChane(event)}
                onBlur={(event) => this.handleChane(event)}
                value={this.state.value.password}
              />
              <span className="text text-danger">
                {this.state.error.password}
              </span>
            </div>
          </div>
          <div className="col-6">
            <div className="mb-3">
              <label htmlFor="passwordConfirm" className="form-label">
                passwordConfirm
              </label>
              <input
                type="password"
                className="form-control"
                id="passwordConfirm"
                name="passwordConfirm"
                onChange={(event) => this.handleChane(event)}
                onBlur={(event) => this.handleChane(event)}
                value={this.state.value.passwordConfirm}
              />
              <span className="text text-danger">
                {this.state.error.passwordConfirm}
              </span>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-12">
            <button type="submit" className="btn btn-danger w-100">
              Submit
            </button>
          </div>
        </div>
      </form>
    );
  }
}
