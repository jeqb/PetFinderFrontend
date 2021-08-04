import React from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';

// Components
import Header from './components/layout/Header';


const App = () => {
  return (
    <React.Fragment>
      <Header/>
      <div>Hello World</div>
    </React.Fragment>
  );
}

export default withRouter(App);
