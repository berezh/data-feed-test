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
export declare const BpFilterRadioField: React.FC<Prpops>;
export {};
