### PostgreSQL commands via terminal (PowerShell)

Access postgres:
```
psql -U username
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
  name VARCHAR(100), 
  email VARCHAR(100) UNIQUE NOT NULL,
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
DELETE users WHERE email = 'teste@example.com';
```


Quit database:
```
\q
```

Clear terminal:

```
\! cls
```
