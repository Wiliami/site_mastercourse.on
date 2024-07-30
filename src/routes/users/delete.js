import pool from '../../config/database.js'

/**
 * @param {String} table Nome da tabela no banco de dados
 * @param {String} column Nome da coluna que será deletada na tabela
 */
const deleteItem = async (table, column, value) => {
  try {
    const query = `DELETE FROM ${table} WHERE ${column} = $1 RETURNING *`
    const res = await pool.query(query, [value])
    if (res.rowCount > 0) {
      console.log('Item exlcluído com sucesso:', res.rows[0])
    } else {
      console.log(`Nenhum item encontrado com o ${column}:`, value)
    }
  } catch (err) {
    console.error('Erro ao deletar item:', err)
  }
};

console.log(deleteItem("users", "email", "teste@gmail.com"))