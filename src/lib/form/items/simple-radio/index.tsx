import React from "react";

import { ValueOption } from "src/lib/interfaces";
import { FormLine, FormLineProps } from "../line";
import { SimpleRadioControl } from "./control";

interface Props extends FormLineProps {
  options: ValueOption[];
}

export const SimpleRadioItem: React.FC<Props> = ({ options, label, ...props }) => {
  return (
    <FormLine {...props}>
      <SimpleRadioControl label={label} options={options} />
    </FormLine>
  );
};
