import React, { useMemo } from "react";
import { Form, FormRule } from "antd";
import classNames from "classnames";
import { NamePath } from "antd/es/form/interface";

import s from "./index.module.scss";

export interface FormLineProps {
  children?: React.ReactNode;
  className?: string;
  name: NamePath;
  label?: string;
  rules?: FormRule | FormRule[];
  valuePropName?: string;
  noStyle?: boolean;
}

export const FormLine: React.FC<FormLineProps> = ({ className, rules: validateRules, ...props }) => {
  const rules = useMemo<FormRule[]>(() => {
    if (validateRules) {
      return Array.isArray(validateRules) ? validateRules : [validateRules];
    }
    return [];
  }, [validateRules]);

  return <Form.Item className={classNames(s.root, className)} rules={rules} {...props} />;
};
