import React from 'react';
import './index.scss';
import { FeedAttributeProps } from '../interfaces';
export interface DataFeedItemProps {
    title?: string | React.ReactNode;
    titleRight?: string | React.ReactNode;
    attributes?: FeedAttributeProps | FeedAttributeProps[] | FeedAttributeProps[][];
    attributeWidth?: number;
    actions?: React.ReactNode | React.ReactNode[];
    left?: React.ReactNode;
    right?: React.ReactNode;
    className?: string;
}
export declare const DataFeedItem: React.FC<DataFeedItemProps>;
