import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { onError } from '@apollo/client/link/error';

const httpLink = createHttpLink({
  uri: 'https://rickandmortyapi.com/graphql', // Replace with your GraphQL API endpoint
})

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) => {
      console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`);
    });
  }

  if (networkError) {
    console.log(`[Network error]: ${networkError}`);
  }
});


const client = new ApolloClient({
  link: errorLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;