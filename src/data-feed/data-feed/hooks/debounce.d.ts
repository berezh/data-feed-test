/// <reference types="lodash" />
export declare function useDebouncedCallback<A extends any[]>(wait: number, callback: (...args: A) => void, deps?: any[]): import("lodash").DebouncedFunc<(...args: A) => void>;
