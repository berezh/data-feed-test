import React from 'react';
import { ValueOption } from '../../../interfaces';
import './index.scss';
interface OwnProps {
    options: ValueOption[];
}
interface Prpops extends OwnProps {
    name: string;
}
export declare const FilterRadioField: React.FC<Prpops>;
export {};
