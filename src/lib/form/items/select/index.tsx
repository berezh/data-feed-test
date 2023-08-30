import React, { useMemo } from "react";
import { Select } from "antd";
import { BaseOptionType } from "antd/es/select";

import { ValueOption } from "src/lib/interfaces";
import { FormLine, FormLineProps } from "../line";

interface Props extends FormLineProps {
  placeholder?: string;
  disabled?: boolean;
  options: ValueOption[];
}

export const SelectItem: React.FC<Props> = ({ placeholder = "Select", disabled, options, ...props }) => {
  const innerOptions = useMemo(() => {
    return options.map<BaseOptionType>(x => {
      return {
        label: x.text,
        value: x.value,
      };
    });
  }, [options]);

  return (
    <FormLine {...props}>
      <Select placeholder={placeholder} disabled={disabled} options={innerOptions} />
    </FormLine>
  );
};
