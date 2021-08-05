import React from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';

import AzDesert from './AzDesert.jpg';

const useStyles = makeStyles((theme) => ({
  bannerArea: {
    width: '100%',
    height: '500px',
    position: 'fixed',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundImage: "url(" + AzDesert + ")",
    textAlign: 'center'
  },
  bannerText: {
    paddingBottom: '8%',
    fontSize: '65px',
    color: '#fff'
  },
  contentArea: {
    backgroundColor: 'coral'
  }
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.bannerArea}>
      <h2 className={classes.bannerText}>
        Search animal shelters across Phoenix.
      </h2>
    </div>
  )
}

export default withRouter(Home);
