import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import SettingsContextProvider from './context/SettingsContext';

import TodoList from './components/TodoList';



ReactDOM.render(
  <SettingsContextProvider>
    <TodoList />
    <App />
  </SettingsContextProvider>,
  document.getElementById('root')
);


