import { createReducer } from "@reduxjs/toolkit";

import { GeneralState } from "../interfaces";
import { FeedUtil } from "../../../lib/utils/feed-util";
import { GeneralActions } from "./actions";

const initialState: GeneralState = {
  stateFeed: FeedUtil.empty(),
};

export const generalReducer = createReducer(initialState, builder => {
  builder.addCase(GeneralActions.loadStateFeedSuccess, (state, { payload }) => {
    state.stateFeed = FeedUtil.combine(state.stateFeed, payload);
  });
});
