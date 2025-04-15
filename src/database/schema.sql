CREATE DATABASE usuarios;

\c usuarios;

CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL,
);

CREATE TABLE post (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(100) NOT NULL,
    descricao TEXT NOT NULL,
    photo TEXT,
    usuario_id INTEGER REFERENCES usuarios(id) ON DELETE CASCADE
);

INSERT INTO  usuarios (name, email, senha) VALUES
('Flavia', 'flavia@example.com', 'P@lmeiras'),
('Giovanna', 'giovanna@example.com', 'IceCreamPopCorn'),
('Julia', 'julia@example.com', 'jujuDoPix');


INSERT INTO post (titulo, descricao,  usuario_id) VALUES
('Post 1', 'Acabou a bateria do meu fone', 1),
('Post 2', 'Ice Cream and PopConr sinners', 2),
('Post 3', 'Que dia lixo', 3);