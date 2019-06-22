import * as React from 'react';
import { render } from 'react-dom';
import { App } from './app';

import 'bootstrap/dist/css/bootstrap.css';

const ENV = process.env.NODE_ENV || 'development';

if (ENV === 'development') {
  require('electron-react-devtools').install();
}

render(
  <App />,
  document.getElementById('root'),
);
