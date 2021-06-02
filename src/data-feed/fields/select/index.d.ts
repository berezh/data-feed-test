import React from 'react';
import { ValueOption } from '../../interfaces';
interface OwnProps {
    options: ValueOption[];
    placeholder?: string;
}
interface Prpops extends OwnProps {
    name: string;
}
export declare const FilterSelectField: React.FC<Prpops>;
export {};
