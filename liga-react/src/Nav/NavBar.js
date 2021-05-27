import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";
import styles from './Nav.module.css';
import { useAuthContext } from '../Auth/AuthContext';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  let history = useHistory();

  const { user, onLogout } = useAuthContext();

  function handleLogout(e) {
    e.preventDefault();
    onLogout();
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Button onClick={() => {return history.push("/")}} color="inherit">Home</Button>
          <Button onClick={() => {return history.push("/movies")}} color="inherit">Movies</Button>

          {(!user || !user.username) && <div className={styles['right-align']}>
            <Button  onClick={() => {return history.push("/register")}} color="inherit">Register</Button>
            <Button onClick={() => {return history.push("/login")}} color="inherit">Login</Button>
          </div>}

          
          {user && user.username && (
          <div className={styles['right-align']}>
            Welcome {user.username}!{' '}
            <Button onClick={handleLogout} color="inherit">Logout</Button>
          </div>
        )}

        </Toolbar>
      </AppBar>
    </div>
  );
}
