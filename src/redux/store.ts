import { configureStore, Store } from "@reduxjs/toolkit";
import { createWrapper, MakeStore } from "next-redux-wrapper";
import createSagaMiddleware from "redux-saga";

import { RootReducer } from "./redux";
import { RootSaga } from "./saga";
import { ReduxState } from "./interfaces";

// export const ReduxStore = configureStore({
//   //   reducer: counterSlice.reducer,
// });

export const makeStore: MakeStore<any> = () => {
  const middleware = [];

  // 1: Create the middleware
  const sagaMiddleware = createSagaMiddleware();
  middleware.push(sagaMiddleware);

  // 2: Add an extra parameter for applying middleware:
  const store = configureStore({ reducer: RootReducer, middleware: middleware });

  // 3: Run your sagas on server
  (store as any).sagaTask = sagaMiddleware.run(RootSaga);

  // 4: now return the store:
  return store;
};

export const ReduxWrapper = createWrapper<Store<ReduxState>>(makeStore, {
  debug: false,
});
