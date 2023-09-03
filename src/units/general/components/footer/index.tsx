import React from "react";

import s from "./index.module.scss";

export class Footer extends React.PureComponent {
  public render(): React.ReactNode {
    return (
      <div className={s.footer}>
        <b>Footer</b>
      </div>
    );
  }
}
