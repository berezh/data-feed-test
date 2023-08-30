import React from "react";

import { AppForm } from "src/lib/form/instance";
import { InputItem } from "src/lib/form/items/input";
import s from "./index.module.scss";

interface Props {
  onChange: (data: any) => void;
  initialValues?: any;
}

export const DefaultFilterForm: React.FC<Props> = ({ onChange, initialValues }) => {
  return (
    <AppForm onChange={onChange} className={s.root} initialValues={initialValues}>
      <InputItem name="name" label="Name" maxLength={75} />
    </AppForm>
  );
};
