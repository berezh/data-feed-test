import React from "react";
import { BasicFeedParams, FeedSortOption } from "../../interfaces";
import { LightDataFeedProps } from "../../light-feed";
import { DataFeedTexts } from "../../texts";
export interface DataFeedProps<T = any> extends Omit<LightDataFeedProps<T>, "renderPageItem" | "onChange" | "page"> {
    children?: React.ReactNode;
    initialValues?: Partial<BasicFeedParams>;
    renderRow?: (item: T) => React.ReactNode;
    onChange: (params: BasicFeedParams) => void;
    sortOptions?: FeedSortOption[];
    renderPageLink?: (page: number) => React.ReactNode;
    initialLoad?: boolean;
    showTotal?: boolean;
    texts?: Partial<DataFeedTexts>;
    renderSearchField?: () => React.ReactElement;
}
export declare const DataFeed: React.FC<DataFeedProps>;
