import React from "react";
import "./index.scss";

export class Header extends React.PureComponent {
  public render(): React.ReactNode {
    return (
      <div className="header">
        <b>Header</b>
      </div>
    );
  }
}
