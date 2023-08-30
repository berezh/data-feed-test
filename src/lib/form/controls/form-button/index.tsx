import classNames from "classnames";
import React from "react";

import s from "./index.module.scss";

interface Props {
  children?: React.ReactNode;
  className?: string;
}

export const FormButton: React.FC<Props> = ({ children, className }) => {
  return children ? <div className={classNames(s.root, className)}>{children}</div> : null;
};
