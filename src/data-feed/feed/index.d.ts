import React from 'react';
import './index.scss';
export interface DataFeedProps<T> {
    /** Items data array */
    data?: T[];
    /** Total count of items */
    all?: number;
    /** Count of items in one page */
    step?: number;
    /** Current Page */
    page?: number;
    renderItem: (item: T) => React.ReactNode;
    texts?: {
        [key: string]: string;
    };
    /** Root class name */
    className?: string;
    /** Define loading state */
    loading?: boolean;
    /** Filter loading element*/
    filterLoading?: JSX.Element;
    /** Button to load new data */
    renderLoadMoreButton?: (loading: boolean) => JSX.Element;
    onChange?: (skip: number) => void;
    children?: React.ReactNode;
    /** used with autoLoad property */
    containerRef?: React.RefObject<HTMLElement>;
    renderPageItem?: (page: number | null, current: boolean) => React.ReactNode;
}
export declare function DataFeed<T = any>({ data, all, step, page, renderItem, texts, className, loading, renderLoadMoreButton, onChange, children, renderPageItem, }: DataFeedProps<T>): JSX.Element;
