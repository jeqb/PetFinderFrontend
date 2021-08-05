import React from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import { Container } from '@material-ui/core';

// Components
import Header from './components/layout/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';


const App = () => {
  return (
    <React.Fragment style={{padding: 0}}>
      <Header/>
      {/* <Container> */}
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route component={NotFound}/>
        </Switch>
      {/* </Container> */}
    </React.Fragment>
  );
}

export default withRouter(App);
