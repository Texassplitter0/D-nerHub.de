CREATE DATABASE IF NOT EXISTS doenerhub;

USE doenerhub;

CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(255) NOT NULL
);

-- Example user (password hashed with bcrypt)
-- Replace this placeholder with an actual hash
INSERT INTO users (username, password) VALUES 
('testuser', '$2b$12$eH7shvTtC/CzzFsGjQD4eOEJ67RTcW/V/9nOEoO58P58HUgD2FmN6'); -- Password: 'examplepassword'