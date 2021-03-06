import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from "react-apollo";
import { InMemoryCache } from 'apollo-cache-inmemory';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ApolloClient from "apollo-boost";

const TOKEN = process.env.REACT_APP_TOKEN;
const ENDPOINT = process.env.REACT_APP_GITHUB_ENDPOINT;

const cache = new InMemoryCache();
const client = new ApolloClient({
  uri: ENDPOINT,
  headers: {
    'Authorization': `Bearer ${TOKEN}`,
  },
  cache
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
