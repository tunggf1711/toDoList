import React, { Component } from "react";
import { connect } from "react-redux";
import { changeAmountAction } from "../../redux/actions/BugerActions";

class BugerPicker extends Component {
  renderBugerPicker = () => {
    return this.props.bugerState.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.name}</td>
          <td>
            <button
              className="btn btn-success"
              onClick={() => this.props.changeAmount(item, 1)}
            >
              +
            </button>
            {item.amount}
            <button
              className="btn btn-danger"
              onClick={() => this.props.changeAmount(item, -1)}
            >
              -
            </button>
          </td>
          <td>{item.price}</td>
          <td>{item.amount * item.price}</td>
        </tr>
      );
    });
  };

  calTotalPrice = () => {
    return this.props.bugerState.reduce((total, item, index) => {
      return (total += item.amount * item.price);
    }, 0);
  };

  render() {
    return (
      <div>
        <h3 className="text-center text-success">Chọn thức ăn</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Thức ăn</th>
              <th></th>
              <th>Đơn giá</th>
              <th>Thành Tiền</th>
            </tr>
          </thead>
          <tbody>
            {this.renderBugerPicker()}
            <tr>
              <td>Tổng Cộng</td>
              <td>{this.calTotalPrice()}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    bugerState: state.bugerReducer.bugerState,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeAmount: (item, num) => {
      dispatch(changeAmountAction(item, num));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BugerPicker);
