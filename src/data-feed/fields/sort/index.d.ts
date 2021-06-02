import React from 'react';
import { FeedSortOption } from '../../interfaces';
import { DataFeedTexts } from '../../texts';
import './index.scss';
interface OwnProps {
    options: FeedSortOption[];
    texts?: Partial<DataFeedTexts>;
}
interface Prpops extends OwnProps {
    name: string;
}
export declare const FilterSortField: React.FC<Prpops>;
export {};
