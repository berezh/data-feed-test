import { GeneralActionTypes } from './types';
import { Feed } from '../../../lib/interfaces';
import { EuState } from '../components/data-gererator';

import { newAction } from 'redux-sputnik';

export const GeneralActions = {
    loadStateFeedRequest: (data: any) => newAction(GeneralActionTypes.LOAD_STATE_FEED_REQUEST, data),
    loadStateFeedSuccess: (data: Feed<EuState>) => newAction(GeneralActionTypes.LOAD_STATE_FEED_REQUEST, data),
};
