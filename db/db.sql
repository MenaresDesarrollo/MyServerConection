CREATE DATABASE IF NOT EXISTS libronotas;

USE libronotas;

CREATE TABLE notas (
    id INT(11) not null auto_increment,
    escritor VARCHAR(45) default null,
    nota VARCHAR(100) default null,
    PRIMARY KEY(id)
)

DESCRIBE libronotas;