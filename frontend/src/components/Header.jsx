// frontend-angel/src/components/Header.jsx

import React from 'react';

const Header = ({ authorName }) => {
    return (
        <header style={{ padding: '20px', backgroundColor: '#333', color: 'white' }}>
            <h1>CRUD de Personas (MVVM en React)</h1>
            <p>Implementado por: <strong>{authorName}</strong></p>
            <p>El nombre se obtiene desde el endpoint /api/vera/nombre del Backend.</p>
        </header>
    );
};

export default Header;