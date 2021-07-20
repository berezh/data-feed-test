import React from 'react';
import './index.scss';
import { RowAttributeProps } from '../attribute';
export interface StandardRowProps {
    className?: string;
    contentClassName?: string;
    left?: React.ReactNode;
    right?: React.ReactNode;
    children?: React.ReactNode;
    content?: React.ReactNode;
    leftContent?: React.ReactNode;
    rightContent?: React.ReactNode;
    attributes?: RowAttributeProps | RowAttributeProps[] | RowAttributeProps[][];
    actions?: React.ReactNode | React.ReactNode[];
    topRight?: React.ReactNode;
    attributeWidth?: number;
}
export declare const StandardRow: React.FC<StandardRowProps>;
