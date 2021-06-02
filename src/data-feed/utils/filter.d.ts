import { FeedFilterValues, InnerFeedFilterValues } from '../interfaces';
export declare const FilterUtil: {
    toInner: (data: Partial<FeedFilterValues>) => Partial<InnerFeedFilterValues>;
    toOuter: ({ sort, ...rest }: Partial<InnerFeedFilterValues>) => Partial<FeedFilterValues>;
};
