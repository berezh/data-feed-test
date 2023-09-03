import React, { useCallback } from "react";
import { Button, Form } from "antd";

import { AppForm } from "src/lib/form/instance";
import { InputItem } from "src/lib/form/items/input";
import s from "./index.module.scss";
import { SortItem } from "src/lib/form/items/sort";
import { FeedUi } from "src/units/general/components/feed-ui";

interface Props {
  onChange: (data: any) => void;
  initialValues?: any;
  total?: number;
}

export const DefaultFilterForm: React.FC<Props> = ({ onChange, initialValues, total }) => {
  const [form] = Form.useForm();

  const handleClean = useCallback(() => {
    const newValues = {
      sort: undefined,
      name: undefined,
    };
    form.setFieldsValue(newValues);
    onChange?.(newValues);
  }, [form, onChange]);

  const handleChange = useCallback(
    (params: any) => {
      const { sort, ...rest } = params;
      onChange?.({ ...rest, order: sort?.name, direction: sort?.mode });
    },
    [onChange]
  );

  return (
    <AppForm form={form} onChange={handleChange} initialValues={initialValues}>
      <div className={s.root}>
        <SortItem name="sort" options={FeedUi.sortOptions} />
        <InputItem name="search" label="Name" maxLength={75} noStyle placeholder="Search" />
        <div className={s.action}>
          <div>{`Total: ${total}`}</div>
          <Button onClick={handleClean} type="link">
            Clean
          </Button>
        </div>
      </div>
    </AppForm>
  );
};
