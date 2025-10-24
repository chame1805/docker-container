-- mysql-init/init.sql

-- Asegura que la BD chame_db esté seleccionada (redundante pero seguro)
USE chame_db; 

-- 1. Crear la tabla 'people' si no existe
CREATE TABLE IF NOT EXISTS people (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 2. Insertar datos iniciales de prueba (para que la tabla no esté vacía al iniciar)
INSERT INTO people (first_name, last_name, created_at) VALUES 
('Ada', 'Lovelace', '2025-10-21 22:00:07'), 
('Linus', 'Torvalds', '2025-10-21 22:00:07'), 
('jose', 'jesus', '2025-10-21 22:32:11')
ON DUPLICATE KEY UPDATE id=id;