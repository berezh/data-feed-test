import React from "react";

import { FormLine, FormLineProps } from "../line";

export const CleanFormLine: React.FC<FormLineProps> = ({ className, ...props }) => {
  return <FormLine className={className} noStyle {...props} />;
};
