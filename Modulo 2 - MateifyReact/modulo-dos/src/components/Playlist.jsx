import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import padlock from '../images/padlock.png';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles({
  playlist: {
    marginTop: 100,
  }
})  

export const Playlist = () => {
  // const [usuario, setUsuario] = React.useState([]);
  /*
  useEffect(() => {
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    const datos = await fetch('base-de-datos/userData.json');
    const getData = datos.map(username => {
      const localUser = localStorage.getItem('userName');
      const localPassword = localStorage.getItem('password');
      window.localStorage.clear();
      if(localUser === username.email && localPassword === username.password){
        return(
          <h1 className = {classes.playlist}>We're good to go!</h1>
        )
      } else {
        return(
          <Card className = {classes.playlist}>
            <img src = {padlock}></img>
          </Card>
        )
      }
    })
  }

  const sinUsuario = () => {

  }
  */
  const classes = useStyles();
  return(
      <Card className = {classes.playlist}>
        <img src = {padlock}></img>
      </Card>
  )
}
