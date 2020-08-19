import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  useHistory
} from 'react-router-dom';
import padlock from '../images/padlock.png';
import datos from '../base-de-datos/userData.json';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';

const useStyles = makeStyles({
  login: {
    marginTop: '9%',
    marginLeft: '5%',
    height: 747,
    width: 959,
  },

  login_top: {
    margin: '0 45%',
  },

  login_topText: {
    margin: '0 8%',
  },

  padlock: {
    width: 104,
    height: 89,
  },

  form: {
    margin: '0 25%',
    width: '50%',
    borderBottom: '1px solid #e5e5e5',
    paddingBottom: '5%',
  },

  formInput: {
    marginTop: '2%',
    height: 50,
    width: '100%',
    display: 'block',
    border: '1px solid #e5e5e5',
    borderRadius: 4,
  },

  ingresar: {
    marginTop: '3%',
    width: '100%',
  },

  olvCont:{
    display: 'block',
    marginTop: '8%',
    marginLeft: '25%',
    color: '#009688',
  },

  login_bottom: {
    margin: '8% 25%',
    textAlign: 'center',
  },

  sinCuenta: {
    color: '#c4c4c4',
    marginBottom: '5%',
  },

  registrar: {
    width: '75%',
    fontSize: 20,
    color: '#009688',
    borderColor: '#009688',
  }
}) 

export const Login = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [snackbar, setSnackbar] = React.useState(false)
  const history = useHistory();

  const updateNameValue = e => {
    setUserName(e.target.value);
  }
  const updatePasswordValue = e => {
    setPassword(e.target.value);
  }

  const checkUsers = (element) => {
    if(element.email === userName && element.password === password){
      return true;
    } else {
      return false;
    }
  }

  const storeValue = () => {
    // 1. CARGAR LISTA DE USUARIOS
    // 2. CREAR FUNCIÓN DE FILTRADO
    // 3. USAR FILTRO EN USERDATA
    // 4. HACER CONSOLE.LOG COMO PRUEBA
    // 5. UN IF QUE CHEQUEA QUE HAYA AL MENOS UNA COINCIDENCIA
    console.log(datos);
    //const usuarioExiste = datos.some(checkUsers);
    const checkUserCondition = datos.filter(checkUsers);
    console.log(checkUserCondition);
    if(checkUserCondition.length > 0){
      history.push(`/`);
    } else {
      setSnackbar(true);
    }
  }

  const closeBar = (event, reason) => {
    if(reason === 'clickaway') {
      return;
    }
    setSnackbar(false);
  };

  const classes = useStyles();

  return(
      <Card className = {classes.login}>
        <div className = {classes.login_top}>
          <img className = {classes.padlock} src = {padlock} />
          <Typography className = {classes.login_topText} variant = 'h5'>Ingresar</Typography>
        </div>
        <form className = {classes.form}>
          <input className = {classes.formInput} type="text" onChange = {updateNameValue} placeholder = 'Correo Electrónico' value = {userName} />
          <input className = {classes.formInput} type = 'text' onChange = {updatePasswordValue} placeholder = 'Contraseña' value = {password} />
          <Button className = {classes.ingresar} onClick = {storeValue} variant = 'contained' color = 'secondary'>COMENZAR A CREAR PLAYLIST</Button>
          <Snackbar open = {snackbar} autoHideDuration = {6000} onclose = {closeBar}>
            <Alert onClose = {closeBar} variant = 'filled' severity = 'error'>
              Usuario y/o contraseña incorrectos
            </Alert>
          </Snackbar>
          <Button className = {classes.olvCont} color = 'disabled'>¿HAS OLVIDADO LA CONTRASEÑA?</Button>
        </form>
        <div className = {classes.login_bottom}>
          <Typography className = {classes.sinCuenta} variant = 'h6'>¿NO TIENES CUENTA?</Typography>
          <Button className = {classes.registrar} variant = 'outlined' color = 'disabled'>REGISTRATE</Button>
        </div>
      </Card>
  )
}

  /*
  const [user, setUser] = React.useState([]);

  useEffect(() => {
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    const datos = await fetch('.../base-de-datos/userData.json');
    setUser(datos);
  }
  */