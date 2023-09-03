import { useSelector, shallowEqual } from "react-redux";

import { ReduxState } from "../../redux/interfaces";

export function useReduxSelector<T>(selector: (state: ReduxState) => T): T {
  return useSelector(selector, shallowEqual);
}
