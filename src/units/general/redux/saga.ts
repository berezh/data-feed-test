import { SagaIterator } from 'redux-saga';
import { put, takeLatest } from 'redux-saga/effects';

import { ActionWith } from '../../../redux/interfaces';
import { DataGenerator } from '../components/data-gererator';
import { GeneralActions } from './actions';
import { GeneralActionTypes } from './types';

function* loadStateFeed({ payload }: ActionWith): SagaIterator {
    try {
        const feed = DataGenerator.loadEuState(5, payload);
        yield put(GeneralActions.loadStateFeedSuccess(feed));
    } catch (exception) {
        console.error(exception);
    }
}

export function* generalSaga(): SagaIterator {
    yield takeLatest(GeneralActionTypes.LOAD_STATE_FEED_REQUEST, loadStateFeed);
}
