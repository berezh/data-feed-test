import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useReduxSelector } from "src/lib/hooks";
import { BaseFeedParams } from "src/lib/interfaces";

import { FeedUi } from "../../components/feed-ui";
import { MasterPage } from "../../components/master-page";
import { DataFeed } from "../../../../data-feed";
import { GeneralActions } from "../../redux";

export const AutoloadPage: React.FC = () => {
  const dispatch = useDispatch();
  const { all, items } = useReduxSelector(x => x.general.stateFeed);

  const handleChange = useCallback((options: BaseFeedParams) => {
    dispatch(GeneralActions.loadStateFeedRequest(options));
  }, []);

  return (
    <MasterPage>
      <DataFeed initialLoad={true} all={all} data={items} renderItem={FeedUi.renderItem} onChange={handleChange} />
    </MasterPage>
  );
};
