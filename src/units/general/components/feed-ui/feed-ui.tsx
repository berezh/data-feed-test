import React from 'react';
import { EuState } from '../data-gererator';
import { DataFeedItem, FeedSortOption } from 'data-feed';
import moment from 'moment';
import numeral from 'numeral';

export class FeedUi {
    public static sortOptions: FeedSortOption[] = [
        {
            label: 'Name',
            name: 'name',
        },
        {
            label: 'Population',
            name: 'population',
        },
        {
            label: 'Area',
            name: 'area',
        },
    ];
    public static renderItem(item: EuState): React.ReactElement {
        return (
            <DataFeedItem
                title={item.name}
                titleRight={moment(item.accession).fromNow()}
                attributes={[
                    {
                        label: 'Native Name',
                        content: item.nativeName,
                    },
                    {
                        label: 'Capital',
                        content: item.capital,
                    },
                    {
                        label: 'Population',
                        content: item.population,
                    },
                    {
                        label: 'Area (km²)',
                        content: item.area,
                    },
                    {
                        label: 'GDP (Milions)',
                        content: numeral(item.totalGdp).format('$0,0'),
                    },
                    {
                        label: 'GDP (Per cap.)',
                        content: numeral(item.capitalGdp).format('0,0'),
                    },
                    {
                        label: 'Currency',
                        content: item.currency,
                    },
                    {
                        label: 'EP seats',
                        content: item.epSeats,
                    },
                    {
                        label: 'Lanugages',
                        content: item.languages.join(', '),
                        maxWidth: 100,
                    },
                ]}
                actions={[
                    <input
                        key="edit-input"
                        value="Edit"
                        type="button"
                        onClick={() => {
                            alert(`Edit ${item.name}`);
                        }}
                    />,
                    <a key="view-link" href="https://${item.code}.wikipedia.org/" target="blank">
                        View
                    </a>,
                ]}
            />
        );
    }
}
