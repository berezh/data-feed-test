import React from 'react';
import ValueOption from '../../interfaces/value-option';
import './index.scss';
interface OwnProps {
    options: ValueOption[];
    label?: string;
}
interface Prpops extends OwnProps {
    name: string;
}
export declare const FilterRadioField: React.FC<Prpops>;
export {};
