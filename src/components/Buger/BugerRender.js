import React, { Component } from "react";
import { connect } from "react-redux";

class BugerRender extends Component {
  renderBugerState = () => {
    return this.props.bugerState.map((item, index) => {
      let arrJsx = [];
      for (let i = 0; i < item.amount; i++) {
        arrJsx.push(
          <div className={`${item.name}`} key={`${i}${index}`}></div>
        );
      }
      return arrJsx;
    });
  };

  render() {
    return (
      <div>
        <h2 className="text-center text-success">Bài tập buger cybersoft</h2>
        <h3 className="text-center text-danger">Bánh buger của bạn</h3>
        <div className="buger">
          <div className="breadTop"></div>
          {this.renderBugerState()}
          <div className="breadBottom"></div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    bugerState: state.bugerReducer.bugerState,
  };
};

export default connect(mapStateToProps)(BugerRender);
