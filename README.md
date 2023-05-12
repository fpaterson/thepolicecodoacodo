# thepolicecodoacodo
Web The Police para Codo a Codo

Es una nueva versión de la página que hice para el cursod e front end de Coderhouse, sólo que con algo de lógica. Como primer ejericio, nos pidieron una página web estática, para el cual entregué la otra versión de esta web que se puede ver en mi perfil. Para esta segunda entrega se nos pidó agregarle algo de lógica mediante JS, por lo que escribí una función que valida los campos del formulario.

Explicación de la función

El código JavaScript espera primero a que se cargue el contenido del DOM utilizando el listener del evento DOMContentLoaded.
Recupera el elemento formulario y el elemento botón de envío utilizando sus respectivos atributos id.
Se añade un receptor de eventos al evento de envío del formulario, que se activa cuando se envía el formulario.
Dentro de la función manejadora de eventos, se realiza la lógica de validación:
Se recuperan los valores de los campos nombre, email y mensaje.
Se comprueba si cada campo está vacío, además de la escritura correcta del mail mediante una expresión regular, utilizando .trim() para eliminar los espacios al principio y al final.
Si algún campo está vacío, se muestra una alerta y se impide el envío del formulario llamando a preventDefault().
Si todos los campos pasan la validación, se envía el formulario.
