import React, { useMemo, useCallback } from "react";
import { useDispatch } from "react-redux";

import { useReduxSelector } from "src/lib/hooks";
import { MasterPage } from "../../components/master-page";
import { GeneralActions } from "../../redux";
import { FeedUi } from "../../components/feed-ui";
import { DataFeedTexts, LightDataFeed } from "src/data-feed/index";

export const DefaultPage: React.FC = () => {
  const dispatch = useDispatch();
  const { all, items } = useReduxSelector(x => x.general.stateFeed);

  const handleChange = useCallback((skip: number) => {
    dispatch(GeneralActions.loadStateFeedRequest({ skip }));
  }, []);

  const texts = useMemo<Partial<DataFeedTexts>>(() => {
    return {
      sort: "Сорт",
    };
  }, []);

  return (
    <MasterPage>
      <LightDataFeed total={all} data={items} renderItem={FeedUi.renderItem} onLoad={handleChange} texts={texts} />
    </MasterPage>
  );
};
