const express = require('express')
const app = express()
const axios = require('axios')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.post('/api/submit', (req, res) => {
  const userInfo = req.body
  // eslint-disable-next-line no-console
  console.log(userInfo)
  res.status(201).send('Form has been submitted')
  axios
    .get(
      encodeURI(
        `https://api.telegram.org/bot${process.env.TG_BOT_TOKEN}/sendMessage?chat_id=-512539103&parse_mode=html&text=Имя: <b>${userInfo.name}</b> Телефон: <b>${userInfo.phone}</b>`
      )
    )
    .then(() => {
      // eslint-disable-next-line no-console
      console.log('Data send to Shkapovka Bot')
    })
})

module.exports = app
