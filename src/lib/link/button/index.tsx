import classNames from "classnames";
import React from "react";

import s from "./index.module.scss";

interface Props extends React.AnchorHTMLAttributes<HTMLDivElement> {}

export const AppLinkButton: React.FC<Props> = ({ className, children, ...rest }) => {
  return (
    <div className={classNames(s.root, className)} {...rest}>
      {children}
    </div>
  );
};
