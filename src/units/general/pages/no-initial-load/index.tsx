import React, { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";

import { useReduxSelector } from "src/lib/hooks";
import { MasterPage } from "../../components/master-page";
import { FeedUi } from "../../components/feed-ui";
import { BasicFeedParams, DataFeed } from "../../../../data-feed";
import { GeneralActions } from "../../redux";
import { DefaultFilterForm } from "../../components/filter";

export const NoInitialLoadPage: React.FC = () => {
  const dispatch = useDispatch();
  const { total, data } = useReduxSelector(x => x.general.stateFeed);

  const handleChange = useCallback((params: any) => {
    dispatch(GeneralActions.loadStateFeedRequest(params));
  }, []);

  const filterHandler = useCallback(
    (initParams: BasicFeedParams, onChange: (changedParams: BasicFeedParams) => void) => {
      return <DefaultFilterForm initialValues={initParams} onChange={onChange} total={total} />;
    },
    [total]
  );

  useEffect(() => {
    dispatch(GeneralActions.loadStateFeedRequest({ skip: 0 }));
  }, []);

  return (
    <MasterPage>
      {data?.length && (
        <DataFeed
          initialLoad={false}
          total={total}
          data={data}
          renderRow={FeedUi.renderRow}
          onChange={handleChange}
          texts={FeedUi.texts}
          renderFilter={filterHandler}
        />
      )}
    </MasterPage>
  );
};
