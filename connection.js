// import pg from 'pg'

// const { Client } = pg
// const client = new Client()
// await client.connect()


// try {
//     const res = await client.query('SELECT $1::text as massage', ['Hello World'])
//     console.log(res.rows[0].message)
// } catch (err) {
//     console.error(err)
// } finally {
//     await client.end()
// }

import pg from 'pg'
const { Client } = pg
 
const client = new Client({
  user: 'database-user',
  password: 'secretpassword!!',
  host: 'my.database-server.com',
  port: 5334,
  database: 'database-name',
})


console.log(client)