// backend/src/models/db.js

const mysql = require('mysql2/promise');

// La configuración está bien, ya que server.js ahora asegura que process.env esté cargado.
const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
};

// Crea un pool de conexiones
const pool = mysql.createPool(dbConfig);

// Función para ejecutar consultas
async function query(sql, params) {
    const [rows] = await pool.execute(sql, params); 
    return rows;
}

module.exports = {
    query
};