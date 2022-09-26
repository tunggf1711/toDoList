import { CHANGE_AMOUNT } from "../types/BugerTypes";

export const changeAmountAction = (item, num) => {
  return {
    type: CHANGE_AMOUNT,
    item,
    num,
  };
};
