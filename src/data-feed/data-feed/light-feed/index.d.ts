import React from "react";
import "./index.scss";
import { DataFeedTexts } from "../texts";
export interface LightDataFeedProps<T> {
    /** Items data array */
    data?: T[];
    /** Total count of items */
    total?: number;
    /** Count of items in one page */
    pageItems?: number;
    /** Current Page */
    currentPage?: number | string;
    renderItem: (item: T) => React.ReactNode;
    /** Root class name */
    className?: string;
    dataClassName?: string;
    /** Define loading state */
    loading?: boolean;
    /** Filter loading element*/
    filterLoading?: JSX.Element;
    /** Button to load new data */
    renderLoadMoreButton?: (loading: boolean) => JSX.Element;
    onLoad: (skip: number) => void;
    children?: React.ReactNode;
    /** used with autoLoad property */
    containerRef?: React.RefObject<HTMLElement>;
    renderPageItem?: (page: number | null, current: boolean) => React.ReactNode;
    texts?: Partial<DataFeedTexts>;
}
export declare function LightDataFeed<T = any>({ data, total, pageItems, currentPage, renderItem, texts, className, dataClassName, loading, onLoad, children, renderPageItem, }: LightDataFeedProps<T>): JSX.Element;
