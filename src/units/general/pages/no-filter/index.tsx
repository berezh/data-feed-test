import React, { useState, useCallback, useMemo, useEffect } from "react";

import "./index.scss";

import moment from "moment";

import { MasterPage } from "../../components/master-page";
import { EuState, DataGenerator } from "../../components/data-gererator";
import { DataFeed, DataFeedItem } from "../../../../data-feed";

const count = 3;

export const NoFilterPage: React.FC = () => {
    const [items, setItems] = useState<EuState[]>([]);
    const [all, setAll] = useState<number>(0);

    const handleChange = useCallback(
        (skip: number) => {
            const { items: dataItems, all: allItems } = DataGenerator.loadEuState(
                count,
                { skip }
            );
            console.log(skip, dataItems, all);
            const newItems = skip === 0 ? dataItems : [...items, ...dataItems];
            setItems(newItems);
            setAll(allItems);
        },
        [items, all]
    );

    useEffect(() => {
        const { items, all } = DataGenerator.loadEuState(count, { skip: 0 });
        setItems(items);
        setAll(all);
    }, []);

    return (
        <MasterPage>
            <DataFeed
                all={all}
                data={items}
                renderItem={(item: EuState) => {
                    return (
                        <DataFeedItem
                            title={<div>{item.name}</div>}
                            titleRight={moment(item.accession).fromNow()}
                            attributes={[
                                {
                                    label: "Native Name",
                                    content: item.nativeName,
                                },
                            ]}
                        />
                    );
                }}
                onChange={handleChange}
            />
        </MasterPage>
    );
};
