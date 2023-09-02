import { SagaIterator } from "redux-saga";
import { put, takeEvery } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";

import { DataGenerator } from "../components/data-gererator";
import { GeneralActions } from "./actions";

function* loadStateFeed({ payload }: PayloadAction<{ skip: number }>): SagaIterator {
  try {
    const feed = DataGenerator.loadEuState(10, payload);
    yield put(GeneralActions.loadStateFeedSuccess(feed));
  } catch (exception) {
    console.error(exception);
  }
}

export function* GeneralSaga(): SagaIterator {
  yield takeEvery(GeneralActions.loadStateFeedRequest, loadStateFeed);
}
