import React, { useEffect, useMemo, useState } from "react";
import { useCallback } from "react";

import "./index.scss";

import { MasterPage } from "../../components/master-page";
import { EuState, DataGenerator } from "../../components/data-gererator";
import { FeedUi } from "../../components/feed-ui";
import { BaseFeedParams } from "../../../../lib/interfaces";
import {
  DataFeedTexts,
  FeedFilterValues,
  FilterCheckboxField,
  FilterDataFeed,
  FilterSelectField,
  FilterTextField,
} from "../../../../data-feed";

export const DefaultPage: React.FC = () => {
  const [items, setItems] = useState<EuState[]>([]);
  const [all, setAll] = useState<number>(0);

  const handleChange = useCallback(
    (options: BaseFeedParams) => {
      console.log("default: ", options);
      const feed = DataGenerator.loadEuState(10, options);
      // const newItems = feed.skip === 0 ? feed.items : [...items, ...feed.items];
      // console.log("feed", feed);
      setItems(feed.items);
      setAll(feed.all);
    },
    [items]
  );

  const initialValues = useMemo<Partial<FeedFilterValues>>(() => {
    return {
      direction: "desc",
      order: "population",
    };
  }, []);

  useEffect(() => {
    console.log("items", items.length);
  }, [items]);

  const texts = useMemo<Partial<DataFeedTexts>>(() => {
    return {
      sort: "Сорт",
    };
  }, []);

  return (
    <MasterPage>
      <FilterDataFeed
        all={all}
        data={items}
        renderItem={FeedUi.renderItem}
        sortOptions={FeedUi.sortOptions}
        initialValues={initialValues}
        onChange={handleChange}
        texts={texts}
      >
        <FilterCheckboxField name="isEuro" label="Is Euro" />
        <FilterSelectField
          name="language"
          placeholder="Select Language"
          options={[
            { text: "German", value: "german" },
            { text: "English", value: "english" },
          ]}
        />
        <FilterSelectField
          name="currency"
          placeholder="Select Language"
          options={[
            { text: "Euro", value: "euro" },
            { text: "Krona", value: "krona" },
            { text: "Kuna", value: "kuna" },
          ]}
        />
        <FilterTextField
          name="capital"
          label="Capital"
          placeholder="Enter Capital"
        />
      </FilterDataFeed>
    </MasterPage>
  );
};
