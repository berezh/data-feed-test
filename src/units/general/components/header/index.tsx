import React from "react";

import s from "./index.module.scss";

export class Header extends React.PureComponent {
  public render(): React.ReactNode {
    return (
      <div className={s.header}>
        <b>Header</b>
      </div>
    );
  }
}
