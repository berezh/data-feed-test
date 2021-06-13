import React from 'react';
import { IItemModifiers } from '@blueprintjs/select';
import { ValueOption } from 'data-feed';
export interface BpFilterSelectItem {
    item: ValueOption;
    onClick: (event: React.MouseEvent<HTMLElement>) => void;
    modifiers: IItemModifiers;
}
interface OwnProps {
    options: ValueOption[];
    placeholder?: string;
    valueField?: string;
    renderItem?: (options: BpFilterSelectItem) => React.ReactElement;
}
interface Prpops extends OwnProps {
    name: string;
}
export declare const BpFilterSelectField: React.FC<Prpops>;
export {};
