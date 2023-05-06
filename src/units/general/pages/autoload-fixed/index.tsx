import React, { useRef, useCallback } from 'react';
import moment from 'moment';
import { Button, AnchorButton } from '@blueprintjs/core';
import { useDispatch } from 'react-redux';

import { MasterPage } from '../../components/master-page';
import { EuState } from '../../components/data-gererator';
import { StandardRow, DataFeed } from '../../../../data-feed';
import { useReduxSelector } from 'src/lib/hooks';
import { BaseFeedParams } from 'src/lib/interfaces';
import { GeneralActions } from '../../redux';

export const AutoloadFixedPage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const { all, items } = useReduxSelector((x) => x.general.stateFeed);

  const handleChange = useCallback((options: BaseFeedParams) => {
    dispatch(GeneralActions.loadStateFeedRequest(options));
  }, []);

  return (
    <MasterPage>
      <div ref={containerRef} style={{ height: 500, overflow: 'auto' }}>
        <DataFeed
          // containerRef={containerRef}
          // autoLoad={true}
          all={all}
          data={items}
          onChange={handleChange}
          renderItem={(item: EuState) => {
            return (
              <StandardRow
                topRight={moment(item.accession).fromNow()}
                attributes={[
                  {
                    label: 'Native Name',
                    content: item.nativeName,
                  },
                ]}
                actions={[
                  <Button
                    key="edit-btn"
                    icon="edit"
                    text="Edit"
                    type="button"
                    onClick={() => {
                      alert(`Edit ${item.name}`);
                    }}
                    small={true}
                  />,
                  <AnchorButton
                    key="view-btn"
                    icon="link"
                    href="https://${item.code}.wikipedia.org/"
                    target="blank"
                    small={true}
                  >
                    View
                  </AnchorButton>,
                ]}
              >
                {item.name}
              </StandardRow>
            );
          }}
        />
      </div>
    </MasterPage>
  );
};
