import { createHashHistory } from "history";
import { routerMiddleware } from "connected-react-router";
import { applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { createLocalStorageStore } from "redux-sputnik";
import { composeWithDevTools } from "redux-devtools-extension";

import { RootSaga } from "./saga";
import { RootReducer } from "./reducer";
import { ReduxState } from "./interfaces";

const appHistory = createHashHistory();
const sagaMiddleware = createSagaMiddleware();

const middleware = composeWithDevTools(applyMiddleware(routerMiddleware(appHistory), sagaMiddleware));

// mount it on the Store
const store = createLocalStorageStore<ReduxState>(
  {
    key: "data-feed",
    version: 1,
    filter: ({}: ReduxState) => {
      return {};
    },
  },
  RootReducer(appHistory),
  middleware as any
);

// then run the saga
sagaMiddleware.run(RootSaga);

export { appHistory, store };
