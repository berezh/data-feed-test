import React from 'react';
import './index.scss';
export interface RowAttributeProps {
    icon?: React.ReactNode;
    label?: React.ReactNode;
    content?: React.ReactNode;
    maxWidth?: number;
    width?: number;
    className?: string;
}
export declare const RowAttribute: React.FC<RowAttributeProps>;
