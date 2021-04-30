import { BrowserRouter as Router } from 'react-router-dom';

import Header from 'shared/components/Header';
import Layout from 'shared/components/Layout';
import Main from 'shared/components/Main';
import Navigation from 'shared/components/Navigation';
import Semibold from 'shared/components/Semibold';

import GlobalStyle from 'shared/styles/GlobalStyle';

const App = (): JSX.Element => {
  return (
    <>
      <Router>
        <Layout>
          <Header>
            <Semibold centered>Finn Mertens</Semibold>
          </Header>

          <Navigation />

          <Main />
        </Layout>
      </Router>

      <GlobalStyle />
    </>
  );
};

export default App;
