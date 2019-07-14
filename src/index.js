import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from "react-apollo";
import {createHttpLink} from 'apollo-link-http';

const httpLink =createHttpLink({uri:'http://localhost:8000/graphql/'})


const client = new ApolloClient({
  link:httpLink,
    cache:new InMemoryCache()
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>, document.getElementById('root')
);

serviceWorker.unregister();