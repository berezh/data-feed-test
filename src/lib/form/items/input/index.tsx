import React, { KeyboardEventHandler } from "react";
import { Input } from "antd";

import { FormLine, FormLineProps } from "../line";

interface Props extends FormLineProps {
  type?: string;
  placeholder?: string;
  disabled?: boolean;
  onKeyDown?: KeyboardEventHandler | undefined;
  bordered?: boolean;
  maxLength?: number;
}

export const InputItem: React.FC<Props> = ({ type, placeholder, disabled, onKeyDown, bordered, maxLength, ...props }) => {
  return (
    <FormLine {...props}>
      <Input type={type} placeholder={placeholder} disabled={disabled} onKeyDown={onKeyDown} bordered={bordered} maxLength={maxLength} />
    </FormLine>
  );
};
