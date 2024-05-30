require('dotenv').config()
const express = require('express')
const session = require('express-session')
const path = require('path')
const exphbs = require('express-handlebars')
const routes = require('./controllers')
const sequelize = require('./config/connection')
const db = require('./models')
const hbs = exphbs.create({})

const app = express()
const PORT = process.env.PORT || 3001;

app.use(express.json())
app.use(express.urlencoded({extended: true}))

const sess = {
    secret: 'Super secret secret',
    resave: false,
    saveUninitialized: false,
  };
  
app.use(session(sess));

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')
app.set('views', './views')

app.use(express.static(path.join(__dirname, 'public')))
app.use(routes)

const init = async () => {  
    // sync db
    await sequelize.sync({ force: false })
    console.log('DB connected!')
    
    // start server
    app.listen(PORT, () => console.log(`Server listening on PORT: ${PORT}`))
  }
  
  init()
  