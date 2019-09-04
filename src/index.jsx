// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import reduxPromise from 'redux-promise';

import MessageList from './containers/message_list.jsx';

import channelsReducer from './reducers/channels_reducer.js';
import selectedChannelReducer from './reducers/selected_channel_reducer.js';
import messagesReducer from './reducers/messages_reducer.js';
import userReducer from './reducers/user_reducer.js';



// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';


const initialState = {
  channels: ["general", "react", "paris"],
  messages: [
    {
      "author":"anonymous92",
      "content":"Hello world!",
      "created_at":"2017-09-26T23:03:16.365Z"
    },
    {
      "author":"anonymous77",
      "content":"My name is anonymous77",
      "created_at":"2017-09-26T23:03:21.194Z"
    }
  ],
  selectedChannel: "general",
  user: prompt("What is your username?")
};

// State and reducers
const reducers = combineReducers({
  selectedChannel: selectedChannelReducer,
  channels: channelsReducer,
  messages: messagesReducer,
  user: userReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = composeEnhancers(applyMiddleware(reduxPromise));

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
    <App />
    <MessageList />
  </Provider>,
  document.getElementById('root')
);
