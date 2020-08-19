import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import padlock from '../images/padlock.png';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  playlist: {
    marginTop: '25%',
    marginLeft: '12%',
    width: 832,
    height: 391,
  },

  playlist_noLoginSign: {
    marginTop: '8%',
  },

  playlist_padlock: {
    marginBottom: 70,
    width: 252,
    height: 215.65,
  },

  playlist_noLoginText: {
    fontWeight: 'bold',
    display: 'inline-block',
  },

  playlist_noLoginText_span: {
    fontWeight: 'normal',
    display: 'block',
    fontSize: 20,
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
        <div className = {classes.playlist_noLoginSign}>
          <img src = {padlock} className = {classes.playlist_padlock}></img>
          <Typography className = {classes.playlist_noLoginText} variant = 'h4'>Mmm... algo no salió bien<span className = {classes.playlist_noLoginText_span}>Debes de estar autenticado para acceder a esta página</span></Typography>
        </div>
      </Card>
  )
}
