import React from "react";
import moment from "moment";
import numeral from "numeral";
import { Icon } from "@blueprintjs/core";

import { EuState } from "../data-gererator";
import { DataFeedTexts, FeedSortOption, StandardRow } from "src/data-feed";

export class FeedUi {
  public static sortOptions: FeedSortOption[] = [
    {
      label: "Name",
      name: "name",
    },
    {
      label: "Population",
      name: "population",
    },
    {
      label: "Area",
      name: "area",
    },
  ];

  public static get texts(): Partial<DataFeedTexts> {
    return {
      loadMore: "Больше",
      loading: "Загрузка",
    };
  }

  public static renderRow(item: EuState): React.ReactElement {
    return (
      <StandardRow
        topRight={moment(item.accession).fromNow()}
        attributes={[
          {
            label: "Native Name",
            content: item.nativeName,
          },
          {
            label: "Capital",
            content: item.capital,
          },
          {
            label: "Population",
            content: item.population,
          },
          {
            label: "Area (km²)",
            content: item.area,
          },
          {
            icon: <Icon icon="dollar" />,
            label: "GDP (Milions)",
            content: numeral(item.totalGdp).format("$0,0"),
          },
          {
            icon: <Icon icon="dollar" />,
            content: numeral(item.capitalGdp).format("0,0"),
          },
          {
            label: "Currency",
            content: item.currency,
          },
          {
            label: "EP seats",
            content: item.epSeats,
          },
          {
            label: "Lanugages",
            content: item.languages.join(", "),
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
      >
        <div>{item.name}</div>
      </StandardRow>
    );
  }
}
