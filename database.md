### Acessando Postgres via Terminal

<!-- Entrar no postgres -->
> psql -U postgres

<!-- Criar o banco de dados -->
> CREATE DATABASE meu_banco_de_dados;

<!-- Acessar o banco de dados -->
> \c meu_banco_de_dados

<!-- Criar Tabela  -->
> CREATE TABLE users (
>  id SERIAL PRIMARY KEY,
>  name VARCHAR(100),
>  email VARCHAR(100) UNIQUE NOT NULL
> );

<!-- Acessar Tabela  -->
> SELECT * FROM users;

<!-- Sair do banco de dados -->
> \q