import * as appAction from "./actions";
import { AppInterface } from "./model";

export default (state: AppInterface, action: any) => {
  switch (action.type) {
    case appAction.CART_PREVIEW_TOGGLE:
      return {
        ...state,
        cartPreviewIsVisible: !state.cartPreviewIsVisible
      };
    
    default:
      return state;
  }
};
