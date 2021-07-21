import React from 'react';
import './index.scss';
interface OwnProps {
    label: string;
    className?: string;
}
interface Prpops extends OwnProps {
    name: string;
}
export declare const FilterCheckboxField: React.FC<Prpops>;
export {};
