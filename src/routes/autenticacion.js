import { Router } from "express";
const router = Router();

// Ruta POST para procesar el login
//error hay que quitar el api de la extencion loginn --- router.post('/api/login',(req.res) => {
    //Error No2 - fe la carpeta Routers/index.js debemos quitar el llamado de la ruta ya que mas abajo se esta
    //llamando esa ruta: router.get('/login',(req.res) => res.render ('login.ejs', {etiqueta: 'Vista de inicio de sesion'}))


/// 3. Botón "Crear usuario" - Muestra el formulario de registro
router.get('/registro', (req, res) => {
    res.render('registro', {
        etiqueta: 'Crear Usuario'
    });
});

// Procesa el envío del formulario de registro
router.post('/registro', (req, res) => {
    console.log("Datos recibidos: ", req.body);
    // Aquí luego irá la lógica para guardar el usuario (validaciones, base de datos, etc.)
    res.send("Datos recibidos correctamente (pendiente de guardar en base de datos)");
});

// 4. Enlace para "Restablecer contraseña"
router.get('/recuperar-password', (req, res) => {
    res.render('recuperar-password', {
        etiqueta: 'Restablecer Contraseña'
    });
});

// 5. Enlace para "Recordar usuario"
router.get('/recordar-usuario', (req, res) => {
    res.render('recordar-usuario', {
        etiqueta: 'Recordar Usuario'
    });
});

// Ruta de ejemplo para el exito del login
router.get('/dashboard', (req, res) => {
    res.send("Bienvenido al sistema");
});


export default router; 