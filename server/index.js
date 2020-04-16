const express = require('express')
const massive = require('massive')
require('dotenv').config()
const session = require('express-session')
const postCtrl = require('./controller')
const authCtrl = require('./authController')
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env

const app = express()

app.use(express.json())

app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {maxAge: 1000 * 60 * 60* 24 * 30}
}))

app.post('/auth/login', authCtrl.login)
app.post('/auth/register', authCtrl.register)
app.delete('/auth/logout', authCtrl.logout)
app.get('/auth/user', authCtrl.getUser)

app.get('/api/posts', postCtrl.getPosts)
app.post('/api/posts', postCtrl.addPost)
app.put('/api/posts/:id', postCtrl.editPost)
app.delete('/api/posts/:id', postCtrl.deletePost)

massive({
  connectionString: CONNECTION_STRING,
  ssl: {
    rejectUnauthorized: false,
  },
}).then((dbInstance) => {
  app.set('db', dbInstance)
  console.log('DB Connected')
  app.listen(SERVER_PORT, () =>
    console.log(`listening to port ${SERVER_PORT}`)
  )
})