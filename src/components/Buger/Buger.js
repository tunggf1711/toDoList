import React, { Component } from "react";
import BugerPicker from "./BugerPicker";
import BugerRender from "./BugerRender";
import "./Buger.css";

export default class Buger extends Component {
  render() {
    return (
      <div className="container-fluid">
        <h2 className="text-center">BÀI TẬP BURGER</h2>
        <div className="row">
          <div className="col-6">
            <BugerRender />
          </div>
          <div className="col-6">
            <BugerPicker />
          </div>
        </div>
      </div>
    );
  }
}
