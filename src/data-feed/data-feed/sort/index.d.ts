import React from "react";
import "./index.scss";
import { FeedSortOption, FeedSortValue } from "../interfaces";
interface Props {
    value?: FeedSortValue;
    onChange?: (newValue?: FeedSortValue) => void;
    options: FeedSortOption[];
    label?: string;
}
export declare const DfSort: React.FC<Props>;
export {};
