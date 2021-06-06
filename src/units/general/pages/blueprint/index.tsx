import React, { useMemo, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { MasterPage } from '../../components/master-page';
import { BaseFeedParams } from 'src/lib/interfaces';
import {
    DataFeedTexts,
    FeedFilterValues,
    FilterDataFeed
} from '../../../../data-feed';
import { GeneralActions } from '../../redux';
import { useReduxSelector } from 'src/lib/hooks';
import { FeedUi } from '../../components/feed-ui';
import { BpFilterBoolField, BpFilterSelectField, BpFilterTextField } from '../../../../data-feed-blueprintjs';

import './index.scss';

export const BluePrintPage: React.FC = () => {
    const dispatch = useDispatch();
    const { all, items } = useReduxSelector(x => x.general.stateFeed);

    const handleChange = useCallback(
        (options: BaseFeedParams) => {
            dispatch(GeneralActions.loadStateFeedRequest(options));
        },
        []
    );

    const initialValues = useMemo<Partial<FeedFilterValues>>(() => {
        return {
            direction: 'desc',
            order: 'name',
        };
    }, []);

    const texts = useMemo<Partial<DataFeedTexts>>(() => {
        return {
            sort: 'Сорт',
        };
    }, []);

    return (
        <MasterPage>
            <FilterDataFeed
                all={all}
                data={items}
                renderItem={FeedUi.renderItem}
                sortOptions={FeedUi.sortOptions}
                initialValues={initialValues}
                onChange={handleChange}
                initialLoad={true}
                texts={texts}
            >
                <BpFilterBoolField name="isEuro" label="Is Euro" />
                <BpFilterSelectField
                    name="language"
                    placeholder="Select Language"
                    options={[
                        { text: 'German', value: 'german' },
                        { text: 'English', value: 'english' },
                    ]}
                />
                <BpFilterSelectField
                    name="currency"
                    options={[
                        { text: 'Euro', value: 'euro' },
                        { text: 'Krona', value: 'krona' },
                        { text: 'Kuna', value: 'kuna' },
                    ]}
                />
                <BpFilterTextField
                    name="capital"
                    label="Capital"
                    placeholder="Enter Capital"
                />
            </FilterDataFeed>
        </MasterPage>
    );
};
