import React from 'react';
import './index.scss';
import { FeedSortOption, FeedFilterValues } from '../interfaces';
interface ComponentProps {
    children?: React.ReactNode;
    formName: string;
    options?: FeedSortOption[];
    searchContent?: React.ReactNode;
    total?: number;
    className?: string;
}
export declare function FeedFilterForm<T = FeedFilterValues>({ ...props }: ComponentProps & {
    initialValues?: Partial<T>;
    onChange?: (values: Partial<T>, _dispatch: any, _form: any, previousValues: Partial<T>) => void;
}): JSX.Element;
export {};
