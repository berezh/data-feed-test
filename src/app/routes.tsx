import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { DefaultPage } from "../units/general/pages/default";
import { AutoloadFixedPage } from "../units/general/pages/autoload-fixed";
import { AutoloadPage } from "../units/general/pages/autoload";
import { NoFilterPage } from "../units/general/pages/no-filter";
import { NoInitialLoadPage } from "../units/general/pages/no-initial-load";
import { PagingPage } from "../units/general/pages/paging";
import { AppUrls } from "../lib/urls";

export class Root extends React.PureComponent {
  public render(): React.ReactNode {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path={AppUrls.default.build()} component={DefaultPage} />
          <Route exact path={AppUrls.paging.build()} component={PagingPage} />
          <Route
            exact
            path={AppUrls.noFilter.build()}
            component={NoFilterPage}
          />
          <Route
            exact
            path={AppUrls.noInitialLoad.build()}
            component={NoInitialLoadPage}
          />
          <Route
            exact
            path={AppUrls.autoload.build()}
            component={AutoloadPage}
          />
          <Route
            exact
            path={AppUrls.autoloadFixed.build()}
            component={AutoloadFixedPage}
          />
          <Route component={DefaultPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}
