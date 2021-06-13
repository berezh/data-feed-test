import { fork, all } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';

import { generalSaga } from '../units/general/redux';
import { FeedSaga } from 'src/data-feed';

export function* RootSaga(): SagaIterator {
    yield all([fork(FeedSaga)]);
    yield all([fork(generalSaga)]);
}
