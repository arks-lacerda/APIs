const express = require('express')
const res = require('express/lib/response')
const axios = require('axios')

const app = express()

app.listen('3000')

app.route('/').get((req, res) => {
  axios
    .get('https://api.github.com/users/tucasrl')
    //.then(result => res.send(result.data.avatar_url))
    .then(result => res.send(`<img src="${result.data.avatar_url}"/>`))
    .catch(error => console.log(error))
    .finally('Rodando')
})

/*
app.route('/').get((req, res) => res.send(req.query.nome))
app.route('/about/user').get((req, res) => res.send(req.query))
*/

/*
app.route('/').get((req, res) => res.send('Oi'))
app.route('/:variavel').get((req, res) => res.send(req.params.variavel))
app.route('/identidade/:nome').get((req, res) => res.send(req.params.nome))
*/

/*
app.use(express.json())

app.route('/').post((req, res) => {
  const { nome, cidade } = req.body
  res.send(`Meu nome é ${nome} e minha cidade é ${cidade}`)
})
*/

/*
//middleware
app.use(express.json())

app.route('/').get((req, res) => res.send(req.query.name))
app.route('/').post((req, res) => res.send(req.body))
app.route('/:parametro').get((req, res) => res.send(req.params.parametro))

*/

/*
app.route('/:identificador').delete((req, res) => {
  res.send(req.params.identificador)
})
*/

/*
let author = 'Arthur Santos'

app.route('/').get((req, res) => res.send(author))

app.route('/').put((req, res) => {
  author = req.body.author
  res.send(author)
})
*/

//app.route('/').post((req, res) => console.log(req.body))

//app.route('/').post((req, res) => res.send(req.body))

/*
app.route('/').get((req, res) => {
  res.send('Hello')
})

app.route('/sobre').get((req, res) => {
  res.send('Hello sobre')
})
*/
