import React, { useCallback, useMemo } from 'react';
import { useDispatch } from 'react-redux';

import { MasterPage } from '../../components/master-page';
import { FeedUi } from '../../components/feed-ui';
import {
  FeedFilterValues,
  FilterCheckboxField,
  DataFeed,
  FilterSearchField,
  FilterSelectField,
} from '../../../../data-feed';
import { useReduxSelector } from 'src/lib/hooks';
import { GeneralActions } from '../../redux';

export const NoInitialLoadPage: React.FC = () => {
  const dispatch = useDispatch();
  const { all, items } = useReduxSelector((x) => x.general.stateFeed);

  const handleChange = useCallback(
    (options: any) => {
      dispatch(GeneralActions.loadStateFeedRequest(options));
    },
    [items, all]
  );

  const initialValues = useMemo<Partial<FeedFilterValues>>(() => {
    return {
      direction: 'desc',
      order: 'population',
    };
  }, []);

  return (
    <MasterPage>
      <DataFeed
        all={all}
        data={items}
        initialLoad={false}
        onChange={handleChange}
        sortOptions={FeedUi.sortOptions}
        renderItem={FeedUi.renderItem}
        showTotal={true}
        initialValues={initialValues}
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
        <FilterSearchField name="capital" label="Capital" placeholder="Enter Capital" />
      </DataFeed>
    </MasterPage>
  );
};
