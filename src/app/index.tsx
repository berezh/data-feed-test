import React from 'react';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader';

import './index.scss';

import { Root } from './routes';
import { store } from '../redux';

const AppComponent: React.FC = () => {
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
};

export const App = hot(module)(AppComponent);
