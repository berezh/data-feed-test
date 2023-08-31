import React, { useMemo } from "react";
import { FeedSortOption } from "data-feed";

import { AppForm } from "src/lib/form/instance";
import { InputItem } from "src/lib/form/items/input";
import s from "./index.module.scss";
import { DfSort } from "src/data-feed";

interface Props {
  onChange: (data: any) => void;
  initialValues?: any;
}

export const DefaultFilterForm: React.FC<Props> = ({ onChange, initialValues }) => {
  const sortOptions = useMemo<FeedSortOption[]>(() => {
    return [];
  }, []);

  return (
    <AppForm onChange={onChange} className={s.root} initialValues={initialValues}>
      <DfSort options={sortOptions} value={undefined} />
      <InputItem name="name" label="Name" maxLength={75} noStyle placeholder="Search" />
    </AppForm>
  );
};
