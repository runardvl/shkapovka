const express = require('express')
const app = express()

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Origin', 'GET, PUT, POST, DELETE')
  res.header('Access-Control-Allow-Origin', 'Content-Type')
  next()
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

module.exports = {
  path: '/api',
  handler: app,
}
