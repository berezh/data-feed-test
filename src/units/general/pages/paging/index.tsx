import { parse } from 'query-string';
import React, { useCallback, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { useReduxSelector } from 'src/lib/hooks';
import { FeedFilterValues, DataFeed } from '../../../../data-feed';
import { FeedUi } from '../../components/feed-ui';
import { MasterPage } from '../../components/master-page';
import { GeneralActions } from '../../redux';

const step = 10;

export const PagingPage: React.FC = () => {
    const dispatch = useDispatch();
    const { all, items } = useReduxSelector((x) => x.general.stateFeed);
    const { search } = useLocation();
    const { page } = parse(search, { parseNumbers: true }) as {
        page?: number;
    };

    const handleChange = useCallback(
        (options: FeedFilterValues) => {
            dispatch(GeneralActions.loadStateFeedRequest(options));
        },
        [items]
    );

    const handleRenderPageLink = useCallback((page: number) => {
        return <a href={`/paging?page=${page}`}>{page}</a>;
    }, []);

    const initialValues = useMemo<Partial<FeedFilterValues>>(() => {
        return {
            direction: 'desc',
            order: 'name',
        };
    }, [page]);

    return (
        <MasterPage>
            <DataFeed
                all={all}
                data={items}
                step={step}
                page={page}
                renderItem={FeedUi.renderItem}
                sortOptions={FeedUi.sortOptions}
                // renderPageItem={handleRenderPageItem}
                renderPageLink={handleRenderPageLink}
                initialValues={initialValues}
                onChange={handleChange}
            />
        </MasterPage>
    );
};
