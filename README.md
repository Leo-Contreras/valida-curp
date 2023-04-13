
Documentación de la API de Validación de CURP
Introducción
La API de Validación de CURP es un servicio que permite validar y extraer información de una Clave Única de Registro de Población (CURP) de México. La CURP es un código alfanumérico único de 18 caracteres utilizado para identificar a los ciudadanos y residentes de México. La API recibe una cadena de texto que representa una CURP y devuelve información relevante si la CURP es válida.

Requisitos del sistema
Para ejecutar esta API, es necesario tener instalado lo siguiente en el sistema:

Node.js (recomendado v14.x o superior)
NPM (recomendado v6.x o superior)
Un servidor web (por ejemplo, Express)
Funcionalidad
La API proporciona un único punto de acceso para la validación de CURP:

POST /curp/validate

Parámetros de entrada
curp (cadena, obligatorio): La CURP a validar. Debe ser una cadena de 18 caracteres que cumpla con el formato de CURP.
Respuesta
Si la CURP es válida, la API devuelve un objeto JSON que contiene la siguiente información:

valid (booleano): true si la CURP es válida, false en caso contrario.
firstNameLetter (cadena): La letra inicial del primer nombre.
lastName1Letter (cadena): La letra inicial del primer apellido.
lastName2Letter (cadena): La letra inicial del segundo apellido.
sex (cadena): El sexo de la persona, que puede ser "Hombre" o "Mujer".
birthDate (fecha): La fecha de nacimiento de la persona en formato YYYY-MM-DD.
Si la CURP no es válida, la API devuelve un objeto JSON que contiene:

valid (booleano): false.
Ejemplos
Solicitud
POST /curp/validate

json
Copy code
{
  "curp": "CUPU800825HCHRRN07"
}
Respuesta exitosa
json
Copy code
{
  "valid": true,
  "firstNameLetter": "CU",
  "lastName1Letter": "C",
  "lastName2Letter": "U",
  "sex": "Hombre",
  "birthDate": "1980-08-25"
}
Respuesta fallida
json
Copy code
{
  "valid": false
}
Implementación
Para implementar la API de Validación de CURP en tu propio servidor, sigue los pasos a continuación:

Clona o descarga el repositorio del proyecto.
Instala las dependencias del proyecto ejecutando npm install en la carpeta raíz del proyecto.
Ejecuta el servidor con el comando npm start.
La API estará disponible en http://localhost:3000/curp/validate.
Despliegue
Para desplegar la API en un servicio de alojamiento en la nube como Vercel, sigue los pasos a continuación:

Asegúrate de que el proyecto esté configurado correctamente para trabajar con Vercel (verifica el archivo vercel.json y las rutas en app.js).
Instala la CLI de Vercel ejecutando npm i -g vercel.
Inicia sesión en Vercel ejecutando vercel login e
