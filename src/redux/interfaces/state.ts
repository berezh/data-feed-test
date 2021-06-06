import { FormStateMap } from 'redux-form';

import { GeneralState } from '../../units/general/interfaces';

interface MutableState {
    form: Readonly<FormStateMap>;
    general: Readonly<GeneralState>;
}

export type ReduxState = Readonly<MutableState>;
