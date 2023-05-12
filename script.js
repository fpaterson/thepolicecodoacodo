/*Explicación del código:

El código JavaScript espera primero a que se cargue el contenido del DOM utilizando el listener del evento DOMContentLoaded.
Recupera el elemento formulario y el elemento botón de envío utilizando sus respectivos atributos id.
Se añade un receptor de eventos al evento de envío del formulario, que se activa cuando se envía el formulario.
Dentro de la función manejadora de eventos, se realiza la lógica de validación:
Se recuperan los valores de los campos nombre, email y mensaje.
Se comprueba si cada campo está vacío, además de la escritura correcta del mail mediante una expresión regular, utilizando .trim() para eliminar los espacios al principio y al final.
Si algún campo está vacío, se muestra una alerta y se impide el envío del formulario llamando a preventDefault().
Si todos los campos pasan la validación, se envía el formulario.
*/
document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('form');

    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Impide que se envíe si no es válida

      // Lógica de validación
      var nombreInput = document.getElementById('nombre');
      var emailInput = document.getElementById('email');
      var messageTextarea = document.getElementsByName('message')[0];

      if (nombreInput.value.trim() === '') { //recorta los espacios en balnco, si los hubiera
        alert('Por favor ingrese su nombre.');
        return;
      }

      if (emailInput.value.trim() === ""){
        alert('Por favor ingrese su email.');
        return;
      }

      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailInput.value.trim())) {
        alert('Por favor ingrese una dirección de email válida.');
        return;
      }

      if (messageTextarea.value.trim() === '') {
        alert('Por favor ingrese su mensaje.');
        return;
      }

      // Formulario válido, se puede enviar.
      form.submit();
    });
  });






