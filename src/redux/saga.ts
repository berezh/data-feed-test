import { fork, all } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';

import { generalSaga } from '../units/general/redux';

export function* RootSaga(): SagaIterator {
    yield all([fork(generalSaga)]);
}
