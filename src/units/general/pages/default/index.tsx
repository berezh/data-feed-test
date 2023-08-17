import React, { useMemo, useCallback } from "react";
import { useDispatch } from "react-redux";

import { BaseFeedParams } from "src/lib/interfaces";
import { useReduxSelector } from "src/lib/hooks";
import { MasterPage } from "../../components/master-page";
import { DataFeedTexts, FeedFilterValues, DataFeed } from "../../../../data-feed";
import { GeneralActions } from "../../redux";
import { FeedUi } from "../../components/feed-ui";

export const DefaultPage: React.FC = () => {
  const dispatch = useDispatch();
  const { all, items } = useReduxSelector(x => x.general.stateFeed);

  const handleChange = useCallback((options: BaseFeedParams) => {
    dispatch(GeneralActions.loadStateFeedRequest(options));
  }, []);

  const initialValues = useMemo<Partial<FeedFilterValues>>(() => {
    return {
      direction: "desc",
      order: "population",
    };
  }, []);

  const texts = useMemo<Partial<DataFeedTexts>>(() => {
    return {
      sort: "Сорт",
    };
  }, []);

  return (
    <MasterPage>
      <DataFeed
        all={all}
        data={items}
        renderItem={FeedUi.renderItem}
        sortOptions={FeedUi.sortOptions}
        initialValues={initialValues}
        onChange={handleChange}
        initialLoad={true}
        texts={texts}
      ></DataFeed>
    </MasterPage>
  );
};
