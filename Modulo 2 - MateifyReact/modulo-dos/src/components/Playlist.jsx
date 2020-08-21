import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import padlock from '../images/padlock.png';
import playlist from '../base-de-datos/songData.json';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';

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
  },

  searcher: {
    margin: '10% 25% 0% 25%',
    width: '50%',
    backgroundColor: '#ffffff',
  },

  searchResults: {
    height: '20%',
    width: '100%',
    marginTop: '1%',
    padding: '2% 4%',
  },

  Results_tableTitle: {
    color: '#009688',
  },

  Results_tableCell: {
    paddingLeft: '7%',
  },

  Results_noResults: {
    color: '#c4c4c4',
    fontSize: 18,
    letterSpacing: 0.15,
    textAlign: "center",
    margin: '1% 0',
  },

  yourPlaylist: {
    height: '20%',
    width: '100%',
    marginTop: '1%',
    padding: '2% 4%',
  },

  playlist_tableTitle: {
    color: '#009688',
  },

  playlist_tableCell: {
    paddingLeft: '7%',
  },

  emptyPlaylistCard: {
    margin: '15% 32%',
    width: '35%',
  },

  playlist_noResults: {
    color: '#c4c4c4',
    fontSize: 18,
    letterSpacing: 0.15,
    textAlign: "center",
    margin: '7% 0',
  },

  agregeCanciones: {
    marginTop: '1%',
    display: 'block',
  },
})  

export const Playlist = () => {
  const [search, setSearch] = useState('');
  const [result, setResult] = useState([]);

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const checkSong = (element) => {
    if(element.name === search){
      return true; 
    } else {
      return false;
    }
  }

  const handleEnter = (e) => {
    if(e.key === 'Enter') {
      const checkSearch = playlist.filter(checkSong);
      if(checkSearch.length > 0){
        setResult([
          checkSearch[0].name,
          checkSearch[0].artist.name,
          checkSearch[0].album,
          checkSearch[0].duration,
        ]);
      }
    }
  }

  const renderResult = () => {
    if(result.length > 0){
      return(
        <TableRow>
          <TableCell>{result[0]}</TableCell>
          <TableCell>{result[1]}</TableCell>
          <TableCell>{result[2]}</TableCell>
          <TableCell>{result[3]}</TableCell>
          <TableCell>{result[4]}</TableCell>
          <TableCell>
            <Button>
              <InputAdornment>
                <AddCircleIcon />
              </InputAdornment>
            </Button>
          </TableCell>
        </TableRow>
      )
    }
  }

  const hideNoResultMessage = () => {
    if(result.length === 0) {
      return(
        <Typography className = {classes.Results_noResults} variant = 'body2'>No hay resultados: utilizar la barra de búsqueda para encontrar canciones</Typography>
      )
    } else {
      return;
    }
  }

  const classes = useStyles();
  return(
    <div>
      <TextField className = {classes.searcher} onChange = {updateSearch} onKeyDown = {handleEnter} variant = 'outlined' size = 'small' label = 'Buscar'
        InputProps = {{
          startAdornment: (
            <InputAdornment position = 'start'>
              <SearchIcon />
            </InputAdornment>
          )
        }}
      />
      <Card className = {classes.searchResults}>
        <Typography className = {classes.Results_tableTitle} variant = 'h6'>Resultados</Typography>
        <Table className = {classes.Results_table}>
          <TableHead>
            <TableRow>
              <TableCell className = {classes.Results_tableCell}>Nombre</TableCell>
              <TableCell className = {classes.Results_tableCell}>Artista</TableCell>
              <TableCell className = {classes.Results_tableCell}>Álbum</TableCell>
              <TableCell className = {classes.Results_tableCell}>Duración</TableCell>
              <TableCell className = {classes.Results_tableCell}>Agregar</TableCell>
            </TableRow>
            {renderResult()}
          </TableHead>
        </Table>
        {hideNoResultMessage()}
      </Card>

      <Card className = {classes.yourPlaylist}>
        <Typography className = {classes.playlist_tableTitle} variant = 'h6'>Tu Playlist</Typography>
        <Table className = {classes.playlist_table}>
          <TableHead>
            <TableRow>
              <TableCell className = {classes.playlist_tableCell}>Nombre</TableCell>
              <TableCell className = {classes.playlist_tableCell}>Artista</TableCell>
              <TableCell className = {classes.playlist_tableCell}>Duración</TableCell>
              <TableCell className = {classes.playlist_tableCell}>Cant. Votos</TableCell>
              <TableCell className = {classes.playlist_tableCell}>Votar</TableCell>
            </TableRow>
          </TableHead>
        </Table>
        <Card className = {classes.emptyPlaylistCard} variant = 'outlined'>
          <Typography className = {classes.playlist_noResults} variant = 'h6'>UPS!, TU PLAYLIST AÚN ESTÁ VACÍA<span className = {classes.agregeCanciones}>Comienza a agregar canciones</span></Typography>
        </Card>
      </Card> 
    </div>
    
  )
}

/* Sin ingresar
      <Card className = {classes.playlist}>
        <div className = {classes.playlist_noLoginSign}>
          <img src = {padlock} className = {classes.playlist_padlock}></img>
          <Typography className = {classes.playlist_noLoginText} variant = 'h4'>Mmm... algo no salió bien<span className = {classes.playlist_noLoginText_span}>Debes de estar autenticado para acceder a esta página</span></Typography>
        </div>
      </Card>
*/