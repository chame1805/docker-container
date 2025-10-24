// frontend-angel/src/viewModels/UserViewModel.js

import { useState, useEffect, useCallback } from 'react';
import UserService from '../services/UserService';

export const useUserViewModel = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [authorName, setAuthorName] = useState('Cargando...');

    // Función que llama al Modelo para obtener los usuarios
    const fetchUsers = useCallback(async () => {
        try {
            const data = await UserService.getAllUsers();
            setUsers(data);
            setError(null);
        } catch (err) {
            console.error("Error al recargar usuarios:", err);
            setError("Fallo al conectar con la API o la tabla 'people' está vacía.");
        }
    }, []);

    // Carga inicial y obtención del nombre del autor
    useEffect(() => {
        const loadInitialData = async () => {
            setLoading(true);
            // Carga el nombre del autor (requisito)
            const name = await UserService.getAuthorName();
            setAuthorName(name);
            
            await fetchUsers();
            setLoading(false);
        };

        loadInitialData();
    }, [fetchUsers]);


    // Funciones que encapsulan las llamadas al Modelo
    const handleCreateUser = async (firstName, lastName) => {
        try {
            await UserService.createUser({ first_name: firstName, last_name: lastName });
            await fetchUsers(); // Recargar la lista
            return true;
        } catch (err) {
            setError(err.message || "Error al crear.");
            return false;
        }
    };

    const handleDeleteUser = async (id) => {
        try {
            await UserService.deleteUser(id);
            await fetchUsers(); // Recargar la lista
        } catch (err) {
            setError(err.message || "Error al eliminar.");
        }
    };
    
    const handleUpdateUser = async (id, firstName, lastName) => {
        try {
            await UserService.updateUser(id, { first_name: firstName, last_name: lastName });
            await fetchUsers();
            return true;
        } catch (err) {
            setError(err.message || "Error al actualizar.");
            return false;
        }
    };

    // Retorna solo lo que la View necesita
    return {
        users,
        loading,
        error,
        authorName,
        handleCreateUser,
        handleDeleteUser,
        handleUpdateUser
    };
};