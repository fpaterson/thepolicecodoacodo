# thepolicecodoacodo
Web The Police para Codo a Codo Java fullstack comisión 23058, marzo a julio 2023.

![image](https://github.com/fpaterson/thepolicecodoacodo/assets/53309219/df4223b2-ca3e-489b-8d04-a35516d31e3d)

Es una nueva versión de la página que hice para el curso de front end de Coderhouse, sólo que con algo de lógica. Como primer ejercicio, nos pidieron una página web estática, para el cual entregué la otra versión de esta web que se puede ver en mi perfil. Para esta segunda entrega se nos pidó agregarle algo de lógica mediante JS, por lo que escribí una función que valida los campos del formulario y otra que borre los mismos. Además, agregué media queries para el logo en el header, para los botones del formulario y para el texto en el footer.

Explicación de la función de validación

Recupera el elemento formulario utilizando su atributo id.
Se añade un receptor de eventos al evento de envío del formulario, que se activa cuando se envía el formulario.
Dentro de la función manejadora de eventos, se realiza la lógica de validación:
Se recuperan los valores de los campos nombre, email y mensaje.
Se comprueba si cada campo está vacío, además de la escritura correcta del mail mediante una expresión regular, utilizando .trim() para eliminar los espacios al principio y al final.
Si algún campo está vacío, se muestra una alerta y se impide el envío del formulario llamando a preventDefault().
Si todos los campos pasan la validación, se imprime una alerta con el evío del formulario y se resetea el mismo.

