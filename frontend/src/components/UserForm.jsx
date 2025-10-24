// frontend-angel/src/components/UserForm.jsx (Ejemplo de JSX)

import React, { useState } from 'react';

const UserForm = ({ onSubmit }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (firstName && lastName) {
            onSubmit(firstName, lastName);
            setFirstName('');
            setLastName('');
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ margin: '20px 0', padding: '20px', border: '1px solid #ddd', borderRadius: '5px' }}>
            <h3>Crear Nuevo Registro</h3>
            <input
                type="text"
                placeholder="Nombre"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Apellido"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                style={{ marginLeft: '10px' }}
            />
            <button type="submit" style={{ marginLeft: '10px', backgroundColor: '#4CAF50', color: 'white', border: 'none', padding: '10px 15px', cursor: 'pointer' }}>
                Agregar a BD
            </button>
        </form>
    );
};

export default UserForm;