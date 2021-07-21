import React from 'react';
import './index.scss';
import { FeedSortOption, FeedFilterValues } from '../../interfaces';
import { DataFeedTexts } from '../../texts';
interface ComponentProps {
    children?: React.ReactNode;
    options?: FeedSortOption[];
    formName: string;
    total?: number;
    className?: string;
    texts?: Partial<DataFeedTexts>;
    renderSearchField?: () => React.ReactElement;
}
export declare function FeedFilterForm<T = FeedFilterValues>({ ...props }: ComponentProps & {
    initialValues?: Partial<T>;
    onChange?: (values: Partial<T>, _dispatch: any, _form: any, previousValues: Partial<T>) => void;
}): JSX.Element;
export {};
