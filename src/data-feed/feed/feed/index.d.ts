import React from 'react';
import { FeedFilterValues, FeedSortOption, ValueOption } from '../../interfaces';
import { LightDataFeedProps } from '../../light-feed';
import { DataFeedTexts } from '../../texts';
export interface DataFeedProps<T = any> extends Omit<LightDataFeedProps<T>, 'renderPageItem' | 'onChange' | 'page'> {
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
    searchField?: React.ReactElement;
}
export declare const DataFeed: React.FC<DataFeedProps>;
