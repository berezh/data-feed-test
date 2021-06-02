import { GeneralState } from '../interfaces';
import { FeedUtil } from '../../../lib/utils/feed-util';
import { GeneralActionTypes } from './types';
import { EuState } from '../components/data-gererator';
import { Feed } from '../../../lib/interfaces';
import { monoliteFeedCombine } from '../../../lib/monolite';
import { newReducer } from 'redux-sputnik';

const initialState: GeneralState = {
    stateFeed: FeedUtil.empty(),
};

export const generalReducer = newReducer(initialState, {
    // [GeneralActionTypes.LOAD_LOCALE_TEXT_FEED_SUCCEEDED]: (state, payload: Feed<SpAdminLocaleText>) => {
    //     return monoliteFeedCombine(state, s => s.localeFeed, payload);
    // },
    [GeneralActionTypes.LOAD_STATE_FEED_SUCCESS]: (state, payload: Feed<EuState>) => {
        return monoliteFeedCombine(state, s => s.stateFeed, payload);
    },
});
