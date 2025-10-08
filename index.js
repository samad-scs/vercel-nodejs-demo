// ** Server Imports
const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')

dotenv.config()

const app = express()
const port = process.env.PORT || 4040

// set api cors
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  return res.send('Express + TypeScript Server')
})

app.get('/users', (req, res) => {
  return res.json({
    data: [
      { id: 1, name: 'User One' },
      { id: 2, name: 'User Two' },
      { id: 3, name: 'User Three' }
    ]
  })
})

app.get('*', (req, res) => {
  res.send('Not Found')
})

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`)
})
