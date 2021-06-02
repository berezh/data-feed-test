import { OrderDirection } from './base';
import { FeedSortValue } from './value';
export interface FeedFilterValues {
    page?: number;
    skip: number;
    order?: string;
    direction?: OrderDirection;
    [key: string]: any;
}
export interface InnerFeedFilterValues {
    sort: FeedSortValue;
    [key: string]: any;
}
