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
  pool.query('SELECT * FROM adopciones.users ORDER BY userid ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

//GET one user - Seleccionamos un usuario mediante su id
const getUserById = (request, response) => {
  const id = parseInt(request.params.userid) //No sé si aquí es request.params.userid o request.params.id

  pool.query('SELECT * FROM adopciones.users WHERE userid = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

//POST new user - Creamos un nuevo usuario
const createUser = (request, response) => {
  const { nickname, email, telephone, name, surname, role, es_refugio } = request.body

  pool.query('INSERT INTO adopciones.users (nickname, email, telephone, name, surname, role, es_refugio) VALUES ($1, $2, $3, $4, $5, $6, $7)', [nickname, email, telephone, name, surname, role, es_refugio], (error, results) => {
    if (error) {
      throw error
    }
    //ERROR. Si ponemos response.status(201).send(`User added with ID: ${result.insertId}`) da error de result is not defined
    response.status(201)
  })
}

//PUT update user - Actualizamos los datos de un usuario (Solo se podrá cambiar email y teléfono POR EJEMPLO)
const updateUser = (request, response) => {
  const id = parseInt(request.params.userid)
  const { email, telephone } = request.body

  pool.query(
    'UPDATE adopciones.users SET email = $1, telephone = $2 WHERE userid = $3',
    [email, telephone, id],
    (error, results) => {
      if (error) {
        console.log(error)
        throw error
      }
      //response.status(200).send(`User modified with ID: ${id}`)
      response.status(200)
    }
  )
}

//DELETE user - Borramos un usuario
const deleteUser = (request, response) => {
  const id = parseInt(request.params.userid)

  pool.query('DELETE FROM adopciones.users WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`User deleted with ID: ${id}`)
  })
}


//Función de login (falta comprobación de contraseña)
const loginUser = (request, response) => {
  const data = request.body;

  if (data != null){
    const user = data['user'];
    const password = data['password'];
  }

  pool.query('SELECT password FROM adopciones.users WHERE nickname = $user OR email = $user', [user], (error, results) => {
   console.log(results.rows);
  });
    
}


//Esto sirve para poder usar estas funciones en app.js
module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  loginUser
}
