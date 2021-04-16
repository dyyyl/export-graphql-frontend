import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client/react';
import { useState } from 'react';

import awfulBaby from 'shared/assets/awful-baby.gif';

import Main from 'shared/components/Main';
import Title from 'shared/components/Title';

import { splitLink } from 'shared/graphql/utils/splitLink';

import GlobalStyle from 'shared/styles/GlobalStyle';

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
