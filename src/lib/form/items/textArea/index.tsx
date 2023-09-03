import React, { KeyboardEventHandler } from "react";
import { Input } from "antd";

import { FormLine, FormLineProps } from "../line";

const { TextArea } = Input;

interface Props extends FormLineProps {
  placeholder?: string;
  disabled?: boolean;
  onKeyDown?: KeyboardEventHandler | undefined;
  bordered?: boolean;
  rows?: number;
  maxLength?: number;
}

export const TextAreaItem: React.FC<Props> = ({ rows, placeholder, disabled, onKeyDown, bordered, maxLength, ...props }) => {
  return (
    <FormLine {...props}>
      <TextArea rows={rows} placeholder={placeholder} disabled={disabled} onKeyDown={onKeyDown} bordered={bordered} maxLength={maxLength} />
    </FormLine>
  );
};
