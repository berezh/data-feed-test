import React from 'react';
import { BaseFieldProps } from 'redux-form';
interface OwnProps {
    label?: string;
    placeholder?: string;
}
export interface FieldFormTextProps extends BaseFieldProps<OwnProps>, OwnProps {
}
interface Prpops extends OwnProps {
    name?: string;
}
export declare const FilterTextField: React.FC<Prpops>;
export {};
