import { useRouter } from "next/router";

export function useRouterQuery<T>(): T {
  const { query } = useRouter();
  // const result = {};
  // Object.keys(query).forEach((k) => {
  //     const value = (query[k] || '') as string;
  //     if (value.match(/^\d+$/gi)) {
  //         result[k] = parseInt(value);
  //     } else {
  //         result[k] = value;
  //     }
  // });

  return query as any as T;
}
