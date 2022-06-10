import { useState } from 'react';

import { EuState, DataGenerator } from '../data-gererator';

export function useFeedData(): { data: EuState[]; all: number; load: (options: any) => void } {
  const [data, setData] = useState<EuState[]>([]);
  const [all, setAll] = useState<number>(0);

  // const debounceLoad = debounce((options: any) => {
  //     const { skip } = options;
  //     const { items, all } = DataGenerator.loadEuState(10, options);
  //     console.log('load', skip, data.length, items.length, all);
  //     const newData = skip === 0 ? items : [...data, ...items];
  //     setData(newData);
  //     setAll(all);
  // }, 1500);

  const load = (options: any) => {
    const { skip } = options;
    const { items, all } = DataGenerator.loadEuState(10, options);
    console.info('load', skip, data.length, items.length, all);
    const newData = skip === 0 ? items : [...data, ...items];
    setData(newData);
    setAll(all);
  };

  // useEffect(() => {
  //     console.log('loaded data', data);
  // }, data);

  return { data, all, load };
}
