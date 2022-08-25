import { useReducer } from "react";
import { ESTADO_INICIAL } from "../api/constantes";
import { reducer } from "./reducer";

export const useAppStore = (initialState) => {
  const [state, dispatch] = useReducer(reducer, ESTADO_INICIAL);
  const thunkDispatch = (action) => {
    if (typeof action === "function") {
      return action(thunkDispatch, () => state);
    }
    return dispatch(action);
  };
  return [state, thunkDispatch];
};
