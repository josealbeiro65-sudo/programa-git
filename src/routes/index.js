import { Router } from "express"

const router = Router()

const hora = new Date().toLocaleString('es-CO')

router.get('/contactos', (req, res) => res.render('contactos.ejs', { etiqueta: 'Pagina de contactos empresariales' }))
router.get('/sobre_nosotros', (req, res) => res.render('sobre_nosotros.ejs', { etiqueta: 'como conduzco' }))
router.get('/menu', (req, res) => res.render('menu.ejs', { etiqueta: 'Menu Empresarial' }))
router.get('/', (req, res) => res.render('index.ejs', { etiqueta: 'Mi primer sitio web con NodeJS', hora }))

// RUTA GET PARA EL LOGIN (unica con mensajes incluidos)
router.get('/login', (req, res) => {
    res.render('login', {
        etiqueta: 'Vista de Inicio de Sesion',
        mensaje: null
    });
});

// router.get('/registroExitoso', (req, res) => res,render('registroExitoso.ejs', { etiqueta: 'Aqui se mostrara el formulario para crear un nuevo usuario', hora:hora }))

// Error No2 - de la carpeta Routers/index.js debemos quitar el llamado de la ruta ya que mas abajo se esta llamando esa ruta: router.get('/login',(req.res) => res.render ('login.ejs', {etiqueta: 'Vista de inicio de sesion'}))

// RUTA GET PARA EL LOGIN (Unica y con mensajes incluido )---
router.get('/login', (req, res) => {
    res.render('login', {
        etiqueta: 'Vista de Inicio de Sesion',
        mensaje: null
    });
});

// RUTA POST PARA EL LOGIN ---
router.post('/login', (req, res) => {
    const { usuario, contrasena } = req.body;
    if (usuario === 'admin' && contrasena === '1234') {
        return res.redirect('/menu');
    }
    return res.render('login', {
        etiqueta: 'Vista de Inicio de Sesion',
        mensaje: 'Usuario o contraseña es incorrectos'
    });
});

// Mostrar formulario de registro
router.get('/registro', (req, res) => {
    res.render('registro', {
        etiqueta: 'Registro de Usuario',
        error: null
    });
});

// recibir todos los datos consolidados en el formulario de 3 pasos en el JSON
router.post('/registro', async (req, res) => {
    const { tipoDocumento, numeroDocumento, nombres, apellidos, fechaNacimiento, correo, confirmarcorreo } = req.body;

    //validar que los correos coincidan en el backend por seguridad
    if (correo !== confirmarcorreo) {
        return res.render('registro', { error: 'Los correos electrónicos no coinciden' });
    }

    try {
        // TODO: Aqui fuardas el usuario en la base de datos, (MySQL, SQlite, etc.)
        console.log("Datos de usuario a guardar:", req.body);
        // Redidirigir al login o a una pagina de exito
        res.redirect('/login');  // O la ruta que maneje tu inicio de sesion
    } catch (error) {
        console.error("error", error);
        res.render('registro', { error: 'Hubo un error al registrar el usuario' });
    }
});

export default router
