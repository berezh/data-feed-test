import * as monolite from 'monolite';

import { Feed } from '../interfaces';
import { FeedUtil } from '../utils/feed-util';

export class MonoliteHelper<T> {
  private state: T;

  constructor(state: T) {
    this.state = state;
  }

  public set = <U>(accessor: (sourceState: T) => U, value: U): MonoliteHelper<T> => {
    this.state = monolite.set(this.state, accessor)(value);
    return this;
  };

  public setFromStringArr = <U>(path: string[], value: U): MonoliteHelper<T> => {
    this.state = monolite.set(this.state, path)(value);
    return this;
  };

  public setMap = <U>(accessor: (sourceState: T) => U[], updateFunc: (item: U) => U): MonoliteHelper<T> => {
    this.state = monolite.setMap(this.state, accessor)(updateFunc);
    return this;
  };

  public setFilter = <U>(accessor: (sourceState: T) => U[], filter: (item: U) => boolean): MonoliteHelper<T> => {
    this.state = monolite.setFilter(this.state, accessor)(filter);
    return this;
  };

  public setAppend = <U>(accessor: (sourceState: T) => U[], value: U): MonoliteHelper<T> => {
    this.state = monolite.setAppend(this.state, accessor)(value);
    return this;
  };

  public get = (): T => {
    return this.state;
  };
}

export function monoliteUtil<TState>(state: TState, accessor: (sourceState: MonoliteHelper<TState>) => void): TState {
  const helper = new MonoliteHelper<TState>(state);
  accessor(helper);
  const result = helper.get();
  return result;
}

export function monoliteFeedCombine<TState, TFeedItem>(
  state: TState,
  feedAccessor: (state: TState) => Feed<TFeedItem>,
  payload: Feed<TFeedItem>
): TState {
  return monoliteUtil(state, (unit) => {
    return unit.set(feedAccessor, FeedUtil.combine(feedAccessor(state), payload));
  });
}
