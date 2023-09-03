import { GeneralState } from "../units/general/interfaces";

interface MutableState {
  general: Readonly<GeneralState>;
}

export type ReduxState = Readonly<MutableState>;
