import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Title from 'shared/components/Title';

import MainContainer from './MainContainer';

const Main: React.FC = () => (
  <MainContainer>
    <Switch>
      <Route path="/">
        <Title>Inbox</Title>
      </Route>

      <Route path="/approval">
        <Title>Approval</Title>
      </Route>

      <Route path="/export">
        <Title>Export</Title>
      </Route>

      <Route exact path="/" render={() => <Redirect to="/inbox" />} />
    </Switch>
  </MainContainer>
);

export default Main;
