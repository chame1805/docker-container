// backend/src/server.js

const express = require('express');
const cors = require('cors');

// 1. CARGA DE DOTENV: DEBE OCURRIR AQUÍ
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const apiRoutes = require('./routes/apiRoutes'); 

const app = express();
const PORT = process.env.PORT || 5000; 

// Configuración detallada de CORS
const corsOptions = {
    origin: process.env.CORS_ORIGIN || 'http://54.205.62.54:3000', // Origen permitido (tu frontend)
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'], // Métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization'], // Headers permitidos
    credentials: true, // Permite credenciales
    maxAge: 86400, // Tiempo de cache preflight en segundos (24 horas)
    optionsSuccessStatus: 200 // Para navegadores antiguos que no soportan 204
};

// Aplicar CORS con las opciones configuradas
app.use(cors(corsOptions));
app.use(express.json()); 

// Monta las rutas de la API en el prefijo /api
app.use('/api', apiRoutes);

// Ruta de bienvenida simple
app.get('/', (req, res) => {
    res.send('API Node.js de Ángel Vera en ejecución. Accede a /api para las rutas.');
});

// Inicializa el servidor
app.listen(PORT, () => {
    console.log(`Servidor API Node.js corriendo en el puerto ${PORT}`);
    console.log(`Conectado a la DB: ${process.env.DB_NAME} en ${process.env.DB_HOST} como usuario ${process.env.DB_USER}`);
});