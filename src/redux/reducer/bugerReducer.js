import { CHANGE_AMOUNT } from "../types/BugerTypes";

const stateBuger = {
  bugerState: [
    { name: "salad", amount: 1, price: 10 },
    { name: "cheese", amount: 1, price: 20 },
    { name: "beef", amount: 1, price: 55 },
  ],
};

const bugerReducer = (state = stateBuger, action) => {
  switch (action.type) {
    case CHANGE_AMOUNT:
      let newBugerState = state.bugerState.map((item, index) => {
        if (item.name === action.item.name) {
          if (action.num === 1) {
            item.amount++;
          } else if (action.num === -1) {
            if (item.amount <= 1) {
              alert("SỐ LƯỢNG TỐI THIẾU BẰNG 1");
              return { ...item };
            } else {
              item.amount--;
            }
          }
          return { ...item };
        } else {
          return { ...item };
        }
      });
      state.bugerState = [...newBugerState];
      return { ...state };

    default:
      return { ...state };
  }
};

export default bugerReducer;
