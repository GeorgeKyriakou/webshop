import { useReducer } from "react";

import cartReducer from "./reducer";
import * as cartAction from "./actions";
import { CartInterface } from "./model";
import CartContext from "./context";

const CartState = (props: any) => {
    const initialState: CartInterface = {
        items: [],
        updatingCart: false,
        error: false,
        cartId: "",
        addToCart: ()=> {}
      };

  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (accessToken: string) =>
    dispatch({
      type: cartAction.ADD_TO_CART_SUCCESS,
      payload: accessToken
    });


  return (
    <CartContext.Provider
      value={{
        items: state.items,
        cartId: state.cartId,
        updatingCart: state.updatingCart, 
        error: state.error,
        addToCart
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartState;