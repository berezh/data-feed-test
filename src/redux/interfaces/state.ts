import { FormStateMap } from 'redux-form';

import { GeneralState } from '../../units/general/interfaces';

interface MutableState {
    form: Readonly<FormStateMap>;
    general: Readonly<GeneralState>;
}

export type ReduxState = Readonly<MutableState>;

export interface LocalStorageState {
    /** test */
}

export interface LocalStorageVersionState extends LocalStorageState {
    version: number;
}
