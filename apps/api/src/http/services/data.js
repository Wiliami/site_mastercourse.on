import pool from '../config/database.js'

/** CREATE
 * @param {String} table Nome da tabela no formato {String} 
 * @param {Object} data - Dados para serem passados como segundo parâmetro da função do tipo {objeto}
 * @param {value1} data.property1 Você pode passar várias propriedades para o objeto para serem enviados para o banco
 * @param {value2} data.property2 Inserir a segunda propriedade se caso for necessário e se assim por diante
*/
export const create = async (table, data) => {
    try {

        const columns = Object.keys(data)
        const values = Object.values(data)
        const placeholders = columns.map((_, index) => `$${index + 1}`)


        const query = `INSERT INTO ${table} (${columns.join(', ')}) VALUES (${placeholders.join(', ')}) RETURNING *`;

        console.log(`Query: ${query}`)
        console.log(`Values: ${values}`)

        const res = await pool.query(query, values)
        if(res.rowCount > 0) {
          console.log('Recurso criado com sucesso:', res.rows[0])
        } else {
          console.log('Nenhum recurso criado')
        }  
    } catch (error) {
        console.error('Erro ao tentar criar recurso:', error)
    }
}


/**
 * READ
 * @param {String} table Nome da tabela no banco de dados em formato string
 */
export const read = async (table) => {
    const query = `SELECT * FROM ${table}`

    try {
        const result = await pool.query(query)
        return result.rows

    } catch (error) {
        console.error('Erro ao buscar itens:', error)
        throw error
    }
}

/**
 * UPDATE
 * @param {string} table - Nome da tabela
 * @param {object} data - Os dados que serão atualizados na tabela
 * @param {string} fieldIDUpdate - Nome ID coluna
 * @returns {promise<data>}
 */
export const update = async (table, data) => {
  try {

    if(!table || !data || typeof data !== 'object') {
      throw new Error('Parâmetros inválidos: "table" dever ser uma string e "data" um objeto.')
    }

    const { userId, ...fields } = data;
    if(!userId) {
      throw new Error('O objeto "data" deve conter um campo "userId" para localizar o registro.')
    }

    const columns = Object.keys(fields);
    const values = Object.values(fields);
    const setClause = columns.map((key, index) => `"${key}" = $${index + 1}`).join(', '); // nome_coluna = 'valor_atualizado'

    // 'update TABLE_NAME set email where userId = 1'
    const query = `update "${table}" set ${setClause} where userid = $${columns.length + 1}`;
    // const params = [userId,...values]
    const params = [...values, userId]
    console.log('Params: ',typeof params)
      
    console.log(`Query: ${query}`)
    console.log(`Values: ${values}`)


    const res = await pool.query(query, params)
    console.log(res)
    if(res.rowCount > 0) {
      console.log('Item atualizado com sucesso: ', res.rows[0])
    } else {
      console.log('Nenhum item foi atualizado')
    }


    
  } catch (err) {
    console.error('Erro ao atualizar recurso na tabela: ', err)
    throw err
  }
}


/**
 * DELETE 
 * @param {String} table Nome da tabela no banco de dados
 * @param {String} column Nome da coluna onde será aplicada a condição de exclusão
 * @param {String} value Valor que será deletado na tabela
 */
export const _delete = async (table, column, value) => {
  try {
    const query = `DELETE FROM ${table} WHERE ${column} = $1 RETURNING *`
    const res = await pool.query(query, [value])

    if (res.rowCount > 0 ) {
      console.log('Registro encontrado:', res.rowCount)
      console.log('Item excluído com sucesso:', res.rows[0])
    } else {
      console.log(`Nenhum item encontrado com o ${column}:`, value)
      return null
    }

  } catch (err) {
    console.error('Erro ao deletar item:', err)
    throw err
  }
};
