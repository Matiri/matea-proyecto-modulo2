import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  login: {
    marginTop: 100,
  }
}) 

export const Login = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const updateNameValue = e => {
    setUserName(e.target.value);
  }
  const updatePasswordValue = e => {
    setPassword(e.target.value);
  }
  const storeValue = () => {
    // 1. CARGAR LISTA DE USUARIOS
    // 2. CREAR FUNCIÓN DE FILTRADO
    // 3. USAR FILTRO EN USERDATA
    // 4. HACER CONSOLE.LOG COMO PRUEBA
    // 5. UN IF QUE CHEQUEA QUE HAYA AL MENOS UNA COINCIDENCIA
    const datos = fetch('base-de-datos/userData.json');
    const checkUsers = (element) => {
      if(element.email === setUserName && element.password === setPassword){
        return true;
      } else {
        return false;
      }
    };
    //const usuarioExiste = datos.some(checkUsers);
    const checkUserCondition = datos.filter(checkUsers);
    console.log(checkUserCondition);
  }
  const classes = useStyles();

  return(
    <div className = {classes.login}>
      <Card>
        <form>
          <input type="text" onChange = {updateNameValue} placeholder = 'Correo Electrónico' value = {userName} />
          <input type = 'text' onChange = {updatePasswordValue} placeholder = 'Contraseña' value = {password} />
          <Button href = './' onClick = {storeValue} variant = 'contained' color = 'secondary'>COMENZAR A CREAR PLAYLIST</Button>
        </form>
      </Card>
    </div>
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