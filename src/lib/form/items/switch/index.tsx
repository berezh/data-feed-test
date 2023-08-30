import React from "react";
import { Switch } from "antd";

import { FormLine, FormLineProps } from "../line";
import s from "./index.module.scss";

interface Props extends FormLineProps {
  text?: string;
}

export const SwitchItem: React.FC<Props> = ({ text, ...props }) => {
  return (
    <div className={s.root}>
      <FormLine {...props} valuePropName="checked">
        <Switch />
      </FormLine>
      <div className={s.text}>{text}</div>
    </div>
  );
};
