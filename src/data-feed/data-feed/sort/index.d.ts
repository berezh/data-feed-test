import React from "react";
import "./index.scss";
import { FeedSortOption, FeedSortValue } from "../interfaces";
import { DataFeedTexts } from "../texts";
interface Props {
    value?: FeedSortValue;
    onChange: (newValue?: FeedSortValue) => void;
    options: FeedSortOption[];
    texts?: Partial<DataFeedTexts>;
}
export declare const DfSort: React.FC<Props>;
export {};
