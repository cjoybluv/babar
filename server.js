const express = require('express')
// const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const PATHNAME = '/api/' + process.env.VUE_APP_API_VERSION

const app = express()

// mongodb://<dbuser>:<dbpassword>@ds011238.mlab.com:11238/heroku_b5fktx4w
// mongodb://heroku_b5fktx4w:2k2ll66asfs09k2ba3o43itc9t@ds011238.mlab.com:11238/heroku_b5fktx4w

mongoose.connect(
  process.env.NODE_ENV === 'development'
    ? process.env.MONGODB_URI
    : 'mongodb://' +
        process.env.DB_USER +
        ':' +
        process.env.DB_PASSWORD +
        '@' +
        process.env.DB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  }
)

app.use(bodyParser.json())

// app.use(function(req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*')
//   res.header('Access-Control-Allow-Credentials', true)
//   res.header(
//     'Access-Control-Allow-Headers',
//     'Origin, X-Requested-With, Content-Type, Accept, Authorization'
//   )
//   res.header(
//     'Access-Control-Allow-Methods',
//     'PUT, POST, GET, DELETE, OPTIONS, HEAD'
//   )
//   next()
// })

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(__dirname + '/dist/'))
  app.get(/.*/, function(req, res) {
    res.sendfile(__dirname + '/dist/index.html')
  })
}

// const corsOptions = {
//   origin: process.env.CORS_ORIGIN,
//   optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// }
// app.options('*', cors(corsOptions))
// app.use(cors())

app.options(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', process.env.CORS_ORIGIN)
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  )
  next()
})

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', process.env.CORS_ORIGIN) // update to match the domain you will make the request from
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  )
  next()
})

app.use(PATHNAME, require('./api/routes/api'))

app.use(function(err, req, res, next) {
  // 422 = unprocessable entity
  res.status(422).send({ error: err.message })
})

app.listen(process.env.PORT || 8881, function() {
  console.log('now listening on port 8881')
})
