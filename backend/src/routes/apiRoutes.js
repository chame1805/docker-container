// backend/src/routes/apiRoutes.js

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// --- Rutas del CRUD ---
router.get('/users', userController.listAll);
router.get('/users/:id', userController.getOne);
router.post('/users', userController.create);
router.put('/users/:id', userController.update);
router.delete('/users/:id', userController.remove);

// --- Endpoint Requerido: Apellido (Vera) ---
router.get('/vera/nombre', (req, res) => {
    res.json({ nombre_completo: "Ángel Vera" });
});

module.exports = router;