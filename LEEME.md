# El Piberío — primera versión

Descomprimí el ZIP y abrí `index.html` en un navegador de escritorio. Conservá las carpetas y sus nombres. La página incluye p5.js local y las imágenes, por lo que el canvas funciona sin conexión.

Archivos principales:
- `index.html`: estructura, contenidos y contenedor del canvas dentro de `<main>`.
- `estilos.css`: diseño de escritorio, Flexbox, texturas y sombras con `filter: drop-shadow()`; no contiene media queries.
- `js/sketch.js`: interpretación geométrica de El grito con p5.js.
- `js/interfaz.js`: descarga del canvas y demostración del formulario.
- `assets/`: logos originales, imágenes compartidas y textura SVG.
- `vendor/p5.min.js`: p5.js 1.11.11, distribuido bajo LGPL. Fuente: https://cdn.jsdelivr.net/npm/p5@1.11.11/lib/p5.min.js

## Tipografías
Las familias previstas son Mrs Eaves XL y Source Sans 3. Falta el enlace de TU proyecto web de Adobe Fonts; agregalo en `fuentes.css` y verificá los nombres CSS en `:root`. Esta versión usa Georgia y Segoe UI / Arial como alternativas hasta completar ese enlace. No se reutiliza el kit de The Club porque corresponde a otras fuentes.

## Alcance
Diseño para escritorio con ancho mínimo de 1100 px. El formulario valida los campos y muestra un mensaje de demostración; no tiene servidor ni envía datos. El dibujo es una interpretación inicial que se puede refinar en siguientes versiones. El botón Guardar interpretación descarga el canvas como PNG.

Marca: archivos suministrados por el equipo, conservados sin modificaciones. Imágenes: carpeta de Google Drive compartida. Textura: grano procedural SVG, sin imagen externa.

Referencias: https://www.munch.no/en/the-scream/ y https://www.culturagenial.com/es/edvard-munch-obras-para-comprender-al-padre-del-expresionismo/

Equipo: Gianella Costelaz, Manuela Lanusse y Pablo Perez. Diseño y Programación I, TP #1, 2026.
