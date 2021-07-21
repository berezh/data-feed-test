import React from 'react';
import { BaseFieldProps } from 'redux-form';
import './index.scss';
interface OwnProps {
    label?: string;
    placeholder?: string;
    className?: string;
}
export interface FilterInputFieldProps extends BaseFieldProps<OwnProps>, OwnProps {
}
interface Prpops extends OwnProps {
    name?: string;
}
export declare const FilterInputField: React.FC<Prpops>;
export {};
