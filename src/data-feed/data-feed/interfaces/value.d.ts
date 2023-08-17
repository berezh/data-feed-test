import React from "react";
import { OrderDirection } from "./base";
export interface FeedSortValue {
    name: string;
    mode: OrderDirection;
}
export interface FeedSortOption {
    icon?: React.ReactNode;
    name: string;
    label?: string;
}
