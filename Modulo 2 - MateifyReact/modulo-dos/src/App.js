import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
} from 'react-router-dom';
import Appbar from '@material-ui/core/Appbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import mateify from './images/mateify.png';
//import { Header } from './components/Header';
import { Login } from './components/Login';
import { Playlist } from './components/Playlist';

const useStyles = makeStyles({
  header: {
    backgroundColor: '#009688',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.24)',
    alignItems: 'center',
  },

  header_image: {
    height: 33,
    width: 37,
    marginBottom: 5,
  },

  link: {
    width: 131,
    height: 64,
    marginTop: 21,
  },

  header_mateify: {
    display: 'inline-block',
    color: '#ffffff',
    fontFamily: "'Righteous'",
    marginLeft: 5,
  }
})

function App() {
  const classes = useStyles();

  return (
    <div className = 'container'>
      <Router>
        <div>
          <Appbar className = {classes.header}>
            <NavLink className = {classes.link} to = '/login'>
              <img src = {mateify} alt = '' className = {classes.header_image}></img>
              <Typography className = {classes.header_mateify} variant = 'h5'>
                Mateify
              </Typography>
            </NavLink>
          </Appbar>
        </div>
        <Switch>
          <Route path = '/login'>
            <Login />
          </Route>
          <Route path = '/'>
            <Playlist />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
