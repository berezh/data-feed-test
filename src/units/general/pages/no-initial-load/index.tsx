import React, { useCallback, useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";

import { useReduxSelector } from "src/lib/hooks";
import { MasterPage } from "../../components/master-page";
import { FeedUi } from "../../components/feed-ui";
import { BasicFeedParams, DataFeed, DataFeedTexts } from "../../../../data-feed";
import { GeneralActions } from "../../redux";
import { DefaultFilterForm } from "../../components/filter";

export const NoInitialLoadPage: React.FC = () => {
  const dispatch = useDispatch();
  const { all, items } = useReduxSelector(x => x.general.stateFeed);

  const handleChange = useCallback((params: any) => {
    dispatch(GeneralActions.loadStateFeedRequest(params));
  }, []);

  const texts = useMemo<Partial<DataFeedTexts>>(() => {
    return {
      sort: "Сорт",
    };
  }, []);

  const filterHandler = useCallback(
    (initParams: BasicFeedParams, onChange: (changedParams: BasicFeedParams) => void) => {
      return <DefaultFilterForm initialValues={initParams} onChange={onChange} total={all} />;
    },
    [all]
  );

  useEffect(() => {
    dispatch(GeneralActions.loadStateFeedRequest({ skip: 0 }));
  }, []);

  return (
    <MasterPage>
      <DataFeed initialLoad={false} total={all} data={items} renderRow={FeedUi.renderRow} onChange={handleChange} texts={texts} renderFilter={filterHandler} />
    </MasterPage>
  );
};
