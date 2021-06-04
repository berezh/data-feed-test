import { newActionType } from "redux-sputnik";

const prefix = "general";

export const GeneralActionTypes = {
    LOAD_STATE_FEED_REQUEST: newActionType(prefix, "LOAD_STATE_FEED_REQUEST"),
    LOAD_STATE_FEED_SUCCESS: newActionType(prefix, "LOAD_STATE_FEED_SUCCESS"),
};
