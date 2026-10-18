import express from 'express';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

import rutasdenavegacion from './routes/index.js';
import authRoutes from './routes/autenticacion.js';

const app = express();

// Ruta absoluta
const __dirname = dirname(fileURLToPath(import.meta.url));
console.log(join(__dirname, '/views'));

app.set('views', join(__dirname, 'views'));
app.set('view engine', 'ejs');

// 1. Mildlewares para leer datos de formularios (crucial para req.body)
app.use(express.urlencoded({ extended: false })); // true por si luego necesitas objetos/arrays anidados
app.use(express.json());

// 2. Ruta de la carpeta publica para archivos estaticos (css, img, video)
app.use(express.static(join(__dirname, 'public')));

// 3. Ruta para llamar la aplicacion
app.use(rutasdenavegacion);
app.use(authRoutes);

// Ruta para iniciar el servidor con su respectivo puerto
app.listen(3000);
console.log('Hola mundo');
console.log('El servidor esta escuchando el puerto es', 3000);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});