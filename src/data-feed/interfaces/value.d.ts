import React from 'react';
import { OrderDirection } from './base';
export interface FeedSortValue {
    name: string;
    mode: OrderDirection;
}
export interface FeedSortOption {
    icon?: React.ReactNode;
    name: string;
    label?: string;
}
export interface FeedAttributeProps {
    icon?: React.ReactNode;
    href?: string;
    label?: string | React.ReactNode;
    content?: string | React.ReactNode;
    maxWidth?: number;
    width?: number;
}
export interface FeedItemOptions {
    id: number | string;
    date?: string;
    titleRight?: React.ReactNode;
    attributes?: FeedAttributeProps | FeedAttributeProps[] | FeedAttributeProps[][];
    href?: string;
    actions?: React.ReactNode | React.ReactNode[];
    title?: string | React.ReactNode;
    attributeWidth?: number;
    left?: React.ReactNode;
    right?: React.ReactNode;
    className?: string;
}
