
# Documentación de la API de Validación de CURP

## Introducción

La API de Validación de CURP es un servicio que permite validar y extraer información de una Clave Única de Registro de Población (CURP) de México. La CURP es un código alfanumérico único de 18 caracteres utilizado para identificar a los ciudadanos y residentes de México. La API recibe una cadena de texto que representa una CURP y devuelve información relevante si la CURP es válida.

## Requisitos del sistema

Para ejecutar esta API, es necesario tener instalado lo siguiente en el sistema:

-   Node.js (recomendado v14.x o superior)
-   NPM (recomendado v6.x o superior)
-   Un servidor web (por ejemplo, Express)

## Funcionalidad

La API proporciona un único punto de acceso para la validación de CURP:

**POST** `/curp/validate`

### Parámetros de entrada

-   `curp` (cadena, obligatorio): La CURP a validar. Debe ser una cadena de 18 caracteres que cumpla con el formato de CURP.

### Respuesta

Si la CURP es válida, la API devuelve un objeto JSON que contiene la siguiente información:

-   `valid` (booleano): `true` si la CURP es válida, `false` en caso contrario.
-   `firstNameLetter` (cadena): La letra inicial del primer nombre.
-   `lastName1Letter` (cadena): La letra inicial del primer apellido.
-   `lastName2Letter` (cadena): La letra inicial del segundo apellido.
-   `sex` (cadena): El sexo de la persona, que puede ser "Hombre" o "Mujer".
-   `birthDate` (fecha): La fecha de nacimiento de la persona en formato `YYYY-MM-DD`.

Si la CURP no es válida, la API devuelve un objeto JSON que contiene:

-   `valid` (booleano): `false`.

## Ejemplos

### Solicitud

POST `/curp/validate`

json
{"curp": "CUPU800825HCHRRN07"}

### Respuesta exitosa

json
{"valid": true,"firstNameLetter": "CU","lastName1Letter": "C","lastName2Letter": "U","sex": "Hombre","birthDate": "1980-08-25"}

### Respuesta fallida

json
{"valid": false}

## Implementación

Para implementar la API de Validación de CURP en tu propio servidor, sigue los pasos a continuación:

1.  Clona o descarga el repositorio del proyecto.
2.  Instala las dependencias del proyecto ejecutando `npm install` en la carpeta raíz del proyecto.
3.  Ejecuta el servidor con el comando `npm start`.
4.  La API estará disponible en `[http://localhost:3000/curp/validate](http://localhost:3000/curp/validate)`.

## Despliegue

Para desplegar la API en un servicio de alojamiento en la nube como Vercel, sigue los pasos a continuación:

1.  Asegúrate de que el proyecto esté configurado correctamente para trabajar con Vercel (verifica el archivo `vercel.json` y las rutas en `app.js`).
2.  Instala la CLI de Vercel ejecutando `npm i -g vercel`.
3.  Inicia sesión en Vercel ejecutando `vercel login` e

4. Ejecuta `vercel` en la carpeta raíz del proyecto para desplegar la API en Vercel. Responde las preguntas que se te hagan durante el proceso de despliegue

5. Una vez que el despliegue haya finalizado, se te proporcionará una URL única para acceder a tu API desplegada, como `[https://your-project-name.vercel.app](https://your-project-name.vercel.app)`.

## Uso de la API

Para utilizar la API de Validación de CURP en tus aplicaciones o servicios, realiza solicitudes HTTP POST a la ruta `/curp/validate` en el servidor en el que hayas desplegado la API. Asegúrate de incluir el parámetro `curp` en el cuerpo de la solicitud como se muestra en los ejemplos anteriores.

Puedes probar la API utilizando herramientas como Postman, cURL, o incluso realizar solicitudes desde aplicaciones web o móviles.

## Mantenimiento y actualizaciones

Para mantener la API de Validación de CURP actualizada y funcional, asegúrate de mantener las dependencias del proyecto actualizadas ejecutando `npm update` de vez en cuando. También, considera actualizar la versión de Node.js y NPM según sea necesario.

Si encuentras errores o necesitas implementar mejoras en la API, modifica el código fuente y realiza pruebas exhaustivas antes de desplegar los cambios en tu servidor.
