import React from 'react';
import { FeedSortOption } from '../../interfaces';
import './index.scss';
interface OwnProps {
    options: FeedSortOption[];
}
interface Prpops extends OwnProps {
    name: string;
}
export declare const FilterSortField: React.FC<Prpops>;
export {};
