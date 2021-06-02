export enum OrderMode {
    Asc = 1,
    Desc = 0,
}

export interface BaseFeedParams {
    page?: number;
    skip: number;
    search?: string;
    orderColumn?: string;
    orderMode?: number;
}

export interface Feed<T = any> {
    skip: number;
    all: number;
    items: T[];
}
