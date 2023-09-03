import { SagaIterator } from "redux-saga";
import { put, takeEvery } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";

import { DataGenerator } from "../components/data-gererator";
import { GeneralActions } from "./actions";
import { PAGE_ITEMS } from "src/consts/feed";
import { EuFeedParams } from "src/lib/interfaces";

function* loadStateFeed({ payload }: PayloadAction<EuFeedParams>): SagaIterator {
  try {
    const feed = DataGenerator.loadEuState(PAGE_ITEMS, payload);
    yield put(GeneralActions.loadStateFeedSuccess(feed));
  } catch (exception) {
    console.error(exception);
  }
}

export function* GeneralSaga(): SagaIterator {
  yield takeEvery(GeneralActions.loadStateFeedRequest, loadStateFeed);
}
