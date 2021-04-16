import { ApolloClient, HttpLink, InMemoryCache, split } from '@apollo/client';
import { WebSocketLink } from '@apollo/client/link/ws';
import { ApolloProvider } from '@apollo/client/react';
import { getMainDefinition } from '@apollo/client/utilities';
import { useState } from 'react';

import awfulBaby from 'shared/assets/awful-baby.gif';

import Main from 'shared/components/Main';
import Title from 'shared/components/Title';

import GlobalStyle from 'shared/styles/GlobalStyle';

const httpLink = new HttpLink({
  uri: 'http://localhost:4000/graphql',
});

const wsLink = new WebSocketLink({
  uri: 'ws://localhost:4000/subscriptions',
  options: {
    reconnect: true,
  },
});

// The split function takes three parameters:
//
// * A function that's called for each operation to execute
// * The Link to use for an operation if the function returns a "truthy" value
// * The Link to use for an operation if the function returns a "falsy" value
const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);

    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
);

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});

const App = (): JSX.Element => {
  const [showAwfulBaby, setShowAwfulBaby] = useState(false);

  return (
    <>
      <ApolloProvider client={client}>
        <Main>
          {showAwfulBaby ? (
            <img
              src={awfulBaby}
              alt="The most hideous child you have seen today."
            />
          ) : (
            <Title onClick={() => setShowAwfulBaby(true)}>
              Subscribe or Die.
            </Title>
          )}
        </Main>
      </ApolloProvider>
      <GlobalStyle />
    </>
  );
};

export default App;
