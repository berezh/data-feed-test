import React from 'react';
import { IconName } from '@blueprintjs/core';
interface OwnProps {
    label?: string;
    placeholder?: string;
    leftIcon?: IconName;
}
interface Prpops extends OwnProps {
    name?: string;
}
export declare const BpFilterTextField: React.FC<Prpops>;
export {};
