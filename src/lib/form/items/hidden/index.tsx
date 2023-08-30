import { Form, Input } from "antd";
import React from "react";

interface Props {
  name: string;
}

export const HiddenItem: React.FC<Props> = ({ name, ...props }) => {
  return (
    <Form.Item noStyle name={name}>
      <Input type="hidden" {...props} />
    </Form.Item>
  );
};
