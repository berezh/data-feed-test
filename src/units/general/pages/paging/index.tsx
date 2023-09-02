import React, { useMemo, useCallback } from "react";
import { useDispatch } from "react-redux";
import classNames from "classnames";

import { useReduxSelector } from "src/lib/hooks";
import { MasterPage } from "../../components/master-page";
import { GeneralActions } from "../../redux";
import { FeedUi } from "../../components/feed-ui";
import { DataFeedTexts, DataFeed, BasicFeedParams } from "src/data-feed/index";
import { DefaultFilterForm } from "../../components/filter";
import { AppUrls } from "src/lib/urls";
import s from "./index.module.scss";
import { useRouterQuery } from "src/lib/hooks/param-router";
import { PageQuery } from "src/lib/urls/interfaces";

export const PagingPage: React.FC = () => {
  const dispatch = useDispatch();
  const { all, items } = useReduxSelector(x => x.general.stateFeed);

  const { page } = useRouterQuery<PageQuery>();

  const handleChange = useCallback(
    (params: any) => {
      dispatch(GeneralActions.loadStateFeedRequest({ ...params, page }));
    },
    [page]
  );

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

  const handleRenderPageLink = useCallback((p: number | null, current: boolean) => {
    const url = AppUrls.paging.build({ page: p?.toString() });
    return (
      <a href={url} className={classNames(s.link, { [s.link__current]: current })}>
        {p}
      </a>
    );
  }, []);

  return (
    <MasterPage>
      <DataFeed
        currentPage={page}
        total={all}
        data={items}
        pageItems={10}
        renderRow={FeedUi.renderRow}
        onChange={handleChange}
        texts={texts}
        renderFilter={filterHandler}
        renderPageItem={handleRenderPageLink}
      />
    </MasterPage>
  );
};
