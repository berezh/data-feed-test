import React, { useState, useCallback } from "react";

import "./index.scss";

import { EuState, DataGenerator } from "../../components/data-gererator";
import { FeedUi } from "../../components/feed-ui";
import { MasterPage } from "../../components/master-page";
import { FilterDataFeed } from "../../../../data-feed";

export const AutoloadPage: React.FC = () => {
  const [items, setItems] = useState<EuState[]>([]);
  const [all, setAll] = useState<number>(0);

  const handleChange = useCallback(
    (options: any) => {
      const { skip } = options;
      const { items: dataItems, all: allItems } = DataGenerator.loadEuState(
        10,
        options
      );
      const newItems = skip === 0 ? dataItems : [...items, ...dataItems];
      setItems(newItems);
      setAll(allItems);
    },
    [items, all]
  );

  return (
    <MasterPage>
      <FilterDataFeed
        initialLoad={true}
        all={all}
        data={items}
        renderItem={FeedUi.renderItem}
        onChange={handleChange}
      />
    </MasterPage>
  );
};
