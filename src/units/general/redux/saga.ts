import { SagaIterator } from 'redux-saga';
import { takeLatest, put } from 'redux-saga/effects';
import { GeneralActionTypes } from './types';
import { ActionWith } from '../../../redux/interfaces';
import { DataGenerator } from '../components/data-gererator';
import { GeneralActions } from './actions';

function* loadStateFeed({ payload }: ActionWith): SagaIterator {
    try {
        const feed = DataGenerator.loadEuState(5, payload);
        yield put(GeneralActions.loadStateFeedSuccess(feed));
    } catch (exception) {
        console.log(exception);
    }
}

export function* generalSaga(): SagaIterator {
    yield takeLatest(GeneralActionTypes.LOAD_STATE_FEED_REQUEST, loadStateFeed);
}
