export interface BaseFeedParams {
  page?: number | string;
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
