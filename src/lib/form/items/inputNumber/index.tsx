import React, { KeyboardEventHandler } from "react";
import { InputNumber } from "antd";

import { FormLine, FormLineProps } from "../line";
import s from "./index.module.scss";

interface Props extends FormLineProps {
  min?: number;
  max?: number;
  placeholder?: string;
  disabled?: boolean;
  onKeyDown?: KeyboardEventHandler | undefined;
  bordered?: boolean;
  maxLength?: number;
}

export const InputNumberItem: React.FC<Props> = ({ min, max, placeholder, disabled, onKeyDown, bordered, maxLength, ...props }) => {
  return (
    <FormLine {...props}>
      <InputNumber min={min} max={max} placeholder={placeholder} disabled={disabled} onKeyDown={onKeyDown} bordered={bordered} className={s.input} maxLength={maxLength} />
    </FormLine>
  );
};
