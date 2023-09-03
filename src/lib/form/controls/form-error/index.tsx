import classNames from "classnames";
import React from "react";

import s from "./index.module.scss";

interface Props {
  children?: string;
  className?: string;
}

export const FormError: React.FC<Props> = ({ children, className }) => {
  return children ? <div className={classNames(s["form-error"], className)}>{children}</div> : null;
};
