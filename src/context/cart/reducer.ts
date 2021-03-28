import * as cartAction from "./actions";
import { CartInterface } from "./model";

export default (state: CartInterface, action: any) => {
  switch (action.type) {
    case cartAction.ADD_TO_CART:
      return {
        ...state,
        updatingCart: true,
      };
    case cartAction.ADD_TO_CART_SUCCESS:
      return {
        ...state,
        items: action.payload,
        updatingCart: false,
      };
    case cartAction.ADD_TO_CART_FAILURE:
      return {
        ...state,
        error: true,
        updatingCart: false,
      };
    case cartAction.REGISTER_NEW_CART_SUCCESS:
      return {
        ...state,
        cartId: action.payload,
      };
    case cartAction.REGISTER_NEW_CART_FAIL:
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
};
