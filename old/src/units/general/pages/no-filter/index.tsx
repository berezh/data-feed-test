import moment from "moment";
import React, { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useReduxSelector } from "src/lib/hooks";

import { LightDataFeed, StandardRow } from "../../../../data-feed";
import { EuState } from "../../components/data-gererator";
import { MasterPage } from "../../components/master-page";
import { GeneralActions } from "../../redux";

export const NoFilterPage: React.FC = () => {
  const dispatch = useDispatch();
  const { all, items } = useReduxSelector(x => x.general.stateFeed);

  const handleChange = useCallback(
    (skip: number) => {
      dispatch(GeneralActions.loadStateFeedRequest({ skip }));
    },
    [items, all]
  );

  useEffect(() => {
    dispatch(GeneralActions.loadStateFeedRequest({ skip: 0 }));
  }, []);

  return (
    <MasterPage>
      <LightDataFeed
        all={all}
        data={items}
        renderItem={(item: EuState) => {
          return (
            <StandardRow
              topRight={moment(item.accession).fromNow()}
              attributes={[
                {
                  label: "Native Name",
                  content: item.nativeName,
                },
              ]}
            >
              {item.name}
            </StandardRow>
          );
        }}
        onChange={handleChange}
      />
    </MasterPage>
  );
};
