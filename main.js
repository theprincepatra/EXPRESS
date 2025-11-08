const express = require('express')
const { parentPort } = require('worker_threads')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/world2', (req, res) => {
  res.send('Hello World2!')
})

app.get('/me', (req, res) => {
  res.send('Hello me!')
})

app.get('/about', (req, res) => {
  res.send('Hello about us!')
})

// app.get('/:slug1', (req, res) => {
//   res.send(`Hello ${req.params.slug1}!`)
// })

// app.get('/:slug1/:slug2', (req, res) => {
//   res.send(`Hello ${req.params.slug1} and ${req.params.slug2}!`)
// })

app.get('/login', (req, res) => {
  res.send('Login request received');
});
app.listen(port, () => {
  console.log(`Port is listening on: ${port}`)
})