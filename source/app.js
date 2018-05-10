import React from 'react';
import ReactDOM from 'react-dom';
import Application from './components/Application';
import { initializeStreamOfTweets } from './utils/WebAPIUtils';

initializeStreamOfTweets();

import io from 'socket.io-client';
const socket = io('http://localhost');

ReactDOM.render(
  <Application />,
  document.getElementById('react-application')
);
