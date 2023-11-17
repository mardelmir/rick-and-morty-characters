# Ejercicio: Página de Rick and Morty con Paginación e Imágenes

Este ejercicio consiste en crear una página web que muestra los personajes de la serie de televisión "Rick and Morty". Los personajes se obtienen de la API de Rick and Morty y se muestran en una lista paginada con imágenes, nombres y especies.

## Captura de Pantalla
Debería quedar algo parecido a esto

![Captura de Pantalla](./assets/img/rickandmorty-screenshot.png)

## Características

- Lista de personajes con imágenes, nombres y especies.
- Paginación para navegar entre las páginas de personajes. Los botónes de `Previous page` y `Next page` están creados
- Uso de la API de Rick and Morty para obtener datos de personajes. Este es el end point `https://rickandmortyapi.com/api/character/?page=(aquí añade el numero de la página)`

## Instrucciones

1. Abre el archivo `index.html` en tu navegador para ver la página web.
2. La página mostrará una lista de personajes con sus imágenes, nombres y especies.
3. Puedes utilizar los botones "Previous Page" y "Next Page" para navegar entre las páginas de personajes.
4. Los personajes se obtienen de la API de Rick and Morty (https://rickandmortyapi.com/). Y aquí las documentación https://rickandmortyapi.com/documentation
5. Las imágenes de los personajes se muestran junto a sus nombres y especies.

## Código

El código del ejercicio se divide en tres archivos:

- `index.html`: Contiene la estructura HTML de la página. Tendrá la cabecera creada y los botones para pasar las páginas.
- `styles.css`: Contiene estilos CSS para dar formato a la página. Hay algunos de inicio.
- `script.js`: Contiene el código JavaScript para obtener y mostrar los personajes, así como para la paginación. Aquí introducirás todo tu código, está vacio.

## CONSEJOS

- Incia viendo que trae el fetch https://rickandmortyapi.com/api/character/?page=1. ¡Los console.log() son tus amigos!
- Una vez sepamos qué trae cada página, muéstrala en navegador. 
- Pon los estilos para que se vea similar al ejemplo.
- Haz el paginado. Piensa como añadir +1 a tu página al pulsar "Next Page" o -1 al pulsar "Previous Page" a la página en la que está para hacer el paginado.
- Revisa la documentación si tienes dudas.

Let´s CODE