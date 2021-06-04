import { Feed } from '../../../lib/interfaces';
import { EuState } from '../components/data-gererator';

export interface GeneralState {
    stateFeed: Feed<EuState>;
}
