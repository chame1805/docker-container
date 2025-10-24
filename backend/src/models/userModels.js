// backend/src/models/userModel.js

// Importación local, correcto.
const db = require('./db'); 

const userModel = {
    // READ ALL: Tabla 'people'
    getAll: async () => {
        const sql = 'SELECT id, first_name, last_name, created_at FROM people ORDER BY id DESC';
        return await db.query(sql);
    },

    // READ ONE: Tabla 'people'
    getById: async (id) => {
        const sql = 'SELECT id, first_name, last_name, created_at FROM people WHERE id = ?';
        const result = await db.query(sql, [id]);
        return result[0];
    },

    // CREATE: Tabla 'people'
    create: async (firstName, lastName) => {
        const sql = 'INSERT INTO people (first_name, last_name) VALUES (?, ?)';
        const result = await db.query(sql, [firstName, lastName]);
        return result.insertId;
    },

    // UPDATE: Tabla 'people'
    update: async (id, firstName, lastName) => {
        const sql = 'UPDATE people SET first_name = ?, last_name = ? WHERE id = ?';
        const result = await db.query(sql, [firstName, lastName, id]);
        return result.affectedRows;
    },

    // DELETE: Tabla 'people'
    remove: async (id) => {
        const sql = 'DELETE FROM people WHERE id = ?';
        const result = await db.query(sql, [id]);
        return result.affectedRows;
    }
};

module.exports = userModel;