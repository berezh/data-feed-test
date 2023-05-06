import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators, ActionCreatorsMapObject, Action } from 'redux';

export function useReduxActions<T extends ActionCreatorsMapObject<Action<any>>>(actions: T): T {
  const dispatch = useDispatch();
  return useMemo(() => {
    const a = bindActionCreators(actions, dispatch);
    return a;
  }, [actions, dispatch]);
}
