import React from 'react';
import { FeedFilterValues, FeedSortOption, ValueOption } from '../interfaces';
import { DataFeedProps } from '../feed';
import { DataFeedTexts } from '../texts';
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
    texts?: Partial<DataFeedTexts>;
}
export declare const FilterDataFeed: React.FC<FilterDataFeedProps>;
