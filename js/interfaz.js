// Demostración local: valida los campos y comunica que no hay envío real.
document.getElementById('formulario-contacto').addEventListener('submit', function (evento) {
  evento.preventDefault();
  document.getElementById('estado-formulario').textContent = '¡Gracias por compartir tu idea! Esta es una demostración: el mensaje no se envió.';
});
window.addEventListener('load', function () {
  if (!window.p5) {
    document.getElementById('estado-canvas').textContent = 'No se pudo cargar p5.js. Verificá el archivo vendor/p5.min.js.';
  }
});
