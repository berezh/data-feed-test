import React from "react";
import TextArea from "antd/es/input/TextArea";

import { FormLine, FormLineProps } from "../line";

// interface ControlProps {
//   label?: string;
//   placeholder?: string;
//   className?: string;
//   regex?: RegExp;
//   tip?: string;
//   readOnly?: boolean;
// }

interface Props extends FormLineProps {
  placeholder?: string;
  disabled?: boolean;
  readOnly?: boolean;
}

export const AreaItem: React.FC<Props> = ({ placeholder, disabled, readOnly, ...props }) => {
  return (
    <FormLine {...props}>
      <TextArea placeholder={placeholder} disabled={disabled} readOnly={readOnly} />
    </FormLine>
  );
};
