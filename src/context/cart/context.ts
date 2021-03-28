import { createContext } from "react";
import { CartInterface } from "./model";


const CartContext = createContext({} as CartInterface);

export default CartContext;