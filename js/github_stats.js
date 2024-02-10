require('dotenv').config(); // Carga las variables de entorno desde el archivo .env

const fetch = require('node-fetch'); // Importa la librería fetch para hacer solicitudes HTTP

const username = process.env.GITHUB_USERNAME; // Utiliza la variable de entorno para el nombre de usuario
const token = process.env.GITHUB_TOKEN; // Utiliza la variable de entorno para el token de acceso personal

const apiUrl = `https://api.github.com/users/${username}`;

async function getStats() {
  try {
    const response = await fetch(apiUrl, {
      headers: {
        Authorization: `token ${token}` // Incluye el token de acceso personal en el encabezado de autorización
      }
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al obtener las estadísticas:', error);
  }
}

getStats().then(data => {
  console.log(data); // Imprime las estadísticas en la consola
});

// usar dotenv y node en terminal para que token funcione 
// npm install dotenv
// node github_stats.js
