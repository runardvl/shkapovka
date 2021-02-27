const bodyParser = require('body-parser')
const app = require('express')()
const cors = require('cors')

app.use(cors())
app.use(bodyParser.json())

app.all('/getJSON', (req, res) => {
  res.json({ data: 'data' })
})

module.exports = app
