import React from "react";
import "./index.scss";
import { DataFeedTexts } from "../texts";
export interface LightDataFeedProps<T> {
    /** Items data array */
    data?: T[];
    /** Total count of items */
    all?: number;
    /** Count of items in one page */
    step?: number;
    /** Current Page */
    page?: number | string;
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
    onChange: (skip: number) => void;
    children?: React.ReactNode;
    /** used with autoLoad property */
    containerRef?: React.RefObject<HTMLElement>;
    renderPageItem?: (page: number | null, current: boolean) => React.ReactNode;
    texts?: Partial<DataFeedTexts>;
}
export declare function LightDataFeed<T = any>({ data, all, step, page: propPage, renderItem, texts, className, dataClassName, loading, onChange, children, renderPageItem, }: LightDataFeedProps<T>): JSX.Element;
