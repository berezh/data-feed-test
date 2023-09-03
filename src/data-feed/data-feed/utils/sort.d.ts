import { FeedSortValue } from "../interfaces";
export declare class SortUtil {
    private static separator;
    static parseValue(value: string): FeedSortValue | undefined;
    static toValue({ name, mode }: FeedSortValue): string;
}
