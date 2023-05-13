import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql', // Replace with your GraphQL API endpoint
  cache: new InMemoryCache(),
});

export default client;