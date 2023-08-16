import { SagaIterator } from "redux-saga";
import { put, debounce } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";

import { DataGenerator } from "../components/data-gererator";
import { GeneralActions } from "./actions";

function* loadStateFeed({ payload }: PayloadAction): SagaIterator {
  try {
    const feed = DataGenerator.loadEuState(10, payload);
    yield put(GeneralActions.loadStateFeedSuccess(feed));
  } catch (exception) {
    console.error(exception);
  }
}

export function* generalSaga(): SagaIterator {
  yield debounce(200, GeneralActions.loadStateFeedRequest, loadStateFeed);
}
