import { useReducer } from "react";

import cartReducer from "./reducer";
import * as appAction from "./actions";
import { AppInterface } from "./model";
import AppContext from "./context";

const AppState = (props: any) => {
  const initialState: AppInterface = {
    cartPreviewIsVisible: false,
    toggleCartPreview: () =>
      dispatch({
        type: appAction.CART_PREVIEW_TOGGLE,
      }),
  };

  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <AppContext.Provider
      value={{
        cartPreviewIsVisible: state.cartPreviewIsVisible,
        toggleCartPreview: state.toggleCartPreview,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
