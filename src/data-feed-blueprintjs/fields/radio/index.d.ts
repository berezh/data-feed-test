import React from 'react';
import { ValueOption } from 'data-feed';
import './index.scss';
interface OwnProps {
    options: ValueOption[];
    label?: string;
    small?: boolean;
}
interface Prpops extends OwnProps {
    name: string;
}
export declare const BpFilterRadioField: React.FC<Prpops>;
export {};
