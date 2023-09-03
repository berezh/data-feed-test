import React, { useCallback } from "react";
import { useDispatch } from "react-redux";

import { useReduxSelector } from "src/lib/hooks";
import { MasterPage } from "../../components/master-page";
import { GeneralActions } from "../../redux";
import { FeedUi } from "../../components/feed-ui";
import { DataFeed, BasicFeedParams } from "src/data-feed/index";
import { DefaultFilterForm } from "../../components/filter";

export const DefaultPage: React.FC = () => {
  const dispatch = useDispatch();
  const { all, items } = useReduxSelector(x => x.general.stateFeed);

  const handleChange = useCallback((params: any) => {
    dispatch(GeneralActions.loadStateFeedRequest(params));
  }, []);

  const filterHandler = useCallback(
    (initParams: BasicFeedParams, onChange: (changedParams: BasicFeedParams) => void) => {
      return <DefaultFilterForm initialValues={initParams} onChange={onChange} total={all} />;
    },
    [all]
  );

  return (
    <MasterPage>
      <DataFeed total={all} data={items} renderRow={FeedUi.renderRow} onChange={handleChange} texts={FeedUi.texts} renderFilter={filterHandler} />
    </MasterPage>
  );
};
