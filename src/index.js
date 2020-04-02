import nodeFetch from 'node-fetch';
global.fetch = nodeFetch;
import apollo from 'apollo-client';
import gqll  from "apollo-boost";
const { gql } = gqll
const {ApolloClient} = apollo
import apolloInMemoryCache from 'apollo-cache-inmemory';
const { InMemoryCache } = apolloInMemoryCache;
import apolloHttpLink from 'apollo-link-http';
const { HttpLink } = apolloHttpLink;

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: 'http://localhost:4000/',
  fetch: fetch
});


const client = new ApolloClient({
  link,
  cache
});



client
  .query({
    query: gql`
      {
        books {
          id
          title
        }
      }
    `
  })
  .then(result => console.log(result.data.books));