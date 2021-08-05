import React from 'react';
import { withRouter, Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import Tooltip from '@material-ui/core/Tooltip';


const useStyles = makeStyles((theme) => ({
  appbar: {
    flexGrow: 1,
    marginTop: '0px',
    padding: '0px',
    alignItems: 'center',
    background : '#C98D26',
  },
  icon: {
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
  },
  image: {
    overflow: 'hidden',
    margin: '0px',
    padding: '0px',
    width: '100%',
    height: '10%'
  }
}));


const Header = ({context}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="sticky" className={classes.appbar}>
        <Toolbar>
            <IconButton className={classes.icon} color="inherit" aria-label="home" component={Link} to="/">
              <div>
                Home
              </div>
            </IconButton>
            <IconButton className={classes.icon} color="inherit" aria-label="dogs" component={Link} to="/">
              <div>
                Dogs
              </div>
            </IconButton>
            <IconButton className={classes.icon} color="inherit" aria-label="organizations" component={Link} to="/">
              <div>
                Organizations
              </div>
            </IconButton>
            <IconButton className={classes.icon} color="inherit" aria-label="contact" component={Link} to="/">
              <div>
                Contact
              </div>
            </IconButton>
            <IconButton className={classes.icon} color="inherit" aria-label="about" component={Link} to="/">
              <div>
                About
              </div>
            </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withRouter(Header);
