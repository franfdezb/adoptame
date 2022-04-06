//Conexión con la BD
const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'adopciones',
  password: 'postgres',
  port: 5447,
})

//GET All users - Seleccionamos todos los usuarios
const getUsers = (request, response) => {
  pool.query('SELECT * FROM user ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

//GET one user - Seleccionamos un usuario mediante su id
const getUserById = (request, response) => {
  const id = parseInt(request.params.userid) //No sé si aquí es request.params.userid o request.params.id

  pool.query('SELECT * FROM user WHERE userid = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

//PUT new user - Creamos un nuevo usuario
const createUser = (request, response) => {
  const { userid, nickname, email, telephone, name, surname, role, es_refugio } = request.body

  pool.query('INSERT INTO user (userid, nickname, email, telephone, name, surname, role, es_refugio) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)', [userid, nickname, email, telephone, name, surname, role, es_refugio], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`User added with ID: ${result.insertId}`)
  })
}

//PUT update user - Actualizamos los datos de un usuario (Solo se podrá cambiar email y teléfono POR EJEMPLO)
const updateUser = (request, response) => {
  const id = parseInt(request.params.userid)
  const { email, telephone } = request.body

  pool.query(
    'UPDATE user SET email = $1, telephone = $2 WHERE id = $3',
    [email, telephone, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User modified with ID: ${id}`)
    }
  )
}

//DELETE user - Borramos un usuario
const deleteUser = (request, response) => {
  const id = parseInt(request.params.userid)

  pool.query('DELETE FROM user WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`User deleted with ID: ${id}`)
  })
}
