import React from 'react';
import './index.scss';
import { FeedFilterValues, FeedSortOption, ValueOption } from '../interfaces';
import { DataFeedProps } from '../feed';
export interface FilterDataFeedProps<T = any> extends Omit<DataFeedProps<T>, 'renderPageItem' | 'onChange'> {
    children?: React.ReactNode;
    initialValues?: Partial<FeedFilterValues>;
    renderRow?: (item: T) => React.ReactNode;
    onChange: (params: FeedFilterValues) => void;
    sortOptions?: FeedSortOption[];
    renderPageLink?: (page: number) => React.ReactNode;
    initialLoad?: boolean;
    languageOptions?: ValueOption[];
    showTotal?: boolean;
}
export declare const FilterDataFeed: React.FC<FilterDataFeedProps>;
