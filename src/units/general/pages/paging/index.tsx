import React, { useMemo, useState , useCallback } from "react";
import queryString from "query-string";
import { useLocation } from "react-router-dom";

import "./index.scss";

import { MasterPage } from "../../components/master-page";
import { EuState, DataGenerator } from "../../components/data-gererator";
import { FeedUi } from "../../components/feed-ui";
import { FeedFilterValues, FilterDataFeed } from "../../../../data-feed";

const step = 3;

export const PagingPage: React.FC = () => {
    const [items, setItems] = useState<EuState[]>([]);
    const [all, setAll] = useState<number>(0);
    const { search } = useLocation();
    const { page } = queryString.parse(search, { parseNumbers: true }) as {
        page?: number;
    };

    const handleChange = useCallback(
        (options: FeedFilterValues) => {
            const feed = DataGenerator.loadEuState(step, options, page, step);
            // const newItems = feed.skip === 0 ? feed.items : [...items, ...feed.items];
            setItems(feed.items);
            // console.log('change: ', options, feed.items.length);
            setAll(feed.all);
        },
        [items]
    );

    // const handleRenderPageItem = useCallback((page: number | null, current: boolean) => {
    //     if (page === null) {
    //         return <span>...</span>;
    //     } else if (current) {
    //         return <b>{page}</b>;
    //     } else {
    //         return <a href={`/paging?page=${page}`}>{page}</a>;
    //     }
    // }, []);

    const handleRenderPageLink = useCallback((page: number) => {
        return <a href={`/paging?page=${page}`}>{page}</a>;
    }, []);

    const initialValues = useMemo<Partial<FeedFilterValues>>(() => {
        return {
            direction: "desc",
            order: "name",
            page,
        };
    }, [page]);

    return (
        <MasterPage>
            <FilterDataFeed
                all={all}
                data={items}
                step={step}
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
