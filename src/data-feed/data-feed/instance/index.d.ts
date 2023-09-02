import React from "react";
import "./index.scss";
import { DataFeedTexts } from "../texts";
import { BasicFeedParams } from "../interfaces";
export interface DataFeedProps<T = any> {
    /** Items data array */
    data?: T[];
    /** Total count of items */
    total?: number;
    /** Count of items in one page */
    pageItems?: number;
    /** Current Page */
    currentPage?: number | string;
    renderRow: (item: T) => React.ReactNode;
    renderFilter?: (initParams: BasicFeedParams, onChange: (changedParams: BasicFeedParams) => void) => React.ReactNode;
    /** Root class name */
    className?: string;
    dataClassName?: string;
    /** Define loading state */
    loading?: boolean;
    /** Filter loading element*/
    filterLoading?: JSX.Element;
    /** Button to load new data */
    renderLoadMoreButton?: (loading: boolean) => JSX.Element;
    onChange: (params: BasicFeedParams) => void;
    /** used with autoLoad property */
    containerRef?: React.RefObject<HTMLElement>;
    renderPageItem?: (page: number | null, current: boolean) => React.ReactNode;
    texts?: Partial<DataFeedTexts>;
    initParams?: BasicFeedParams;
    changeDelay?: number;
    initialLoad?: boolean;
}
export declare function DataFeed<T = any>({ data, total, pageItems, currentPage, renderRow, renderFilter, texts, className, dataClassName, loading, onChange, renderPageItem, initParams, changeDelay, initialLoad, }: DataFeedProps<T>): JSX.Element;
