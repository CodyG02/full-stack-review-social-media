const bcrypt = require('bcryptjs')

module.exports = {
  login: async (req, res) => {
    const db = req.app.get('db')
    const { email, password } = req.body

    const existingUser = await db.check_user([email])

    if (!existingUser[0]) {
      return res.status(404).send('User does not exist')
    }

    const authenticated = bcrypt.compareSync(password, existingUser[0].password)

    if (authenticated) {
      delete existingUser[0].password

      req.session.user = existingUser[0]

      res.status(200).send(req.session.user)
    } else {
      res.status(403).send('Email or password incorrect')
    }
  },
  // login: async (req, res) => {
  //   const {email, password} = req.body
  //   const db = req.app.get('db')

  //   const existingUser = await db.check_user([email])
  //   if(!existingUser[0]){
  //     return res.status(404).send('User does not exist')
  //   }

  //   const authenticated = bcrypt.compareSync(password, existingUser[0].password)

  //   if(authenticated){
  //     delete existingUser[0].password

  //     req.session.user = existingUser[0]
  //     res.status(200).send(req.session.user)
  //   } else {
  //     res.status(403).send('Email or Password is Incorrect')
  //   }
  // },
  register: async (req, res) => {
    const {email, password} = req.body
    const db = req.app.get('db')

    const existingUser = await db.check_user([email])
    if(existingUser[0]){
      return res.status(409).send('User already exists')
    }

    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(password, salt)
//destructered array assign's newUser to the return of the bd call with its values
    const [newUser] = await db.register_user([email, hash])

    req.session.user = newUser

    res.status(200).send(req.session.user)

  },
  logout: (req, res) => {
    req.session.destroy()
    res.sendStatus(200)
  },
  getUser: (req, res) => {
    if(req.session.user){
    res.status(200).send(req.session.user)
  } else {
    res.sendStatus(404)
  }
  },
}
