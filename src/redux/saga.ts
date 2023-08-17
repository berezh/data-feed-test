import { SagaIterator } from "redux-saga";
import { AnyAction } from "redux";
import { all, fork } from "redux-saga/effects";

import { GeneralSaga } from "src/units/general/redux";

// import { IntlSaga } from 'src/units/intl/redux/saga';
// import { DemoSaga } from 'src/units/demo/redux/saga';
// import { LocalSaga } from 'src/units/local/redux/saga';

export function* RootSaga(): SagaIterator {
  yield all([fork(GeneralSaga)]);
  //   yield all([fork(DemoSaga)]);
  //   yield all([fork(LocalSaga)]);
}

export const SagaHandler = {
  handleException: (exception?: { [key: string]: any }): any[] => {
    console.error(exception);
    const actions: AnyAction[] = [];
    if (exception) {
      // const { reason, message } = exception;
      // if (typeof reason === 'string') {
      //   actions.push(
      //     put(
      //       CommonActions.showToast({
      //         message: reason,
      //         intent: 'error',
      //       })
      //     )
      //   );
      // } else if (typeof message === 'string') {
      //   actions.push(
      //     put(
      //       CommonActions.showToast({
      //         message,
      //         intent: 'error',
      //       })
      //     )
      //   );
      // }
    }

    return actions;
  },
};
