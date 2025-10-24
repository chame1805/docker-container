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
// ... (resto del código)

// Middleware
app.use(cors()); 
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