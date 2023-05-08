import { createAction, PrepareAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

import { ReduxState } from "../interfaces";

export const hydrateAction = createAction<ReduxState>(HYDRATE);

export const basicReduxAction = (unitName: string) => {
  return {
    action: <T>(name: string) => createAction<T>(`@${unitName}/${name}`),
    prepared: <T, PA extends PrepareAction<T> = any>(name: string, prepareAction: PA) => createAction(`@${unitName}/${name}`, prepareAction),
    empty: (name: string) => createAction(`@${unitName}/${name}`, () => ({ payload: {} })),
  };
};
