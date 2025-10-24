// backend/src/controllers/userController.js

// ************ CORRECCIÓN DOBLE ************
// 1. Usa la sintaxis CommonJS: 'const ... = require(...)'.
// 2. La ruta es singular: '../models/userModel'.
const userModel = require('../models/userModels'); 
// ********************************************

const userController = {
    // Listar todos (GET /api/users)
    listAll: async (req, res) => {
        try {
            const users = await userModel.getAll();
            res.json(users);
        } catch (error) {
            console.error("Error al listar usuarios:", error);
            res.status(500).json({ message: "Error interno al obtener usuarios." }); 
        }
    },

    // Obtener por ID (GET /api/users/:id)
    getOne: async (req, res) => {
        try {
            const user = await userModel.getById(req.params.id);
            if (user) {
                res.json(user);
            } else {
                res.status(404).json({ message: "Usuario no encontrado." });
            }
        } catch (error) {
            console.error("Error al obtener usuario:", error);
            res.status(500).json({ message: "Error interno del servidor." });
        }
    },

    // Crear (POST /api/users)
    create: async (req, res) => {
        try {
            const { first_name, last_name } = req.body;
            if (!first_name || !last_name) {
                return res.status(400).json({ message: "Se requieren first_name y last_name." });
            }
            const newId = await userModel.create(first_name, last_name);
            res.status(201).json({ id: newId, message: "Usuario creado con éxito." });
        } catch (error) {
            console.error("Error al crear usuario:", error);
            res.status(500).json({ message: "Error interno al crear usuario." });
        }
    },

    // Actualizar (PUT /api/users/:id)
    update: async (req, res) => {
        try {
            const { first_name, last_name } = req.body;
            const affectedRows = await userModel.update(req.params.id, first_name, last_name);

            if (affectedRows > 0) {
                res.json({ message: "Usuario actualizado con éxito." });
            } else {
                res.status(404).json({ message: "Usuario no encontrado para actualizar." });
            }
        } catch (error) {
            console.error("Error al actualizar usuario:", error);
            res.status(500).json({ message: "Error interno al actualizar usuario." });
        }
    },

    // Eliminar (DELETE /api/users/:id)
    remove: async (req, res) => {
        try {
            const affectedRows = await userModel.remove(req.params.id);

            if (affectedRows > 0) {
                res.json({ message: "Usuario eliminado con éxito." });
            } else {
                res.status(404).json({ message: "Usuario no encontrado para eliminar." });
            }
        } catch (error) {
            console.error("Error al eliminar usuario:", error);
            res.status(500).json({ message: "Error interno al eliminar usuario." });
        }
    }
};

module.exports = userController;