import React, { useCallback } from "react";
import { useDispatch } from "react-redux";

import { useReduxSelector } from "src/lib/hooks";
import { MasterPage } from "../../components/master-page";
import { GeneralActions } from "../../redux";
import { FeedUi } from "../../components/feed-ui";
import { DataFeed } from "src/data-feed/index";

export const NoFilterPage: React.FC = () => {
  const dispatch = useDispatch();
  const { total, data } = useReduxSelector(x => x.general.stateFeed);

  const handleChange = useCallback((params: any) => {
    dispatch(GeneralActions.loadStateFeedRequest(params));
  }, []);

  return (
    <MasterPage>
      <DataFeed total={total} data={data} renderRow={FeedUi.renderRow} onChange={handleChange} texts={FeedUi.texts} />
    </MasterPage>
  );
};
