import React, { useMemo, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { MasterPage } from '../../components/master-page';
import { BaseFeedParams } from 'src/lib/interfaces';
import {
    DataFeedTexts,
    FeedFilterValues,
    FilterCheckboxField,
    FilterDataFeed,
    FilterSelectField,
    FilterInputField,
} from '../../../../data-feed';
import { GeneralActions } from '../../redux';
import { useReduxSelector } from 'src/lib/hooks';
import { FeedUi } from '../../components/feed-ui';

import './index.scss';

export const DefaultPage: React.FC = () => {
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
            order: 'population',
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
                <FilterCheckboxField name="isEuro" label="Is Euro" />
                <FilterSelectField
                    name="language"
                    placeholder="Select Language"
                    options={[
                        { text: 'German', value: 'german' },
                        { text: 'English', value: 'english' },
                    ]}
                />
                <FilterSelectField
                    name="currency"
                    placeholder="Select Language"
                    options={[
                        { text: 'Euro', value: 'euro' },
                        { text: 'Krona', value: 'krona' },
                        { text: 'Kuna', value: 'kuna' },
                    ]}
                />
                <FilterInputField
                    className="custom-input"
                    name="capital"
                    label="Capital"
                    placeholder="Enter Capital"
                />
            </FilterDataFeed>
        </MasterPage>
    );
};
