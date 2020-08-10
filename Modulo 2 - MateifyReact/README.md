# Módulo 2 - Mateify React

El proyecto del módulo 2 tiene como objetivo poner en práctica y evaluar los conocimientos de desarrollo con React.

El proyecto se realizará de forma **individual.**

#### Conceptos a aplicar

- Programación con JavaScript: variables, condicionales, loops, funciones, arrays, etc.
- Maquetación con React.
- Componentes y reutilización con props.
- Utilización de librerías de terceros.
- Manejo de estado.
- Manejo de eventos.
- Renderizado condicional.
- React Router.

#### Método de evaluación

Evaluaremos tanto la funcionalidad de la aplicación como el uso de buenas prácticas en el código. 

Les daremos una devolución personal a cada uno y además cargaremos una devolución escrita en las Issues del repositorio entregado.

## Cronograma

- Presentación del proyecto - Martes 11 Agosto
- Análisis de requerimientos en conjunto - Martes 11 de Agosto
- Pre entrega (repositorio creado y avance hasta ese día pusheado) - Lunes 17 de Agosto
- Feedback de pre entrega - Martes 18 y Miercoles 19 de Agosto
- Entrega final - Viernes 21 de Agosto
-----------------------------------------------------------------------
- Seguimiento del proyecto con cada uno - Todos los días
- Dudas y consultas - Todos los días

## Requerimientos no funcionales

A continuación se listan los requerimientos que no corresponden a como debe funcionar la aplicación pero que serán evaluados y se deberán cumplir para aprobar el proyecto.

- Subir el proyecto a un repositorio de GitHub personal.
- Utilizar [Create React App](https://github.com/facebook/create-react-app).
- Utilizar la librería de componentes [Material UI](https://material-ui.com/es/).
- Hacer un [deploy del proyecto en GitHub Pages](https://github.com/gitname/react-gh-pages).

## Diseño

[Link de diseño en Figma](https://www.figma.com/file/nMX6u7H0w9PIUBqC9RzZJc/Mateify-React?node-id=0%3A1). Tener en cuenta tanto la versión Desktop como la Mobile.

## Funcionalidades

A continuación se describe como debe funcionar cada una de las funcionalidades que se exponen en el diseño anterior.

#### General

Respetar el diseño (dejar los colores para lo último).

#### Login

- Se deberá controlar que los datos de usuario y contraseña, correspondan a alguno de los usuarios registrados en la base de datos (archivo `userData.json`).

- Si el usuario es incorrecto, mostrar un mensaje de error, utilizando el componente [Snackbar](https://material-ui.com/es/components/snackbars/#snackbar) de Material UI. Por ejemplo: "Usuario y/o contraseña incorrectos".

- Si el usuario es correcto, navegar a la pantalla de creación de playlist.

Nota: El resto de los botones de la pantalla, no debén tener funcionalidad, solo deben estár para evaluar conceptos de maquetación y uso de componentes.

#### Playlist

- En el header se deberá mostrar arriba a la derecha, la foto del usuario autenticado en la pantalla de login.

- Si se accede a esta página pero el usuario no está autenticado, se deberá mostrar el mensaje de que la autenticación es requerida.

- Al ingresar por primera vez y todavía no tener canciones agregadas a la playlist, ni tampoco resultados de busqueda, se deberá mostrar el `blank state` como indica el diseño en Figma.

- Al buscar una canción en el campo de busqueda y presionar enter, se deberá buscar la canción en la base de datos `songData.json` por `name` y en caso de que exista la canción mostrarla en los resultados de búsqueda. Se valorará **(opcional)** la busqueda por texto "no exacto", por ejemplo: Si el usuario busca "a las" se deberá mostrar la canción "A las nueve", sin importar completar el texto completo o utilizar mayusculas y minusculas.

- Al presionar en el botón "Agregar" en los resultados de búsqueda, se deberá agregar la canción a la playlist que se está creando. Se valorará **(opcional)** hacer un control de no agregar canciones repetidas a la lista.

- En la playlist, se deberá contar con dos botones para votar o eliminar voto de las canciones agregadas. Al presionarlos la lista se debe ir ordenado de forma descendete, las canciones con más votos primero.

Reto: Agregar un botón eliminar canción en la playlist que permita eliminar la canción de la misma.
