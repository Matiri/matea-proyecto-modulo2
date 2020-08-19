//import React
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Appbar from '@material-ui/core/Appbar';
import Typography from '@material-ui/core/Typography';
import mateify from '../images/mateify.png';

const useStyles = makeStyles({
  link: {
    width: 220,
    height: 64,
  },

  header_image: {
    height: 33,
    width: 37,
  },

}) 
export const Header = () => {
  const classes = useStyles();

  return(
    <Appbar className = {classes.header}>
      <div className = {classes.link}>
        <img src = {mateify} alt = '' className = {classes.header_image}></img>
        <Typography className = {classes.header_mateify} variant = 'h5'>
          Mateify
        </Typography>
      </div>
    </Appbar>
  )
}
