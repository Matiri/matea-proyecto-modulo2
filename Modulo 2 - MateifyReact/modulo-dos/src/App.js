import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
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
  header_image: {
    height: 33,
    width: 37,
  },

  link: {
    width: 220,
    height: 64,
  },
})

function App() {
  const classes = useStyles();

  return (
    <div className = 'container'>
      <Router>
        <div>
          <Appbar>
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
