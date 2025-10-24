// frontend-angel/src/components/UserList.jsx

import React, { useState } from 'react';

const UserList = ({ users, onDelete, onUpdate }) => {
    const [editingId, setEditingId] = useState(null);
    const [editFirstName, setEditFirstName] = useState('');
    const [editLastName, setEditLastName] = useState('');

    const startEdit = (user) => {
        setEditingId(user.id);
        setEditFirstName(user.first_name);
        setEditLastName(user.last_name);
    };

    const saveEdit = (id) => {
        if (editFirstName && editLastName) {
            onUpdate(id, editFirstName, editLastName);
            setEditingId(null);
        }
    };

    if (users.length === 0) {
        return <p>No hay usuarios registrados.</p>;
    }

    return (
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
            <thead>
                <tr style={{ backgroundColor: '#f2f2f2' }}>
                    <th style={{ border: '1px solid #ddd', padding: '8px' }}>ID</th>
                    <th style={{ border: '1px solid #ddd', padding: '8px' }}>Nombre</th>
                    <th style={{ border: '1px solid #ddd', padding: '8px' }}>Apellido</th>
                    <th style={{ border: '1px solid #ddd', padding: '8px' }}>Creado en</th>
                    <th style={{ border: '1px solid #ddd', padding: '8px' }}>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => (
                    <tr key={user.id}>
                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>{user.id}</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                            {editingId === user.id ? (
                                <input value={editFirstName} onChange={(e) => setEditFirstName(e.target.value)} />
                            ) : (
                                user.first_name
                            )}
                        </td>
                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                            {editingId === user.id ? (
                                <input value={editLastName} onChange={(e) => setEditLastName(e.target.value)} />
                            ) : (
                                user.last_name
                            )}
                        </td>
                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                             {new Date(user.created_at).toLocaleDateString()}
                        </td>
                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                            {editingId === user.id ? (
                                <button onClick={() => saveEdit(user.id)} style={{ backgroundColor: 'green', color: 'white', marginRight: '5px' }}>Guardar</button>
                            ) : (
                                <button onClick={() => startEdit(user)} style={{ marginRight: '5px' }}>Editar</button>
                            )}
                            <button onClick={() => onDelete(user.id)} style={{ backgroundColor: 'red', color: 'white' }}>Eliminar</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default UserList;