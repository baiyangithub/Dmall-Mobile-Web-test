const express = require('express')

const app = express()

app.get('/backend/poslist', (request, response) => {
  response.setHeader('Access-Control-Allow-Origin', '*')
  response.sendFile(__dirname + '/apis/poslist.html')
})

app.use(express.static(__dirname + '/public'))

app.listen(3000, () => {
  console.log('localhost:3000');
})
