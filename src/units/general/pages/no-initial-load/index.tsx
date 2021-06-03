import React, { useState, useCallback } from "react";

import "./index.scss";

import { MasterPage } from "../../components/master-page";
import { EuState, DataGenerator } from "../../components/data-gererator";
import { FeedUi } from "../../components/feed-ui";
import {
    FilterCheckboxField,
    FilterDataFeed,
    FilterSearchField,
    FilterSelectField,
} from "../../../../data-feed";

export const NoInitialLoadPage: React.FC = () => {
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
            <FilterDataFeed
                all={all}
                data={items}
                initialLoad={false}
                onChange={handleChange}
                sortOptions={FeedUi.sortOptions}
                renderItem={FeedUi.renderItem}
                showTotal={true}
            >
                <FilterCheckboxField name="isEuro" label="Is Euro" />
                <FilterSelectField
                    name="language"
                    placeholder="Select Language"
                    options={[
                        { text: "German", value: "german" },
                        { text: "English", value: "english" },
                    ]}
                />
                <FilterSelectField
                    name="currency"
                    placeholder="Select Language"
                    options={[
                        { text: "Euro", value: "euro" },
                        { text: "Krona", value: "krona" },
                        { text: "Kuna", value: "kuna" },
                    ]}
                />
                <FilterSearchField
                    name="capital"
                    label="Capital"
                    placeholder="Enter Capital"
                />
            </FilterDataFeed>
        </MasterPage>
    );
};
