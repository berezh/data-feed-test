import { Feed } from '../interfaces';

function empty<TItem = any>(): Feed<TItem> {
    return {
        skip: 0,
        all: 0,
        items: [],
    };
}

export const FeedUtil = {
    combine: (prevFeed?: Feed, newFeed?: Feed): Feed => {
        const prev = prevFeed ? prevFeed : empty();
        const next = newFeed ? newFeed : empty();
        const result = {
            skip: next.skip,
            all: next.all,
            items: [
                ...(prev.skip < next.skip && next.items.length !== next.all
                    ? prev.items
                    : []),
                ...next.items,
            ],
        };
        return result;
    },
    empty,
};
