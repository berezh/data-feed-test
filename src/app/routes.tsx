import * as React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { DefaultPage } from '../units/general/pages/default';
import { AutoloadFixedPage } from '../units/general/pages/autoload-fixed';
import { AutoloadPage } from '../units/general/pages/autoload';
import { NoFilterPage } from '../units/general/pages/no-filter';
import { NoInitialLoadPage } from '../units/general/pages/no-initial-load';
import { PagingPage } from '../units/general/pages/paging';

export class Root extends React.PureComponent {
    public render(): React.ReactNode {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/default" component={DefaultPage} />
                    <Route exact path="/paging" component={PagingPage} />
                    <Route exact path="/no-filter" component={NoFilterPage} />
                    <Route exact path="/no-initial-load" component={NoInitialLoadPage} />
                    <Route exact path="/autoload" component={AutoloadPage} />
                    <Route exact path="/autoload-fixed" component={AutoloadFixedPage} />
                    <Route component={DefaultPage} />
                </Switch>
            </BrowserRouter>
        );
    }
}
