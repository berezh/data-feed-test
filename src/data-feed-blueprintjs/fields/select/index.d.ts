import React from 'react';
import ValueOption from '../../interfaces/value-option';
interface OwnProps {
    options: ValueOption[];
    placeholder?: string;
    valueField?: string;
}
interface Prpops extends OwnProps {
    name: string;
}
export declare const BpFilterSelectField: React.FC<Prpops>;
export {};
