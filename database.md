### PostgreSQL commands via terminal (PowerShell)

Access postgres:
```
psql -U postgres
```

List tables:
```
\dt
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
  name VARCHAR(100) NOT NULL, 
  email VARCHAR(100) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);
```

CREATE:
```
INSERT INTO users (name, email) VALUES ('Teste', 'teste@gmail.com');
```

READ:
```
SELECT * FROM users;
```

UPDATE:
```
UPDATE users SET name = 'Teste' WHERE email = 'teste@example.com';
```

DELETE:
```
DELETE FROM users WHERE email = 'teste@example.com';
```


Quit database:
```
\q
```

Clear terminal:

```
\! cls
```
