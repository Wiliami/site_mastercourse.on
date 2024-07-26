### PostgreSQL commands via terminal


<!-- This content will not appear in the rendered Markdown -->
> psql -U postgres

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

Access table:
```
SELECT * FROM users;
```

Quit postgres:
<!-- Quit databas -->
```
\q
```
