import React, { useMemo, useCallback } from "react";
import { useDispatch } from "react-redux";

import { useReduxSelector } from "src/lib/hooks";
import { MasterPage } from "../../components/master-page";
import { GeneralActions } from "../../redux";
import { FeedUi } from "../../components/feed-ui";
import { DataFeedTexts, DataFeed, BasicFeedParams } from "src/data-feed/index";
import { DefaultFilterForm } from "./filter";

export const DefaultPage: React.FC = () => {
  const dispatch = useDispatch();
  const { all, items } = useReduxSelector(x => x.general.stateFeed);

  const handleChange = useCallback((params: BasicFeedParams) => {
    console.log("change", params);
    dispatch(GeneralActions.loadStateFeedRequest(params));
  }, []);

  const texts = useMemo<Partial<DataFeedTexts>>(() => {
    return {
      sort: "Сорт",
    };
  }, []);

  const filterHandler = useCallback((initParams: BasicFeedParams, onChange: (changedParams: BasicFeedParams) => void) => {
    return <DefaultFilterForm initialValues={initParams} onChange={onChange} />;
  }, []);

  return (
    <MasterPage>
      <DataFeed total={all} data={items} renderRow={FeedUi.renderRow} onChange={handleChange} texts={texts} renderFilter={filterHandler} />
    </MasterPage>
  );
};
