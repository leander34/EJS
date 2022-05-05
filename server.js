const express = require('express')
const app = express()

app.set("view engine", "ejs")

app.get("/", function(req, res) {

  const items = [
    {
      title: 'D',
      message: 'esenvolver aplicações/serviços de forma fácil'
    },

    {
      title: 'E',
      message: 'scrita boa'
    },

    {
      title: 'M',
      message: 'uito legal'
    },

    {
      title: 'A',
      message: 'predizado fácil'
    },

    {
      title: 'I',
      message: 'nstall ejs'
    },

    {
      title: 'S',
      message: 'imples e tranquilo'
    }
  ]
  const subtitle = "Uma linguagem de modelagem para criação de páginas HTML usando JavaScript"
  res.render("pages/index", {
    qualities: items,
    subtitle
  })
})

app.get('/sobre', function (req, res) {
  res.render('pages/about')
})

app.listen(8080)
console.log('rodando')