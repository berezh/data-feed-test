import React, { useRef, useCallback, useState } from "react";
import moment from "moment";
import { Button, AnchorButton } from "@blueprintjs/core";

import "./index.scss";

import { MasterPage } from "../../components/master-page";
import { EuState, DataGenerator } from "../../components/data-gererator";
import { DataFeedItem, FilterDataFeed } from "../../../../data-feed";

export const AutoloadFixedPage: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [items, setItems] = useState<EuState[]>([]);
    const [all, setAll] = useState<number>(0);

    const handleChange = useCallback(
        (options: any) => {
            const { skip } = options;
            const { items: dataItems, all: allItems } = DataGenerator.loadEuState(
                10,
                options
            );
            const newItems = skip === 0 ? dataItems : [...items, ...dataItems];
            setItems(newItems);
            setAll(allItems);
        },
        [items, all]
    );

    return (
        <MasterPage>
            <div ref={containerRef} style={{ height: 500, overflow: "auto" }}>
                <FilterDataFeed
                    // containerRef={containerRef}
                    // autoLoad={true}
                    all={all}
                    data={items}
                    onChange={handleChange}
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
                            />
                        );
                    }}
                />
            </div>
        </MasterPage>
    );
};
