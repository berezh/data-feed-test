import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { FeedUi } from '../../components/feed-ui';
import { MasterPage } from '../../components/master-page';
import { FilterDataFeed } from '../../../../data-feed';
import { useReduxSelector } from 'src/lib/hooks';
import { BaseFeedParams } from 'src/lib/interfaces';
import { GeneralActions } from '../../redux';

export const AutoloadPage: React.FC = () => {
    const dispatch = useDispatch();
    const { all, items } = useReduxSelector((x) => x.general.stateFeed);

    const handleChange = useCallback((options: BaseFeedParams) => {
        dispatch(GeneralActions.loadStateFeedRequest(options));
    }, []);

    return (
        <MasterPage>
            <FilterDataFeed
                initialLoad={true}
                all={all}
                data={items}
                renderItem={FeedUi.renderItem}
                onChange={handleChange}
            />
        </MasterPage>
    );
};
