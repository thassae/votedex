import { noop } from "lodash";
import { createContext } from "react";

export const DispatchContext = createContext(noop);
