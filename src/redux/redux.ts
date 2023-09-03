import { combineReducers, Reducer } from "redux";

import { ReduxState } from "./interfaces";
import { generalReducer } from "../units/general/redux";

export const RootReducer: Reducer<ReduxState> = combineReducers({
  general: generalReducer,
}) as any;
