const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./queries')
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//ERROR No sabemos que es esto, pero sin esto da error => Cannot destructure property 'nickname' of 'request.body' as it is undefined
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/users', db.getUsers)
app.get('/users/:userid', db.getUserById)
app.post('/users', db.createUser)
app.put('/users/:userid', db.updateUser)
app.delete('/users/:userid', db.deleteUser)
app.post('/login', db.loginUser);

app.listen(port, () => {
  console.log('Example app listening on port ${port}')
})