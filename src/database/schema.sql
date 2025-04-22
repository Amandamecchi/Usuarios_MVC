CREATE DATABASE users;
\c users;

CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    senha VARCHAR(100) NOT NULL
);

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    usuario_id INTEGER REFERENCES usuarios(id),
    titulo VARCHAR(100) NOT NULL,
    conteudo TEXT NOT NULL
);

INSERT INTO usuarios (nome, email, senha) VALUES
('Julia', 'joao@gmail.com', '12@3');
('Giovanna', 'giovanna@gmail.com', '9876');

INSERT INTO posts (usuario_id, titulo, conteudo) VALUES
(1, 'Meu primeiro post', 'Conteudo do meu primeiro post');

SELECT * FROM posts;