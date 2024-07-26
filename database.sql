/* Tipos de dados PostgreSQL*/
-- https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-data-types/

/**
 * Sintaxe de SQL - Postgres - Gerenciador de banco de dados 
 */
/* 1. Criar database */
CREATE DATABASE database_name;

/* 2. Criar tabela */
CREATE TABLE table_name (
    column1 datatype,
    column2 datatype,
);

CREATE TABLE livro (
    livro_id INT PRIMARY KEY,
    name VARCHAR NOT NULL,
    editora TEXT NOT NULL,
    paginas BOOLEAN NOT NULL,
    AUTOR TEXT
);


/* 3. ALTER */
-- Altera a estrutura de uma tabela existente, você usa o PostgreSQL ALTER TABLE Declaração.
ALTER TABLE table_name ADD column1 TEXT;


/* 4. TRUNCATE */
-- Comando irá deletar somente os dados da tabela
TRUNCATE TABLE table_name;


/* 5. DROP */
-- Comando deleta os dados e a tabela
DROP TABLE table_name;


/* 6. RENAME */
-- Renomear tabela
ALTER TABLE table_name RENAME to new_table_name;


/* 7. INSERT */
INSERT INTO table_name (column1, column2, column3) VALUES (value1, value2, value3); 


/* 8. SELECT */
SELECT column1, column2 FROM table_name;


/* 9. UPDATE */
UPDATE table_name SET column1 = value1, column2 = value2 WHERE condition;


/* 10. DELETE */
DELETE FROM table_name WHERE condition;