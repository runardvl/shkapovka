const bodyParser = require('body-parser')
const app = require('express')()
const axios = require('axios')

app.use(bodyParser.json())
// Set CORS headers on responses to any requests whose URL starts with
// '/api'
app.use('/api', require('cors')())

const ownerId = '16800911'
const animalsAlbumId = '278045307'
const areaAlbumId = '278045247'

// vk api animals album endpoint
app.get('/api/animals', (req, res) => {
  axios
    .get(
      `https://api.vk.com/method/photos.get?owner_id=${ownerId}&album_id=${animalsAlbumId}&access_token=${process.env.VK_TOKEN}&v=5.52`
    )
    .then((response) => {
      res.send(response.data.response)
    })
})

// vk api area album endpoint
app.get('/api/area', (req, res) => {
  axios
    .get(
      `https://api.vk.com/method/photos.get?owner_id=${ownerId}&album_id=${areaAlbumId}&access_token=${process.env.VK_TOKEN}&v=5.52`
    )
    .then((response) => {
      res.send(response.data.response)
    })
})

module.exports = app
