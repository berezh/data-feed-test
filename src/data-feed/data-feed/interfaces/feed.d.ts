import { OrderDirection } from "./base";
import { FeedSortValue } from "./value";
export interface FeedFilterValues {
    search?: string;
    page?: number | string;
    skip: number;
    order?: string;
    direction?: OrderDirection;
    [key: string]: any;
}
export interface InnerFeedFilterValues {
    sort: FeedSortValue;
    [key: string]: any;
}
export interface BasicFeedParams {
    skip: number;
    [key: string]: any;
}
