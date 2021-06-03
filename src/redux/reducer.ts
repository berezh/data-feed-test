import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { History } from "history";
import { reducer as form } from "redux-form";

import { generalReducer } from "../units/general/redux";

export function RootReducer(history: History): any {
    return combineReducers({
        router: connectRouter(history) as any,
        form,
        general: generalReducer,
    } as any);
}
