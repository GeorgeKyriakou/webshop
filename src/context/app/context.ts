import { createContext } from "react";
import { AppInterface } from "./model";


const AppContext = createContext({} as AppInterface);

export default AppContext;