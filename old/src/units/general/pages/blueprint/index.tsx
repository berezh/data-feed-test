import React, { useMemo, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { MasterPage } from '../../components/master-page';
import { BaseFeedParams } from 'src/lib/interfaces';
import { DataFeedTexts, FeedFilterValues, DataFeed } from '../../../../data-feed';
import { GeneralActions } from '../../redux';
import { useReduxSelector } from 'src/lib/hooks';
import { FeedUi } from '../../components/feed-ui';
import {
  BpFilterBoolField,
  BpFilterSearchField,
  BpFilterSelectField,
  BpFilterSelectItem,
  BpFilterTextField,
} from '../../../../data-feed-blueprintjs';

export const BluePrintPage: React.FC = () => {
  const dispatch = useDispatch();
  const { all, items } = useReduxSelector((x) => x.general.stateFeed);

  const handleChange = useCallback((options: BaseFeedParams) => {
    dispatch(GeneralActions.loadStateFeedRequest(options));
  }, []);

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

  const renderLanguageOption = useCallback(({ item, onClick }: BpFilterSelectItem) => {
    return <div key={item.value} onClick={onClick}>{`${item.text} (${item.value})`}</div>;
  }, []);

  return (
    <MasterPage>
      <DataFeed
        all={all}
        data={items}
        renderItem={FeedUi.renderItem}
        sortOptions={FeedUi.sortOptions}
        initialValues={initialValues}
        onChange={handleChange}
        initialLoad={true}
        texts={texts}
        renderSearchField={() => <BpFilterSearchField />}
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
          renderItem={renderLanguageOption}
          options={[
            { text: 'Euro', value: 'euro' },
            { text: 'Krona', value: 'krona' },
            { text: 'Kuna', value: 'kuna' },
          ]}
        />
        <BpFilterTextField name="capital" label="Capital" placeholder="Enter Capital" />
      </DataFeed>
    </MasterPage>
  );
};
