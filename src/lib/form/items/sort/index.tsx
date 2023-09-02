import React from "react";

import { FeedSortOption, DfSort } from "src/data-feed";
import { FormLine, FormLineProps } from "../line";

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
