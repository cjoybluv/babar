const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const PATHNAME = '/api/v1'

const app = express()

mongoose.connect(
  process.env.MONGODB_URI ||
    'mongodb://ljunda:G0atsHeadS0up@ds011238.mlab.com:11238/heroku_b5fktx4w',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  }
)

app.use(bodyParser.json())

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
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

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(__dirname + '/dist/'))
  app.get(/.*/, function(req, res) {
    res.sendfile(__dirname + '/dist/index.html')
  })
}

app.use(PATHNAME, require('./api/routes/api'))

app.use(function(err, req, res, next) {
  // 422 = unprocessable entity
  res.status(422).send({ error: err.message })
})

app.listen(process.env.PORT || 8881, function() {
  console.log('now listening on port 8881')
})
