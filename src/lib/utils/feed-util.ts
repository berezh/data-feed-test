import { Feed } from "../interfaces";

function empty<TItem = any>(): Feed<TItem> {
  return {
    skip: 0,
    total: 0,
    data: [],
  };
}

export const FeedUtil = {
  combine: (prevFeed?: Feed, newFeed?: Feed): Feed => {
    const prev = prevFeed ? prevFeed : empty();
    const next = newFeed ? newFeed : empty();
    const result: Feed = {
      skip: next.skip,
      total: next.total,
      data: [...(prev.skip < next.skip && next.data.length !== next.total ? prev.data : []), ...next.data],
    };
    return result;
  },
  empty,
};
