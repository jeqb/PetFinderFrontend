import React from 'react';
import { withRouter, Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import Tooltip from '@material-ui/core/Tooltip';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appbar: {
    alignItems: 'center',
  },
  icon: {
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
  },
  title: {
    flexGrow: 1,
  }
}));


const Header = ({context}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="sticky" className={classes.appbar}>
        <Toolbar>
          <Tooltip title="Home">
            <IconButton className={classes.icon} color="inherit" aria-label="home" component={Link} to="/">
              <HomeIcon />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withRouter(Header);
