export declare const FeedActions: {
    setCount: (payload: {
        form: string;
        count: number;
    }) => import("redux-sputnik").ActionWith<{
        form: string;
        count: number;
    }>;
    setSkip: (payload: string) => import("redux-sputnik").ActionWith<string>;
};
