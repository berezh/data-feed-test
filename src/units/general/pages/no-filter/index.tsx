import React, { useCallback } from "react";
import { useDispatch } from "react-redux";

import { useReduxSelector } from "src/lib/hooks";
import { MasterPage } from "../../components/master-page";
import { GeneralActions } from "../../redux";
import { FeedUi } from "../../components/feed-ui";
import { DataFeed } from "src/data-feed/index";

export const NoFilterPage: React.FC = () => {
  const dispatch = useDispatch();
  const { all, items } = useReduxSelector(x => x.general.stateFeed);

  const handleChange = useCallback((params: any) => {
    dispatch(GeneralActions.loadStateFeedRequest(params));
  }, []);

  return (
    <MasterPage>
      <DataFeed total={all} data={items} renderRow={FeedUi.renderRow} onChange={handleChange} texts={FeedUi.texts} />
    </MasterPage>
  );
};
