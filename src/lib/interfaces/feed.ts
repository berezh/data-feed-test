import { OrderDirection } from "src/data-feed";

export interface EuFeedParams {
  search?: string;
  page?: number | string;
  skip: number;
  order?: string;
  direction?: OrderDirection;
  [key: string]: any;
}

export interface Feed<T = any> {
  skip: number;
  all: number;
  items: T[];
}

// export interface FeedFilterValues {
//   search?: string;
//   page?: number | string;
//   skip: number;
//   order?: string;
//   direction?: OrderDirection;
//   [key: string]: any;
// }
