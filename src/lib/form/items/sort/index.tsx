import React from "react";
import { FeedSortOption } from "data-feed";

import { FormLine, FormLineProps } from "../line";
import { DfSort } from "src/data-feed";

interface Props extends FormLineProps {
  options: FeedSortOption[];
}

export const SortItem: React.FC<Props> = ({ options, ...props }) => {
  return (
    <FormLine {...props} noStyle>
      <DfSort options={options} />
    </FormLine>
  );
};
