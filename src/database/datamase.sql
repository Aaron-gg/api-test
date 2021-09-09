// Estructura de la base de datos, solo es una guia, la base sera creada desde el servidor
CREATE DATABASE firstapi;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    email TEXT
);

INSERT INTO users(name, email) VALUES 
    ('joe', 'joe@gml.com'),
    ('raul', 'raul@gml.com');