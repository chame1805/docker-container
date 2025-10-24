// frontend-angel/src/App.jsx

import React from 'react';
import { useUserViewModel } from './viewModels/UserViewModel';
import UserForm from './components/UserForm';

// Componente para mostrar la lista (para mantener el ejemplo breve, lo integramos aquí)
const UserList = ({ users, onDelete, onUpdate }) => {
    // Implementación de la tabla de visualización, edición y eliminación...
    // Puedes usar el código de UserList.jsx que te di antes.
    return (
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
            <thead>
                <tr style={{ backgroundColor: '#f2f2f2' }}><th style={{ padding: '10px' }}>ID</th><th>Nombre</th><th>Apellido</th><th>Acciones</th></tr>
            </thead>
            <tbody>
                {users.map((user) => (
                    <tr key={user.id}>
                        <td style={{ padding: '10px', border: '1px solid #ddd' }}>{user.id}</td>
                        <td style={{ padding: '10px', border: '1px solid #ddd' }}>{user.first_name}</td>
                        <td style={{ padding: '10px', border: '1px solid #ddd' }}>{user.last_name}</td>
                        <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                            <button onClick={() => onDelete(user.id)} style={{ backgroundColor: 'red', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer' }}>Eliminar</button>
                            {/* Aquí iría el botón de Editar */}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};


function App() {
    // 1. Usa el ViewModel para acceder a los datos y la lógica
    const { 
        users, 
        loading, 
        error, 
        authorName, // REQUISITO: Nombre del autor
        handleCreateUser, 
        handleDeleteUser,
        handleUpdateUser // Aunque no se usa en la lista simple, está en el ViewModel
    } = useUserViewModel();

    return (
        <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
            <header style={{ backgroundColor: '#007bff', color: 'white', padding: '15px', borderRadius: '5px' }}>
                <h1>Microservicio Frontend (React MVVM)</h1>
                {/* REQUISITO: Tu nombre visible en el Frontend */}
                <p>Implementación y CRUD por: <strong>{authorName}</strong></p> 
            </header>

            <main>
                {/* Indicadores de estado de la View */}
                {loading && <p>Cargando datos de la API...</p>}
                {error && <p style={{ color: 'red', fontWeight: 'bold' }}>⚠️ Error: {error}</p>}

                {/* Componente para la operación de creación */}
                <UserForm onSubmit={handleCreateUser} />

                {/* Componente para la visualización (si no hay error) */}
                {!loading && !error && (
                    <>
                        <h2>Registros en la Base de Datos ('people')</h2>
                        <UserList 
                            users={users} 
                            onDelete={handleDeleteUser} 
                            onUpdate={handleUpdateUser} 
                        />
                    </>
                )}
            </main>
        </div>
    );
}

export default App;