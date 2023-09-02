import React, { useCallback, useEffect, useState } from "react";
import { Form } from "antd";
import classNames from "classnames";
import { FormInstance } from "antd/lib/form";
import { Store } from "antd/es/form/interface";

import s from "./index.module.scss";
import { useDidMount } from "src/lib/hooks";
import { FieldData } from "../interfaces";

function useForm(form?: FormInstance) {
  const [newForm] = Form.useForm();
  return form ? form : newForm;
}

export interface FormOptions {
  valid: boolean;
}

interface Props {
  children?: React.ReactNode | ((options: FormOptions) => React.ReactNode);
  className?: string;
  onFinish?: (values: any) => void;
  onValuesChange?: (changedValues: any, values: any) => void;
  onChange?: (values: any) => void;
  onFieldsChange?: (changedFields: FieldData[], allFields: FieldData[]) => void;
  form?: FormInstance;
  onValid?: (valid: boolean) => void;
  initialValues?: Store;
}

export const AppForm: React.FC<Props> = ({
  form: propForm,
  children,
  className,
  onFinish,
  onValuesChange,
  onChange,
  onFieldsChange,
  onValid,
  initialValues,
}) => {
  const form = useForm(propForm);
  const [valid, setValid] = useState(false);
  const mount = useDidMount();

  const handleValuesChange = useCallback(
    (changedValues: any, values: any) => {
      // console.log("values changed", values);
      if (onValuesChange) {
        onValuesChange(changedValues, values);
      }
      const errors = form.getFieldsError().filter(x => x.errors.length);
      setValid(!errors.some(x => x.errors.length));
    },
    [form, onValuesChange]
  );

  const handleFieldsChange = useCallback(
    (changedFields: FieldData[], allFields: FieldData[]) => {
      // console.log("fields changed", allFields);
      onFieldsChange?.(changedFields, allFields);

      if (onChange) {
        const allValues: { [key: string]: any } = {};
        allFields.forEach(x => {
          allValues[x.name] = x.value;
        });
        onChange(allValues);
      }
    },
    [form, onFieldsChange, onChange]
  );

  useEffect(() => {
    if (mount && onValid) {
      onValid(valid);
    }
  }, [valid, mount, onValid]);

  return (
    <Form
      form={form}
      onFinish={onFinish}
      className={classNames(s.root, className)}
      layout="vertical"
      onValuesChange={handleValuesChange}
      onFieldsChange={handleFieldsChange as any}
      initialValues={initialValues}
    >
      {typeof children === "function" ? children({ valid }) : children}
    </Form>
  );
};
