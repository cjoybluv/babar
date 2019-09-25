const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const PATHNAME = '/api/' + process.env.VUE_APP_API_VERSION

const app = express()

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

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(__dirname + '/dist/'))
  app.get('/api*/', function(req, res) {
    res.send('/api*/')
  })
  app.get(/.*/, function(req, res) {
    res.sendfile(__dirname + '/dist/index.html')
  })
}

// pre-flight CORS allow
app.options(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', process.env.CORS_ORIGIN)
  next()
})

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', process.env.CORS_ORIGIN)
  res.header('Access-Control-Allow-Credentials', true)
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  )
  res.header(
    'Access-Control-Allow-Methods',
    'PUT, POST, GET, DELETE, OPTIONS, HEAD'
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
