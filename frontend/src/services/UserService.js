// frontend-angel/src/services/UserService.js

// Usamos ruta relativa, la URL base se configura con el proxy de React o Docker Compose.
const API_BASE_URL = '/api';

const UserService = {
    // READ ALL
    getAllUsers: async () => {
        const response = await fetch(`${API_BASE_URL}/users`);
        if (!response.ok) {
            throw new Error(`Error al cargar datos: ${response.statusText}`);
        }
        return response.json();
    },

    // CREATE
    createUser: async (user) => {
        const response = await fetch(`${API_BASE_URL}/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        });
        if (!response.ok) {
             throw new Error(`Error al crear usuario: ${response.statusText}`);
        }
        return response.json();
    },

    // UPDATE
    updateUser: async (id, user) => {
        const response = await fetch(`${API_BASE_URL}/users/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        });
        if (!response.ok) {
             throw new Error(`Error al actualizar usuario: ${response.statusText}`);
        }
        return response.json();
    },

    // DELETE
    deleteUser: async (id) => {
        const response = await fetch(`${API_BASE_URL}/users/${id}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
             throw new Error(`Error al eliminar usuario: ${response.statusText}`);
        }
        return response.json();
    },
    
    // REQUISITO: Endpoint con el Apellido
    getAuthorName: async () => {
        const response = await fetch(`${API_BASE_URL}/vera/nombre`);
        if (!response.ok) {
            return "Error al cargar autor";
        }
        const data = await response.json();
        return data.nombre_completo; // Retorna "Ángel Vera"
    }
};

export default UserService;