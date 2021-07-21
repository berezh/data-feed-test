import React from 'react';
import { ValueOption } from '../../../interfaces';
import './index.scss';
interface OwnProps {
    options: ValueOption[];
    placeholder?: string;
    className?: string;
}
interface Prpops extends OwnProps {
    name: string;
}
export declare const FilterSelectField: React.FC<Prpops>;
export {};
