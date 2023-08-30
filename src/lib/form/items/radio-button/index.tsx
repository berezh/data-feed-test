import React from "react";
import { Radio } from "antd";
import { RadioGroupButtonStyle } from "antd/es/radio";

import { ValueOption } from "src/lib/interfaces";
import { FormLine, FormLineProps } from "../line";

interface Props extends FormLineProps {
  options: ValueOption[];
  buttonStyle?: RadioGroupButtonStyle;
}

export const RadioButtonItem: React.FC<Props> = ({ options, buttonStyle, ...props }) => {
  return (
    <FormLine {...props}>
      <Radio.Group buttonStyle={buttonStyle}>
        {options.map(({ value, text }, i) => {
          return (
            <Radio.Button key={i} value={value}>
              {text}
            </Radio.Button>
          );
        })}
      </Radio.Group>
    </FormLine>
  );
};
