### PostgreSQL commands via terminal (PowerShell)

Access postgres:
```
psql -U username
```

Create database:
```
CREATE DATABASE my_database;
```

Access database:
```
\c my_database
```

Create table:
```
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100) UNIQUE NOT NULL
);
```

Inserir dados na tabela:
```
INSERT INTO users (name, email) VALUES ('Teste', 'teste@gmail.com');
```

Access table:
```
SELECT * FROM users;
```


Quit database:
```
\q
```

Clear terminal:

```
\! cls
```
