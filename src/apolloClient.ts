import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'https://shielded-gorge-97766.herokuapp.com/graphql',
  fetchOptions: {
    credentials: 'include'
  }
});

export default client;
