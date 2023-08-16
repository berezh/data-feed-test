import classNames from "classnames";
import React from "react";

import s from "./index.module.scss";

interface Props {
  className?: string;
  children?: React.ReactNode;
  href: string;
}

export const AppLink: React.FC<Props> = ({ href, className, children, ...rest }) => {
  return (
    <a href={href} className={classNames(s.root, className)} {...rest}>
      {children}
    </a>
  );
};
